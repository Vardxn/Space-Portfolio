"use client";

/**
 * Mobile / low-power GPU detection and performance tier system.
 *
 * WHY: WebGL with post-processing (Bloom, ChromaticAberration, Vignette),
 * hundreds of instanced meshes, custom shaders with domain-warped FBM, and
 * a full HDRI skybox is extremely GPU-intensive. iPhones (especially Safari)
 * and mid-range Android devices thermal-throttle within seconds, causing
 * janky 8-15 fps scrolling. This module detects the device tier ONCE at boot
 * and exposes tuning knobs that each subsystem reads to scale its workload.
 *
 * TIERS:
 *   "high"   — desktop GPU, unrestricted
 *   "medium" — capable mobile (iPhone 15 Pro, Galaxy S24, recent iPad)
 *   "low"    — older/budget mobile, or any device where we can't confirm GPU
 *
 * DETECTION STRATEGY (no userAgent sniffing):
 *   1. Touch-only device (pointer: coarse + no fine pointer) → mobile.
 *   2. Screen size ≤ 768px logical → small-screen mobile.
 *   3. WebGL renderer string for Apple GPU / Mali / Adreno.
 *   4. devicePixelRatio > 2 on small screens → high-DPI mobile (penalise).
 */

export type PerformanceTier = "high" | "medium" | "low";

interface PerformanceConfig {
  tier: PerformanceTier;
  /** Device pixel ratio clamp for the Canvas. */
  dpr: [number, number];
  /** EffectComposer multisampling samples (0 = off). */
  multisampling: number;
  /** Whether to enable ChromaticAberration post-effect. */
  chromaticAberration: boolean;
  /** Whether to enable Vignette post-effect. */
  vignette: boolean;
  /** Bloom luminance threshold (higher = less bloom = cheaper). */
  bloomThreshold: number;
  /** Bloom intensity. */
  bloomIntensity: number;
  /** Number of comet streak instances. */
  cometCount: number;
  /** Number of warp streak instances. */
  warpCount: number;
  /** Number of asteroid instances. */
  asteroidCount: number;
  /** Asteroids tumbled per frame (round-robin batch size). */
  asteroidStep: number;
  /** Number of streak spark instances in the sun impact. */
  impactSparkCount: number;
  /** Number of debris instances in the sun impact. */
  impactDebrisCount: number;
  /** Skybox sphere segments (lower = fewer triangles). */
  skySegments: [number, number];
  /** Stars counts for the two star layers. */
  starCounts: [number, number];
  /** Sparkle counts for the two sparkle clusters. */
  sparkleCounts: [number, number];
  /** Whether to show the custom cursor (disabled on touch). */
  customCursor: boolean;
  /** Whether to use Lenis smooth scroll (iOS Safari handles it poorly). */
  smoothScroll: boolean;
  /** HDRI environment intensity. */
  envIntensity: number;
  /** Whether to render the SunImpact FBM shaders (extremely heavy). */
  sunImpactFull: boolean;
}

let _cached: PerformanceConfig | null = null;

function detectTier(): PerformanceTier {
  if (typeof window === "undefined") return "high"; // SSR fallback

  const isTouchOnly =
    window.matchMedia("(pointer: coarse)").matches &&
    !window.matchMedia("(pointer: fine)").matches;

  const isSmallScreen =
    window.innerWidth <= 768 || window.innerHeight <= 768;

  const isMobile = isTouchOnly || (isSmallScreen && "ontouchstart" in window);

  if (!isMobile) return "high";

  // On mobile, try to distinguish "medium" (flagship) from "low" (budget).
  // Use WebGL renderer string as a heuristic.
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") || canvas.getContext("webgl");
    if (gl) {
      const dbg = gl.getExtension("WEBGL_debug_renderer_info");
      if (dbg) {
        const renderer = gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) as string;
        // Apple GPU ≥ A15 / M-series chips are "medium" capable
        if (/apple gpu/i.test(renderer)) {
          const logicalWidth = window.screen.width;
          if (logicalWidth >= 390 && window.devicePixelRatio >= 3) {
            return "medium"; // Likely iPhone 14 Pro / 15 Pro or newer
          }
          return "low"; // Older iPhone
        }
        // Adreno 7xx+ or Mali-G7xx+ → medium
        if (/adreno.*7\d{2}/i.test(renderer) || /mali-g7\d{2}/i.test(renderer)) {
          return "medium";
        }
      }
    }
  } catch {
    // WebGL detection failed; assume low
  }

  return "low";
}

export function getPerformanceConfig(): PerformanceConfig {
  if (_cached) return _cached;

  const tier = detectTier();

  switch (tier) {
    case "high":
      _cached = {
        tier,
        dpr: [1, 1.75],
        multisampling: 4,
        chromaticAberration: true,
        vignette: true,
        bloomThreshold: 0.22,
        bloomIntensity: 0.95,
        cometCount: 220,
        warpCount: 350,
        asteroidCount: 130,
        asteroidStep: 30,
        impactSparkCount: 120,
        impactDebrisCount: 24,
        skySegments: [64, 40],
        starCounts: [4000, 2500],
        sparkleCounts: [60, 80],
        customCursor: true,
        smoothScroll: true,
        envIntensity: 0.5,
        sunImpactFull: true,
      };
      break;

    case "medium":
      _cached = {
        tier,
        dpr: [1, 1.5],
        multisampling: 0,
        chromaticAberration: false,
        vignette: true,
        bloomThreshold: 0.35,
        bloomIntensity: 0.7,
        cometCount: 100,
        warpCount: 120,
        asteroidCount: 50,
        asteroidStep: 15,
        impactSparkCount: 50,
        impactDebrisCount: 12,
        skySegments: [32, 24],
        starCounts: [2000, 1200],
        sparkleCounts: [30, 40],
        customCursor: false,
        smoothScroll: true,
        envIntensity: 0.35,
        sunImpactFull: true,
      };
      break;

    case "low":
    default:
      _cached = {
        tier,
        dpr: [1, 1],
        multisampling: 0,
        chromaticAberration: false,
        vignette: false,
        bloomThreshold: 0.5,
        bloomIntensity: 0.5,
        cometCount: 50,
        warpCount: 60,
        asteroidCount: 25,
        asteroidStep: 10,
        impactSparkCount: 30,
        impactDebrisCount: 8,
        skySegments: [24, 16],
        starCounts: [1000, 600],
        sparkleCounts: [20, 25],
        customCursor: false,
        smoothScroll: false,
        envIntensity: 0.25,
        sunImpactFull: false,
      };
      break;
  }

  return _cached;
}

/** Convenience: is this a mobile/touch device? */
export function isMobileDevice(): boolean {
  const config = getPerformanceConfig();
  return config.tier !== "high";
}
