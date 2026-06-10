# Catan Board Generator

A simple React + TypeScript website that displays pre-generated, rules-compliant Catan board layouts for in-person play.

## Features

- 50 pre-generated board layouts
- All layouts are rules-compliant (no adjacent 6s and 8s)
- The 9 classic base-game harbors (4× 3:1, one 2:1 per resource) rendered around the coast
- Random board selection with history
- Go back to previous boards
- Single responsive SVG board — scales cleanly from phone to desktop
- Number tokens with probability dots (red 6/8)
- Warm "parchment table" theme; the water is one smooth hexagonal plate with a depth gradient and coastline, like the physical board frame

## Project Structure

```
catan_board_setup/
├── src/
│   ├── layouts.ts      # All 50 board layouts data
│   ├── App.tsx         # Root component: state + composition
│   ├── App.css         # Design tokens, base styles, app shell
│   ├── main.tsx        # Entry point
│   ├── board/
│   │   ├── geometry.ts # Axial hex grid math, land coords, water frame
│   │   ├── harbors.ts  # Harbor data (classic arrangement) + pier math
│   │   ├── Board.tsx   # SVG board: water plate, harbors, tiles, tokens
│   │   └── board.css   # Board-specific styles + animations
│   └── components/
│       ├── Header.tsx  # App bar: brand left, controls right
│       ├── Controls.tsx# Random/Back buttons + layout counter
│       ├── Legend.tsx  # Resource + harbor legend
│       └── chrome.css  # Page-chrome styles
├── public/
│   ├── Robber-Pirate-Catan-logo 1.png
│   ├── recourse-icons/ # Terrain icon PNGs
│   └── better-robber-favicons/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

This will start the development server at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Adding New Layouts

To add new layouts, edit `src/layouts.ts`:

1. Add a new array entry to the `layouts` array
2. Each layout should contain 19 hex objects with `terrain` and `number` properties
3. Valid terrains: `'Wood'`, `'Wheat'`, `'Sheep'`, `'Brick'`, `'Ore'`, `'Desert'`
4. Valid numbers: `2-12` (or `null` for Desert)

Example:

```typescript
// Layout 51
[
  { terrain: 'Wood', number: 8 }, { terrain: 'Sheep', number: 3 }, ...
]
```

## License

ISC
