# CONCRETE — Architecture Without Apology

An independent digital architecture magazine and editorial UI/UX portfolio dedicated to brutalist architecture, raw materials, monumental structures, and unconventional architectural forms.

## Design Tokens

| Token | Value | Purpose |
|---|---|---|
| **Concrete** | `#F2F1EC` | Primary background canvas |
| **Ink** | `#191A17` | Structural borders, dominant typography, dark overlays |
| **Signal Red** | `#EF3D24` | Active routes, index tags, manifesto canvas, focal markers |
| **Border Grey** | `#BDBDB4` | 1px editorial dividing rules |
| **Secondary Surface** | `#E5E4DE` | Material intelligence section background |
| **Muted Ink** | `#66665F` | Secondary metadata and technical labels |

## Tech Stack

- **Framework**: Next.js 15 (App Router, Static Site Generation)
- **UI Library**: React 19
- **Type Safety**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4
- **Typography**: Inter & IBM Plex Mono via `next/font/google`
- **Data**: Static data modules (`@/data/buildings`)

## Project Structure

```
├── app/
│   ├── archive/
│   │   └── page.tsx             # The Archive with live search, 3 filters, view toggle
│   ├── buildings/
│   │   └── [slug]/
│   │       └── page.tsx         # Building Dossier specimen template with hotspots
│   ├── globals.css              # Custom brutalist rules and responsive tokens
│   ├── layout.tsx               # Root layout, Google fonts, OpenGraph metadata
│   ├── not-found.tsx            # Custom brutalist 404 page
│   ├── page.tsx                 # The Index homepage
│   ├── robots.ts                # Dynamic robots.txt
│   └── sitemap.ts               # Dynamic XML sitemap
├── components/
│   ├── CoverPhoto.tsx           # Framed architectural hero with coordinates
│   ├── FeaturedDossier.tsx      # Section 001 featured story
│   ├── ManifestoSection.tsx     # Full-bleed Signal Red manifesto block
│   ├── Masthead.tsx             # 242px fluid display typography
│   ├── MaterialIntelligence.tsx # Interactive hotspot markers & synced detail cards
│   ├── SelectedStories.tsx      # 3-column field notes grid
│   ├── SiteFooter.tsx           # Reusable global footer
│   └── SiteHeader.tsx           # 76px global navigation with active state
├── data/
│   └── buildings.ts             # 9 verified architectural specimens data model
└── public/
    └── images/buildings/        # High-resolution architectural photography
```

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

```bash
# Push to GitHub, then link with Vercel CLI or Vercel dashboard:
npm run build
npx vercel --prod
```
