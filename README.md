<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0618,50:7c3aed,100:0ea5e9&height=200&section=header&text=Space%20Portfolio&fontSize=60&fontAlignY=35&fontColor=ffffff&animation=twinkling" width="100%" />
</div>

<h1 align="center">🚀 Space Portfolio — Vardan Pal</h1>

<p align="center">
  <b>An immersive 3D space-themed portfolio built with Next.js, React Three Fiber, and Three.js.</b>
</p>

<p align="center">
  <a href="https://vardxn.vercel.app" target="_blank"><img src="https://img.shields.io/badge/🌐_Live_Demo-vardxn.vercel.app-7c3aed?style=for-the-badge" alt="Live Demo" /></a>
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Three.js-R3F-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

---

## ✨ Overview

A cinematic, scroll-driven journey through space — featuring a procedurally generated rocket, planets with custom shaders, asteroid fields, a sun-impact explosion finale, and smooth camera choreography. The entire experience runs in the browser using WebGL.

> **Inspiration & Credit:** The original 3D rocket concept and scene structure were inspired by [AbhishekBadar/portfolio](https://github.com/AbhishekBadar/portfolio). All personalization, mobile performance optimization, adaptive rendering pipeline, and responsive architecture were designed and implemented independently by me.

---

## 🎯 What I Built & Optimized

### 📱 Adaptive Performance Tier System (Self-Structured)

The original project had **zero mobile optimization** — it ran the full desktop-grade WebGL pipeline on every device, causing iPhones and Android phones to thermal-throttle at 8-15 FPS. I designed and implemented a complete **3-tier adaptive rendering system** from scratch:

| Feature | 🖥️ High (Desktop) | 📱 Medium (Flagship Mobile) | 📱 Low (Budget Mobile) |
|---|---|---|---|
| **DPR** | `[1, 1.75]` | `[1, 1.5]` | `[1, 1]` |
| **MSAA** | 4x | Off | Off |
| **Bloom Threshold** | 0.22 | 0.35 | 0.50 |
| **Chromatic Aberration** | ✅ | ❌ | ❌ |
| **Vignette** | ✅ | ✅ | ❌ |
| **Comet Particles** | 220 | 100 | 50 |
| **Warp Streaks** | 350 | 120 | 60 |
| **Asteroids** | 130 | 50 | 25 |
| **Star Particles** | 6,500 | 3,200 | 1,600 |
| **Sun Impact FBM** | Full | Full | Simplified |
| **Smooth Scroll** | Lenis | Lenis | Native (Safari-safe) |

### 🔍 Detection Strategy (No User-Agent Sniffing)

```
1. pointer: coarse + no fine pointer → mobile
2. Screen ≤ 768px + touch → small-screen mobile
3. WebGL renderer string → Apple GPU / Adreno / Mali classification
4. Screen width + DPR heuristic → flagship vs budget
```

### 🔧 Key Optimizations

- **Post-Processing Scaling** — Disables MSAA, ChromaticAberration, and Vignette on mobile GPUs to free fragment shader bandwidth
- **Particle Budget Scaling** — Dynamically reduces instanced mesh counts (comets, warp, asteroids, sparkles) by up to 75% on low-tier devices
- **Skybox LOD** — Reduces sphere geometry from 64×40 to 24×16 segments on budget devices
- **Texture Anisotropy** — Drops from 8x to 4x filtering on mobile
- **Environment Intensity** — Reduces HDRI reflection intensity to lower GPU load
- **Native Scroll Fallback** — Disables Lenis smooth scroll on iOS Safari (known compatibility issues) and falls back to native browser scroll
- **Custom Cursor Bypass** — Automatically hides the custom cursor on touch-only devices

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **3D Engine** | React Three Fiber + Three.js |
| **Post-Processing** | @react-three/postprocessing (Bloom, ChromaticAberration, Vignette) |
| **Shaders** | Custom GLSL (domain-warped FBM noise, nebula skybox, exhaust plumes) |
| **Smooth Scroll** | Lenis |
| **State** | Zustand |
| **Styling** | CSS Modules + CSS Variables |
| **Deployment** | Vercel |

---

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/Vardxn/Space-Portfolio.git
cd Space-Portfolio

# Install
npm install

# Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router pages + metadata
├── components/
│   ├── canvas/             # 3D scene components (R3F)
│   │   ├── Experience.tsx  # Main Canvas + post-processing pipeline
│   │   ├── Rocket.tsx      # Procedural rocket + exhaust plumes
│   │   ├── Planets.tsx     # About/Projects planets with custom shaders
│   │   ├── SpaceEnvironment.tsx  # Skybox, comets, warp, asteroids
│   │   ├── SunImpact.tsx   # Cinematic sun explosion finale
│   │   ├── SkillCards.tsx   # Floating 3D skill cards
│   │   ├── ProjectOrbit.tsx # Orbiting project cards
│   │   └── CameraRig.tsx   # Scroll-driven camera choreography
│   └── dom/                # HTML overlay components
│       ├── SectionOverlays.tsx  # About, Skills, Projects, Contact sections
│       ├── HeroOverlay.tsx # Landing hero text + CTA
│       ├── Navbar.tsx      # Navigation bar
│       └── ...
└── lib/
    ├── performance.ts      # 🆕 Adaptive performance tier system
    ├── journey.ts          # Camera path + section waypoints
    ├── scroll.ts           # Lenis smooth scroll integration
    ├── data.ts             # Content data (profile, projects, skills)
    └── store.ts            # Zustand UI state
```

---

## 🌐 Live Demo

**[https://vardxn.vercel.app](https://vardxn.vercel.app)**

---

## 📜 Assets & Credits

- **Original Inspiration** — [AbhishekBadar/portfolio](https://github.com/AbhishekBadar/portfolio)
- **Planet Textures** — [Solar System Scope](https://www.solarsystemscope.com/textures/) (CC BY 4.0)
- **HDRI Lighting** — "Dikhololo Night" from [Poly Haven](https://polyhaven.com) (CC0)
- **3D Models** (astronaut, spaceship) — [Quaternius Ultimate Space Kit](https://quaternius.com) (CC0)
- **ISS Model** — [NASA 3D Resources](https://github.com/nasa/NASA-3D-Resources) (public domain, courtesy NASA)
- Everything else (rocket, nebula, rings, HUD artwork) is generated procedurally in code.

---

## 👤 Author

**Vardan Pal** — [GitHub](https://github.com/Vardxn) · [LinkedIn](https://linkedin.com/in/vardxn) · [vardan2701@gmail.com](mailto:vardan2701@gmail.com)

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0618,50:7c3aed,100:0ea5e9&height=120&section=footer" width="100%" />
</div>
