# Cardioimmunology Research Group - Next.js Version

Modern Next.js 16 + TypeScript implementation of the Cardioimmunology, Myocarditis & Pericarditis Research Group website.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules + Tailwind CSS
- **Fonts**: Outfit + Plus Jakarta Sans (Google Fonts)
- **Icons**: FontAwesome 6
- **Deployment**: GitHub Pages (static export)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page component
│   ├── page.module.css # Page styles
│   └── globals.css     # Global styles & CSS variables
├── components/
│   ├── Navbar.tsx      # Navigation component
│   ├── Navbar.module.css
│   ├── TeamCard.tsx    # Team member card component
│   └── TeamCard.module.css
├── data/
│   └── content.ts      # All site content (team, publications, etc.)
└── types/
    └── index.ts        # TypeScript interfaces
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

## Deployment

This project is configured for GitHub Pages deployment via GitHub Actions.

### Manual deployment:

```bash
npm run build
# Output is in the 'out' directory
```

### GitHub Actions (automatic):

The workflow in `.github/workflows/deploy.yml` automatically builds and deploys on push to `main`.

## Configuration

- `next.config.ts` - Configured for static export with `/Myocarditis_group` base path
- `tsconfig.json` - TypeScript config with `@/` path alias

## Original HTML Site

The original HTML site is in the parent directory (`../index.html`). Both versions are functionally identical but this Next.js version offers:

- Type safety with TypeScript
- Component-based architecture
- Better code organization
- Easier maintenance and updates
