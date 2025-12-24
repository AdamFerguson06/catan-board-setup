# Catan Board Setup Generator

A simple web app that displays pre-generated, rules-compliant Catan board layouts for quick physical game setup.

## Features

- 50 pre-generated board layouts
- All layouts follow official rules (no adjacent 6s and 8s)
- Beautiful hexagonal visual display
- Random layout selection
- Responsive design for mobile and desktop

## Running Locally

### Option 1: Using npm (recommended)

```bash
npm start
```

Then open http://localhost:3000 in your browser.

### Option 2: Using Python

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080 in your browser.

### Option 3: Using PHP

```bash
php -S localhost:8080
```

Then open http://localhost:8080 in your browser.

### Option 4: Just open the file

You can also simply open `index.html` directly in your browser (some features may be limited due to CORS).

## Usage

1. Click **"🎲 Random Board"** to display a random layout
2. Use the layout number shown to reproduce the same board later
3. Set up your physical Catan board to match the display

## Board Layout

The board uses the standard 19-hex Catan layout:

```
        [1] [2] [3]
      [4] [5] [6] [7]
    [8] [9] [10] [11] [12]
      [13] [14] [15] [16]
        [17] [18] [19]
```

## Terrain Types

| Color | Terrain | Resource |
|-------|---------|----------|
| 🌲 Dark Green | Forest | Wood |
| 🌾 Yellow | Fields | Wheat |
| 🐑 Light Green | Pasture | Sheep |
| 🧱 Red | Hills | Brick |
| ⛰️ Gray | Mountains | Ore |
| 🏜️ Tan | Desert | None |

