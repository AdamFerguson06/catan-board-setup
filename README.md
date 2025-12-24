# Catan Board Generator

A simple React + TypeScript website that displays pre-generated, rules-compliant Catan board layouts for in-person play.

## Features

- 50 pre-generated board layouts
- All layouts are rules-compliant (no adjacent 6s and 8s)
- Random board selection with history
- Go back to previous boards
- Responsive design for mobile and desktop
- Beautiful animations and UI

## Project Structure

```
catan_board_setup/
├── src/
│   ├── layouts.ts      # All 50 board layouts data
│   ├── App.tsx         # Main React component
│   ├── App.css         # Styles
│   └── main.tsx        # Entry point
├── public/
│   ├── Robber-Pirate-Catan-logo 1.png
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
