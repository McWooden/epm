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
      openGraph: {
        title: 'Event organizer dan Biro Perjalanan Wisata Jawa Tengah',
        description: 'Ahli dalam Event Organizer dan Biro Perjalanan Wisata',
        url: 'https://cveleganprimamandiri.vercel.app',
        siteName: 'CV Elegan Prima Magelang',
        images: [
          {
            url: 'https://cveleganprimamandiri.vercel.app/opengraph.png', // Must be an absolute URL
            width: 800,
            height: 600,
          },
        ],
        locale: 'en_US',
        type: 'website',
      },
    }
  }