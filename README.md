# DesignOnCue

A modern design studio website built with Next.js and headless WordPress. This project showcases branding, web design, logo design, and graphic design services.

## Features

- **Next.js 15** with TypeScript and App Router
- **Tailwind CSS** for styling
- **Headless WordPress Integration** ready for content management
- **Responsive Design** optimized for all devices
- **SEO Optimized** with proper meta tags and structure
- **Vercel Ready** for deployment

## Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **CMS**: WordPress (headless setup)
- **Hosting**: Vercel
- **Data Fetching**: WordPress REST API / GraphQL

## Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## WordPress Setup

1. Copy `.env.local.example` to `.env.local`
2. Update the `WORDPRESS_URL` with your WordPress site URL
3. Ensure your WordPress site has the REST API enabled

```bash
cp .env.local.example .env.local
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── lib/                 # Utility functions and API clients
│   └── wordpress.ts     # WordPress API integration
└── components/          # Reusable React components (to be added)
```

## WordPress Integration

The project includes a WordPress API client in `src/lib/wordpress.ts` that provides:

- `getPosts()` - Fetch blog posts
- `getPost(slug)` - Fetch single post by slug
- `getPages()` - Fetch all pages
- `getPage(slug)` - Fetch single page by slug

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add your environment variables in the Vercel dashboard
3. Deploy!

### Manual Deployment

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary to DesignOnCue.
