# Techie Terry's Tech Blog

A satirical static blog chronicling the eternal optimism of "Techie Terry," a fictional tech enthusiast who has been writing about technology's promise to unite humanity since the 1980s.

**Live site:** [techieterry.online](https://techieterry.online)

## Project Overview

Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/), this static site features:

- **12 blog posts** spanning from 1984 to 2025, each showcasing Terry's unwavering technological optimism
- **Decade-based navigation** to explore posts by era
- **Fictional comment sections** with period-appropriate reactions
- **Stallman-themed posts** tracking Terry's evolving dismissiveness toward free software ideals
- **Zero JavaScript by default** for optimal performance

### The Satirical Premise

Each decade brings new technological hope, a brief acknowledgment that previous predictions were "slightly off," and unwavering certainty that *this time* it's different:

- **1980s**: Personal computers will democratize knowledge
- **1990s**: The internet will unite humanity across cultures
- **2000s**: Social media will keep us meaningfully connected
- **2010s**: Content creation will give everyone a voice
- **2020s**: AI will finally deliver on all previous promises

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3013`.

### Available Commands

| Command             | Description                          |
| :------------------ | :----------------------------------- |
| `npm install`       | Install dependencies                 |
| `npm run dev`       | Start dev server at `localhost:3013` |
| `npm run build`     | Build production site to `./dist/`   |
| `npm run preview`   | Preview production build locally     |

## Deployment

Build and deploy the static site:

```bash
npm run build
rsync -avz dist/ user@server:/var/www/techieterry.online/
```

## Project Structure

```
src/
├── content/posts/      # Blog posts in Markdown
├── layouts/            # Astro layouts (BaseLayout, BlogPost)
├── components/         # Reusable components
├── pages/              # Routes (index, decade archives, posts)
└── styles/             # Global CSS with Tailwind
public/                 # Static assets (images, favicon)
```

## License

This project is for educational and satirical purposes.
