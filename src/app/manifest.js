export default function manifest() {
    return {
      name: 'CV Elegan Prima Mandiri',
      short_name: 'Elegan Prima Mandiri',
      description: 'Event organizer dan Biro Perjalanan Wisata Jawa Tengah',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#fff',
      icons: [
        {
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }