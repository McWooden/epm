export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://cveleganprimamandiri.vercel.app/sitemap.xml',
    }
}