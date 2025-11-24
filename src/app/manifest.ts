import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Next.js App',
    short_name: 'Next.js App',
    description: 'Next.js App',
    start_url: '/',
    display: 'standalone',
    background_color: '#1f2029',
    theme_color: '#1f2029',
    icons: [
      {
        src: '/assets/Icons/favicon/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }
}