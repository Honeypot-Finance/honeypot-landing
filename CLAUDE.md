# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Honeypot Landing is a Next.js 14 marketing website for Honeypot Finance, a DeFi platform on Berachain. The site features heavy animations, multiple product showcases, and partner displays.

## Development Commands

```bash
# Install dependencies (use pnpm as primary package manager)
pnpm install

# Run development server (port 3100)
pnpm dev

# Build for production
pnpm build

# Run production server
pnpm start

# Lint code
pnpm lint
```

## Architecture & Key Patterns

### Component Organization
The codebase follows atomic design principles:
- `/src/components/atoms/` - Basic reusable UI components (Button, IntroCard)
- `/src/components/molecules/` - Composite components combining atoms
- `/src/components/layout/` - Layout components (Header, Footer, LayoutWrapper)
- `/src/components/HomePage/` - Page-specific sections

### Styling Strategy
- **Tailwind CSS** for utility classes
- **SCSS modules** for component-specific styles (co-located with components)
- **Global styles** in `/src/styles/global.scss`
- Custom Gliker font loaded from `/public/fonts/`

### Key Technical Decisions
1. **Animation Library**: Framer Motion for complex animations
2. **Carousel**: React Slick with CDN-loaded stylesheets
3. **Layout Pattern**: Conditional wrapper hides header/footer on specific routes
4. **Multiple Homepage Variants**: Several iterations in `/src/app/homepage[1-4]/` and `/new-homepage/`

### Important Files & Locations
- **Main Landing Page**: `/src/app/page.tsx`
- **Layout Configuration**: `/src/app/layout.tsx` - Contains metadata and root layout
- **Partner Data**: `/src/data/partners.ts` - Partner/investor logos and metadata
- **Assets**: Images in both `/public/images/` and `/src/assets/`

### External Dependencies & CDN
The project loads Slick carousel styles from CDN in the layout:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
```

## Development Notes

- Development server runs on **port 3100** (not default 3000)
- No testing framework currently configured
- ESLint configured for code quality (run with `pnpm lint`)
- Both pnpm-lock.yaml and package-lock.json exist - use pnpm as primary package manager