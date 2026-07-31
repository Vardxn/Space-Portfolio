import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vardan Pal — Software Engineer | Cloud-Native & AI",
    short_name: "Vardan Pal",
    description:
      "Portfolio of Vardan Pal, a Software Engineer building end-to-end cloud-native and AI systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#02010a",
    theme_color: "#02010a",
    lang: "en",
    categories: ["portfolio", "technology", "productivity"],
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
