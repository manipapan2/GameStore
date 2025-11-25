import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Game Store',
    short_name: 'Game Store',
    description: 'Browse games and buy them',
    start_url: '/',
    theme_color: "#242731",
    background_color: "#242731",
    display: "standalone",
    icons: [
    {
      src: "/assets/icons/web-app-manifest-192x192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "maskable"
    },
    {
      src: "/assets/icons/web-app-manifest-512x512.png",
      sizes: "512x512",
      type: "image/png",
      // purpose: "maskable"
    }
  ],
  }
}