// Catan Board Layout Types
export interface HexData {
  terrain: 'Wood' | 'Wheat' | 'Sheep' | 'Brick' | 'Ore' | 'Desert';
  number: number | null;
}

export type BoardLayout = HexData[];

// All 50 pre-generated, rules-compliant layouts
// Each layout contains 19 hexes in the standard Catan board arrangement
export const layouts: BoardLayout[] = [
  // Layout 1
  [
    { terrain: 'Wood', number: 8 }, { terrain: 'Wood', number: 3 }, { terrain: 'Wheat', number: 4 },
    { terrain: 'Sheep', number: 10 }, { terrain: 'Wood', number: 5 }, { terrain: 'Ore', number: 10 }, { terrain: 'Brick', number: 11 },
    { terrain: 'Desert', number: null }, { terrain: 'Sheep', number: 9 }, { terrain: 'Brick', number: 9 }, { terrain: 'Wood', number: 12 }, { terrain: 'Wheat', number: 6 },
    { terrain: 'Sheep', number: 8 }, { terrain: 'Brick', number: 2 }, { terrain: 'Ore', number: 5 }, { terrain: 'Sheep', number: 3 },
    { terrain: 'Wheat', number: 11 }, { terrain: 'Ore', number: 6 }, { terrain: 'Wheat', number: 4 }
  ],
  // Layout 2
  [
    { terrain: 'Wheat', number: 8 }, { terrain: 'Wood', number: 5 }, { terrain: 'Wood', number: 10 },
    { terrain: 'Ore', number: 9 }, { terrain: 'Ore', number: 2 }, { terrain: 'Wood', number: 6 }, { terrain: 'Wheat', number: 3 },
    { terrain: 'Wood', number: 5 }, { terrain: 'Wheat', number: 8 }, { terrain: 'Brick', number: 4 }, { terrain: 'Wheat', number: 10 }, { terrain: 'Sheep', number: 9 },
    { terrain: 'Sheep', number: 3 }, { terrain: 'Brick', number: 12 }, { terrain: 'Sheep', number: 4 }, { terrain: 'Desert', number: null },
    { terrain: 'Sheep', number: 6 }, { terrain: 'Ore', number: 11 }, { terrain: 'Brick', number: 11 }
  ],
  // Layout 3
  [
    { terrain: 'Ore', number: 3 }, { terrain: 'Desert', number: null }, { terrain: 'Brick', number: 8 },
    { terrain: 'Wood', number: 9 }, { terrain: 'Ore', number: 6 }, { terrain: 'Sheep', number: 12 }, { terrain: 'Ore', number: 5 },
    { terrain: 'Sheep', number: 11 }, { terrain: 'Brick', number: 9 }, { terrain: 'Brick', number: 4 }, { terrain: 'Sheep', number: 11 }, { terrain: 'Wood', number: 3 },
    { terrain: 'Wheat', number: 5 }, { terrain: 'Wood', number: 10 }, { terrain: 'Wheat', number: 10 }, { terrain: 'Wheat', number: 6 },
    { terrain: 'Sheep', number: 8 }, { terrain: 'Wheat', number: 2 }, { terrain: 'Wood', number: 4 }
  ],
  // Layout 4
  [
    { terrain: 'Brick', number: 3 }, { terrain: 'Wheat', number: 6 }, { terrain: 'Wood', number: 3 },
    { terrain: 'Ore', number: 4 }, { terrain: 'Wheat', number: 9 }, { terrain: 'Ore', number: 11 }, { terrain: 'Wood', number: 6 },
    { terrain: 'Wood', number: 5 }, { terrain: 'Wheat', number: 2 }, { terrain: 'Sheep', number: 12 }, { terrain: 'Brick', number: 10 }, { terrain: 'Sheep', number: 11 },
    { terrain: 'Wheat', number: 8 }, { terrain: 'Wood', number: 4 }, { terrain: 'Desert', number: null }, { terrain: 'Sheep', number: 9 },
    { terrain: 'Ore', number: 5 }, { terrain: 'Sheep', number: 8 }, { terrain: 'Brick', number: 10 }
  ],
  // Layout 5
  [
    { terrain: 'Wheat', number: 11 }, { terrain: 'Sheep', number: 4 }, { terrain: 'Ore', number: 8 },
    { terrain: 'Desert', number: null }, { terrain: 'Sheep', number: 11 }, { terrain: 'Wheat', number: 3 }, { terrain: 'Wood', number: 9 },
    { terrain: 'Wood', number: 4 }, { terrain: 'Wood', number: 2 }, { terrain: 'Brick', number: 6 }, { terrain: 'Sheep', number: 10 }, { terrain: 'Brick', number: 5 },
    { terrain: 'Wheat', number: 6 }, { terrain: 'Ore', number: 12 }, { terrain: 'Brick', number: 5 }, { terrain: 'Sheep', number: 10 },
    { terrain: 'Wheat', number: 3 }, { terrain: 'Wood', number: 9 }, { terrain: 'Ore', number: 8 }
  ],
  // Layout 6
  [
    { terrain: 'Sheep', number: 6 }, { terrain: 'Brick', number: 9 }, { terrain: 'Wheat', number: 2 },
    { terrain: 'Wood', number: 10 }, { terrain: 'Wheat', number: 4 }, { terrain: 'Ore', number: 10 }, { terrain: 'Wood', number: 6 },
    { terrain: 'Wood', number: 3 }, { terrain: 'Brick', number: 9 }, { terrain: 'Wood', number: 5 }, { terrain: 'Ore', number: 12 }, { terrain: 'Sheep', number: 5 },
    { terrain: 'Wheat', number: 11 }, { terrain: 'Ore', number: 11 }, { terrain: 'Wheat', number: 8 }, { terrain: 'Brick', number: 3 },
    { terrain: 'Sheep', number: 8 }, { terrain: 'Desert', number: null }, { terrain: 'Sheep', number: 4 }
  ],
  // Layout 7
  [
    { terrain: 'Sheep', number: 6 }, { terrain: 'Sheep', number: 11 }, { terrain: 'Desert', number: null },
    { terrain: 'Brick', number: 5 }, { terrain: 'Ore', number: 5 }, { terrain: 'Wheat', number: 3 }, { terrain: 'Wood', number: 12 },
    { terrain: 'Sheep', number: 4 }, { terrain: 'Ore', number: 2 }, { terrain: 'Wheat', number: 6 }, { terrain: 'Brick', number: 11 }, { terrain: 'Wood', number: 8 },
    { terrain: 'Wood', number: 9 }, { terrain: 'Wheat', number: 10 }, { terrain: 'Wheat', number: 10 }, { terrain: 'Wood', number: 3 },
    { terrain: 'Sheep', number: 9 }, { terrain: 'Ore', number: 4 }, { terrain: 'Brick', number: 8 }
  ],
  // Layout 8
  [
    { terrain: 'Sheep', number: 6 }, { terrain: 'Ore', number: 3 }, { terrain: 'Wheat', number: 5 },
    { terrain: 'Ore', number: 5 }, { terrain: 'Sheep', number: 9 }, { terrain: 'Wood', number: 11 }, { terrain: 'Wood', number: 11 },
    { terrain: 'Desert', number: null }, { terrain: 'Sheep', number: 8 }, { terrain: 'Sheep', number: 10 }, { terrain: 'Brick', number: 6 }, { terrain: 'Wheat', number: 4 },
    { terrain: 'Wood', number: 2 }, { terrain: 'Wheat', number: 10 }, { terrain: 'Ore', number: 3 }, { terrain: 'Brick', number: 9 },
    { terrain: 'Wheat', number: 12 }, { terrain: 'Wood', number: 4 }, { terrain: 'Brick', number: 8 }
  ],
  // Layout 9
  [
    { terrain: 'Sheep', number: 11 }, { terrain: 'Wood', number: 5 }, { terrain: 'Desert', number: null },
    { terrain: 'Wheat', number: 6 }, { terrain: 'Ore', number: 4 }, { terrain: 'Wheat', number: 6 }, { terrain: 'Ore', number: 3 },
    { terrain: 'Sheep', number: 2 }, { terrain: 'Sheep', number: 4 }, { terrain: 'Brick', number: 5 }, { terrain: 'Wheat', number: 10 }, { terrain: 'Brick', number: 8 },
    { terrain: 'Wood', number: 9 }, { terrain: 'Wood', number: 9 }, { terrain: 'Wood', number: 3 }, { terrain: 'Ore', number: 10 },
    { terrain: 'Sheep', number: 11 }, { terrain: 'Wheat', number: 8 }, { terrain: 'Brick', number: 12 }
  ],
  // Layout 10
  [
    { terrain: 'Brick', number: 8 }, { terrain: 'Desert', number: null }, { terrain: 'Wood', number: 5 },
    { terrain: 'Brick', number: 2 }, { terrain: 'Brick', number: 3 }, { terrain: 'Wood', number: 12 }, { terrain: 'Wood', number: 5 },
    { terrain: 'Ore', number: 9 }, { terrain: 'Wood', number: 10 }, { terrain: 'Ore', number: 6 }, { terrain: 'Wheat', number: 11 }, { terrain: 'Sheep', number: 4 },
    { terrain: 'Sheep', number: 6 }, { terrain: 'Wheat', number: 11 }, { terrain: 'Wheat', number: 4 }, { terrain: 'Sheep', number: 8 },
    { terrain: 'Ore', number: 10 }, { terrain: 'Wheat', number: 9 }, { terrain: 'Sheep', number: 3 }
  ],
  // Layout 11
  [
    { terrain: 'Wood', number: 12 }, { terrain: 'Sheep', number: 4 }, { terrain: 'Wheat', number: 10 },
    { terrain: 'Brick', number: 2 }, { terrain: 'Brick', number: 3 }, { terrain: 'Wheat', number: 9 }, { terrain: 'Wheat', number: 6 },
    { terrain: 'Wood', number: 8 }, { terrain: 'Wood', number: 5 }, { terrain: 'Sheep', number: 6 }, { terrain: 'Ore', number: 5 }, { terrain: 'Wheat', number: 10 },
    { terrain: 'Sheep', number: 4 }, { terrain: 'Ore', number: 11 }, { terrain: 'Brick', number: 11 }, { terrain: 'Wood', number: 8 },
    { terrain: 'Sheep', number: 3 }, { terrain: 'Ore', number: 9 }, { terrain: 'Desert', number: null }
  ],
  // Layout 12
  [
    { terrain: 'Wheat', number: 6 }, { terrain: 'Sheep', number: 11 }, { terrain: 'Brick', number: 6 },
    { terrain: 'Ore', number: 10 }, { terrain: 'Wood', number: 12 }, { terrain: 'Ore', number: 2 }, { terrain: 'Wood', number: 5 },
    { terrain: 'Brick', number: 4 }, { terrain: 'Wheat', number: 4 }, { terrain: 'Sheep', number: 3 }, { terrain: 'Sheep', number: 5 }, { terrain: 'Sheep', number: 11 },
    { terrain: 'Wheat', number: 8 }, { terrain: 'Desert', number: null }, { terrain: 'Ore', number: 8 }, { terrain: 'Wheat', number: 3 },
    { terrain: 'Brick', number: 10 }, { terrain: 'Wood', number: 9 }, { terrain: 'Wood', number: 9 }
  ],
  // Layout 13
  [
    { terrain: 'Wheat', number: 2 }, { terrain: 'Brick', number: 6 }, { terrain: 'Ore', number: 3 },
    { terrain: 'Wood', number: 12 }, { terrain: 'Sheep', number: 4 }, { terrain: 'Ore', number: 4 }, { terrain: 'Wheat', number: 9 },
    { terrain: 'Wood', number: 6 }, { terrain: 'Sheep', number: 5 }, { terrain: 'Brick', number: 3 }, { terrain: 'Sheep', number: 9 }, { terrain: 'Wood', number: 10 },
    { terrain: 'Sheep', number: 10 }, { terrain: 'Desert', number: null }, { terrain: 'Wheat', number: 5 }, { terrain: 'Ore', number: 8 },
    { terrain: 'Wheat', number: 8 }, { terrain: 'Wood', number: 11 }, { terrain: 'Brick', number: 11 }
  ],
  // Layout 14
  [
    { terrain: 'Sheep', number: 8 }, { terrain: 'Wheat', number: 5 }, { terrain: 'Ore', number: 3 },
    { terrain: 'Wheat', number: 10 }, { terrain: 'Sheep', number: 12 }, { terrain: 'Brick', number: 10 }, { terrain: 'Ore', number: 9 },
    { terrain: 'Sheep', number: 6 }, { terrain: 'Wheat', number: 2 }, { terrain: 'Wood', number: 9 }, { terrain: 'Wood', number: 5 }, { terrain: 'Sheep', number: 6 },
    { terrain: 'Wood', number: 4 }, { terrain: 'Wood', number: 3 }, { terrain: 'Wheat', number: 8 }, { terrain: 'Brick', number: 4 },
    { terrain: 'Desert', number: null }, { terrain: 'Ore', number: 11 }, { terrain: 'Brick', number: 11 }
  ],
  // Layout 15
  [
    { terrain: 'Ore', number: 4 }, { terrain: 'Wheat', number: 5 }, { terrain: 'Brick', number: 6 },
    { terrain: 'Brick', number: 3 }, { terrain: 'Wheat', number: 5 }, { terrain: 'Wood', number: 3 }, { terrain: 'Wood', number: 9 },
    { terrain: 'Wheat', number: 8 }, { terrain: 'Ore', number: 10 }, { terrain: 'Brick', number: 8 }, { terrain: 'Wheat', number: 10 }, { terrain: 'Wood', number: 2 },
    { terrain: 'Sheep', number: 12 }, { terrain: 'Sheep', number: 9 }, { terrain: 'Sheep', number: 11 }, { terrain: 'Desert', number: null },
    { terrain: 'Wood', number: 11 }, { terrain: 'Ore', number: 4 }, { terrain: 'Sheep', number: 6 }
  ],
  // Layout 16
  [
    { terrain: 'Wheat', number: 4 }, { terrain: 'Sheep', number: 12 }, { terrain: 'Wheat', number: 9 },
    { terrain: 'Sheep', number: 9 }, { terrain: 'Ore', number: 5 }, { terrain: 'Wheat', number: 10 }, { terrain: 'Sheep', number: 11 },
    { terrain: 'Ore', number: 8 }, { terrain: 'Sheep', number: 5 }, { terrain: 'Wood', number: 10 }, { terrain: 'Brick', number: 11 }, { terrain: 'Wood', number: 6 },
    { terrain: 'Desert', number: null }, { terrain: 'Wood', number: 8 }, { terrain: 'Ore', number: 4 }, { terrain: 'Wood', number: 3 },
    { terrain: 'Wheat', number: 2 }, { terrain: 'Brick', number: 3 }, { terrain: 'Brick', number: 6 }
  ],
  // Layout 17
  [
    { terrain: 'Sheep', number: 5 }, { terrain: 'Wood', number: 6 }, { terrain: 'Ore', number: 12 },
    { terrain: 'Wheat', number: 8 }, { terrain: 'Wood', number: 2 }, { terrain: 'Brick', number: 5 }, { terrain: 'Brick', number: 6 },
    { terrain: 'Wood', number: 4 }, { terrain: 'Wood', number: 10 }, { terrain: 'Wheat', number: 10 }, { terrain: 'Wheat', number: 3 }, { terrain: 'Wheat', number: 3 },
    { terrain: 'Sheep', number: 4 }, { terrain: 'Sheep', number: 8 }, { terrain: 'Brick', number: 9 }, { terrain: 'Sheep', number: 9 },
    { terrain: 'Desert', number: null }, { terrain: 'Ore', number: 11 }, { terrain: 'Ore', number: 11 }
  ],
  // Layout 18
  [
    { terrain: 'Wheat', number: 2 }, { terrain: 'Wheat', number: 6 }, { terrain: 'Wheat', number: 4 },
    { terrain: 'Ore', number: 10 }, { terrain: 'Wood', number: 11 }, { terrain: 'Brick', number: 10 }, { terrain: 'Brick', number: 3 },
    { terrain: 'Ore', number: 8 }, { terrain: 'Desert', number: null }, { terrain: 'Sheep', number: 3 }, { terrain: 'Ore', number: 11 }, { terrain: 'Brick', number: 6 },
    { terrain: 'Sheep', number: 12 }, { terrain: 'Sheep', number: 9 }, { terrain: 'Wood', number: 5 }, { terrain: 'Wood', number: 9 },
    { terrain: 'Wood', number: 5 }, { terrain: 'Sheep', number: 4 }, { terrain: 'Wheat', number: 8 }
  ],
  // Layout 19
  [
    { terrain: 'Wood', number: 5 }, { terrain: 'Ore', number: 6 }, { terrain: 'Ore', number: 10 },
    { terrain: 'Wheat', number: 4 }, { terrain: 'Sheep', number: 3 }, { terrain: 'Desert', number: null }, { terrain: 'Wheat', number: 4 },
    { terrain: 'Brick', number: 9 }, { terrain: 'Wood', number: 12 }, { terrain: 'Brick', number: 8 }, { terrain: 'Ore', number: 11 }, { terrain: 'Sheep', number: 6 },
    { terrain: 'Wheat', number: 2 }, { terrain: 'Sheep', number: 9 }, { terrain: 'Brick', number: 10 }, { terrain: 'Sheep', number: 5 },
    { terrain: 'Wood', number: 3 }, { terrain: 'Wood', number: 8 }, { terrain: 'Wheat', number: 11 }
  ],
  // Layout 20
  [
    { terrain: 'Ore', number: 2 }, { terrain: 'Sheep', number: 8 }, { terrain: 'Wood', number: 3 },
    { terrain: 'Wheat', number: 8 }, { terrain: 'Sheep', number: 10 }, { terrain: 'Wheat', number: 10 }, { terrain: 'Sheep', number: 4 },
    { terrain: 'Brick', number: 5 }, { terrain: 'Wood', number: 3 }, { terrain: 'Wood', number: 6 }, { terrain: 'Brick', number: 12 }, { terrain: 'Ore', number: 11 },
    { terrain: 'Wheat', number: 5 }, { terrain: 'Desert', number: null }, { terrain: 'Sheep', number: 4 }, { terrain: 'Wheat', number: 11 },
    { terrain: 'Brick', number: 9 }, { terrain: 'Wood', number: 6 }, { terrain: 'Ore', number: 9 }
  ],
  // Layout 21
  [
    { terrain: 'Brick', number: 6 }, { terrain: 'Ore', number: 12 }, { terrain: 'Sheep', number: 11 },
    { terrain: 'Sheep', number: 9 }, { terrain: 'Wood', number: 4 }, { terrain: 'Wheat', number: 6 }, { terrain: 'Sheep', number: 10 },
    { terrain: 'Desert', number: null }, { terrain: 'Wheat', number: 8 }, { terrain: 'Wood', number: 3 }, { terrain: 'Wheat', number: 4 }, { terrain: 'Wheat', number: 10 },
    { terrain: 'Brick', number: 11 }, { terrain: 'Wood', number: 5 }, { terrain: 'Sheep', number: 3 }, { terrain: 'Ore', number: 8 },
    { terrain: 'Brick', number: 9 }, { terrain: 'Ore', number: 5 }, { terrain: 'Wood', number: 2 }
  ],
  // Layout 22
  [
    { terrain: 'Sheep', number: 3 }, { terrain: 'Wheat', number: 2 }, { terrain: 'Wood', number: 3 },
    { terrain: 'Wood', number: 4 }, { terrain: 'Ore', number: 10 }, { terrain: 'Wood', number: 9 }, { terrain: 'Desert', number: null },
    { terrain: 'Sheep', number: 6 }, { terrain: 'Wheat', number: 5 }, { terrain: 'Wheat', number: 6 }, { terrain: 'Brick', number: 10 }, { terrain: 'Ore', number: 5 },
    { terrain: 'Ore', number: 11 }, { terrain: 'Sheep', number: 11 }, { terrain: 'Wheat', number: 4 }, { terrain: 'Sheep', number: 9 },
    { terrain: 'Brick', number: 8 }, { terrain: 'Wood', number: 12 }, { terrain: 'Brick', number: 8 }
  ],
  // Layout 23
  [
    { terrain: 'Brick', number: 11 }, { terrain: 'Sheep', number: 9 }, { terrain: 'Sheep', number: 10 },
    { terrain: 'Wheat', number: 8 }, { terrain: 'Brick', number: 9 }, { terrain: 'Desert', number: null }, { terrain: 'Brick', number: 6 },
    { terrain: 'Wood', number: 11 }, { terrain: 'Sheep', number: 10 }, { terrain: 'Wood', number: 3 }, { terrain: 'Wood', number: 4 }, { terrain: 'Wheat', number: 3 },
    { terrain: 'Wheat', number: 2 }, { terrain: 'Sheep', number: 5 }, { terrain: 'Ore', number: 12 }, { terrain: 'Ore', number: 8 },
    { terrain: 'Wheat', number: 6 }, { terrain: 'Ore', number: 4 }, { terrain: 'Wood', number: 5 }
  ],
  // Layout 24
  [
    { terrain: 'Wood', number: 2 }, { terrain: 'Brick', number: 3 }, { terrain: 'Wheat', number: 5 },
    { terrain: 'Wood', number: 10 }, { terrain: 'Ore', number: 6 }, { terrain: 'Sheep', number: 11 }, { terrain: 'Wheat', number: 10 },
    { terrain: 'Wheat', number: 11 }, { terrain: 'Brick', number: 4 }, { terrain: 'Desert', number: null }, { terrain: 'Brick', number: 8 }, { terrain: 'Sheep', number: 12 },
    { terrain: 'Wood', number: 6 }, { terrain: 'Wheat', number: 5 }, { terrain: 'Sheep', number: 9 }, { terrain: 'Ore', number: 3 },
    { terrain: 'Ore', number: 4 }, { terrain: 'Sheep', number: 9 }, { terrain: 'Wood', number: 8 }
  ],
  // Layout 25
  [
    { terrain: 'Brick', number: 9 }, { terrain: 'Sheep', number: 5 }, { terrain: 'Wheat', number: 3 },
    { terrain: 'Brick', number: 10 }, { terrain: 'Wheat', number: 8 }, { terrain: 'Wood', number: 9 }, { terrain: 'Ore', number: 4 },
    { terrain: 'Ore', number: 10 }, { terrain: 'Wood', number: 11 }, { terrain: 'Brick', number: 2 }, { terrain: 'Sheep', number: 12 }, { terrain: 'Ore', number: 6 },
    { terrain: 'Sheep', number: 11 }, { terrain: 'Wood', number: 8 }, { terrain: 'Wood', number: 4 }, { terrain: 'Desert', number: null },
    { terrain: 'Wheat', number: 3 }, { terrain: 'Wheat', number: 5 }, { terrain: 'Sheep', number: 6 }
  ],
  // Layout 26
  [
    { terrain: 'Ore', number: 4 }, { terrain: 'Sheep', number: 3 }, { terrain: 'Brick', number: 8 },
    { terrain: 'Brick', number: 5 }, { terrain: 'Wood', number: 6 }, { terrain: 'Wheat', number: 11 }, { terrain: 'Wood', number: 9 },
    { terrain: 'Wood', number: 12 }, { terrain: 'Brick', number: 4 }, { terrain: 'Sheep', number: 11 }, { terrain: 'Sheep', number: 5 }, { terrain: 'Wheat', number: 6 },
    { terrain: 'Ore', number: 10 }, { terrain: 'Sheep', number: 2 }, { terrain: 'Wheat', number: 8 }, { terrain: 'Ore', number: 3 },
    { terrain: 'Wheat', number: 9 }, { terrain: 'Wood', number: 10 }, { terrain: 'Desert', number: null }
  ],
  // Layout 27
  [
    { terrain: 'Brick', number: 8 }, { terrain: 'Ore', number: 4 }, { terrain: 'Wood', number: 6 },
    { terrain: 'Wood', number: 3 }, { terrain: 'Wheat', number: 9 }, { terrain: 'Ore', number: 9 }, { terrain: 'Desert', number: null },
    { terrain: 'Sheep', number: 2 }, { terrain: 'Brick', number: 10 }, { terrain: 'Wheat', number: 8 }, { terrain: 'Sheep', number: 11 }, { terrain: 'Brick', number: 3 },
    { terrain: 'Ore', number: 10 }, { terrain: 'Sheep', number: 5 }, { terrain: 'Wheat', number: 12 }, { terrain: 'Wheat', number: 6 },
    { terrain: 'Wood', number: 5 }, { terrain: 'Sheep', number: 4 }, { terrain: 'Wood', number: 11 }
  ],
  // Layout 28
  [
    { terrain: 'Ore', number: 10 }, { terrain: 'Wheat', number: 9 }, { terrain: 'Brick', number: 12 },
    { terrain: 'Wood', number: 6 }, { terrain: 'Wheat', number: 10 }, { terrain: 'Wood', number: 11 }, { terrain: 'Brick', number: 4 },
    { terrain: 'Wheat', number: 9 }, { terrain: 'Sheep', number: 3 }, { terrain: 'Wheat', number: 8 }, { terrain: 'Sheep', number: 4 }, { terrain: 'Ore', number: 6 },
    { terrain: 'Wood', number: 2 }, { terrain: 'Desert', number: null }, { terrain: 'Sheep', number: 5 }, { terrain: 'Ore', number: 5 },
    { terrain: 'Brick', number: 8 }, { terrain: 'Sheep', number: 3 }, { terrain: 'Wood', number: 11 }
  ],
  // Layout 29
  [
    { terrain: 'Wood', number: 9 }, { terrain: 'Wheat', number: 6 }, { terrain: 'Ore', number: 3 },
    { terrain: 'Wood', number: 8 }, { terrain: 'Brick', number: 3 }, { terrain: 'Wood', number: 4 }, { terrain: 'Sheep', number: 10 },
    { terrain: 'Wheat', number: 5 }, { terrain: 'Brick', number: 5 }, { terrain: 'Brick', number: 11 }, { terrain: 'Sheep', number: 8 }, { terrain: 'Desert', number: null },
    { terrain: 'Sheep', number: 6 }, { terrain: 'Wheat', number: 9 }, { terrain: 'Sheep', number: 2 }, { terrain: 'Ore', number: 4 },
    { terrain: 'Ore', number: 12 }, { terrain: 'Wheat', number: 11 }, { terrain: 'Wood', number: 10 }
  ],
  // Layout 30
  [
    { terrain: 'Brick', number: 3 }, { terrain: 'Wood', number: 5 }, { terrain: 'Sheep', number: 8 },
    { terrain: 'Brick', number: 4 }, { terrain: 'Sheep', number: 6 }, { terrain: 'Brick', number: 11 }, { terrain: 'Ore', number: 2 },
    { terrain: 'Wood', number: 4 }, { terrain: 'Wheat', number: 5 }, { terrain: 'Wood', number: 11 }, { terrain: 'Desert', number: null }, { terrain: 'Wheat', number: 10 },
    { terrain: 'Wheat', number: 10 }, { terrain: 'Sheep', number: 3 }, { terrain: 'Wood', number: 9 }, { terrain: 'Ore', number: 12 },
    { terrain: 'Ore', number: 6 }, { terrain: 'Sheep', number: 9 }, { terrain: 'Wheat', number: 8 }
  ],
  // Layout 31
  [
    { terrain: 'Wheat', number: 11 }, { terrain: 'Ore', number: 3 }, { terrain: 'Wood', number: 4 },
    { terrain: 'Brick', number: 9 }, { terrain: 'Sheep', number: 4 }, { terrain: 'Brick', number: 8 }, { terrain: 'Ore', number: 5 },
    { terrain: 'Wood', number: 3 }, { terrain: 'Wood', number: 6 }, { terrain: 'Brick', number: 2 }, { terrain: 'Wheat', number: 5 }, { terrain: 'Sheep', number: 8 },
    { terrain: 'Desert', number: null }, { terrain: 'Wheat', number: 9 }, { terrain: 'Wood', number: 6 }, { terrain: 'Wheat', number: 11 },
    { terrain: 'Sheep', number: 10 }, { terrain: 'Sheep', number: 12 }, { terrain: 'Ore', number: 10 }
  ],
  // Layout 32
  [
    { terrain: 'Wood', number: 9 }, { terrain: 'Brick', number: 11 }, { terrain: 'Brick', number: 5 },
    { terrain: 'Wheat', number: 5 }, { terrain: 'Sheep', number: 8 }, { terrain: 'Ore', number: 9 }, { terrain: 'Brick', number: 4 },
    { terrain: 'Wood', number: 6 }, { terrain: 'Wood', number: 11 }, { terrain: 'Sheep', number: 3 }, { terrain: 'Sheep', number: 4 }, { terrain: 'Wood', number: 8 },
    { terrain: 'Desert', number: null }, { terrain: 'Wheat', number: 6 }, { terrain: 'Ore', number: 10 }, { terrain: 'Sheep', number: 2 },
    { terrain: 'Wheat', number: 3 }, { terrain: 'Ore', number: 10 }, { terrain: 'Wheat', number: 12 }
  ],
  // Layout 33
  [
    { terrain: 'Wood', number: 6 }, { terrain: 'Sheep', number: 11 }, { terrain: 'Brick', number: 2 },
    { terrain: 'Desert', number: null }, { terrain: 'Brick', number: 5 }, { terrain: 'Ore', number: 9 }, { terrain: 'Wood', number: 4 },
    { terrain: 'Wood', number: 8 }, { terrain: 'Wood', number: 10 }, { terrain: 'Wheat', number: 11 }, { terrain: 'Sheep', number: 3 }, { terrain: 'Wheat', number: 6 },
    { terrain: 'Brick', number: 4 }, { terrain: 'Wheat', number: 5 }, { terrain: 'Ore', number: 3 }, { terrain: 'Ore', number: 12 },
    { terrain: 'Sheep', number: 9 }, { terrain: 'Sheep', number: 10 }, { terrain: 'Wheat', number: 8 }
  ],
  // Layout 34
  [
    { terrain: 'Wood', number: 9 }, { terrain: 'Sheep', number: 8 }, { terrain: 'Sheep', number: 4 },
    { terrain: 'Wheat', number: 5 }, { terrain: 'Wheat', number: 11 }, { terrain: 'Wood', number: 11 }, { terrain: 'Wood', number: 3 },
    { terrain: 'Wheat', number: 6 }, { terrain: 'Desert', number: null }, { terrain: 'Ore', number: 8 }, { terrain: 'Ore', number: 12 }, { terrain: 'Sheep', number: 2 },
    { terrain: 'Brick', number: 3 }, { terrain: 'Sheep', number: 10 }, { terrain: 'Brick', number: 4 }, { terrain: 'Wood', number: 10 },
    { terrain: 'Brick', number: 9 }, { terrain: 'Wheat', number: 6 }, { terrain: 'Ore', number: 5 }
  ],
  // Layout 35
  [
    { terrain: 'Sheep', number: 8 }, { terrain: 'Sheep', number: 4 }, { terrain: 'Sheep', number: 6 },
    { terrain: 'Brick', number: 10 }, { terrain: 'Wheat', number: 3 }, { terrain: 'Brick', number: 10 }, { terrain: 'Ore', number: 3 },
    { terrain: 'Wood', number: 9 }, { terrain: 'Wheat', number: 11 }, { terrain: 'Ore', number: 5 }, { terrain: 'Wheat', number: 11 }, { terrain: 'Wood', number: 2 },
    { terrain: 'Wood', number: 9 }, { terrain: 'Wood', number: 12 }, { terrain: 'Desert', number: null }, { terrain: 'Ore', number: 5 },
    { terrain: 'Brick', number: 6 }, { terrain: 'Wheat', number: 4 }, { terrain: 'Sheep', number: 8 }
  ],
  // Layout 36
  [
    { terrain: 'Wood', number: 5 }, { terrain: 'Ore', number: 9 }, { terrain: 'Wood', number: 8 },
    { terrain: 'Brick', number: 6 }, { terrain: 'Wood', number: 11 }, { terrain: 'Wood', number: 4 }, { terrain: 'Sheep', number: 12 },
    { terrain: 'Sheep', number: 4 }, { terrain: 'Wheat', number: 3 }, { terrain: 'Sheep', number: 2 }, { terrain: 'Ore', number: 9 }, { terrain: 'Sheep', number: 8 },
    { terrain: 'Ore', number: 5 }, { terrain: 'Desert', number: null }, { terrain: 'Wheat', number: 10 }, { terrain: 'Brick', number: 10 },
    { terrain: 'Wheat', number: 3 }, { terrain: 'Wheat', number: 11 }, { terrain: 'Brick', number: 6 }
  ],
  // Layout 37
  [
    { terrain: 'Brick', number: 5 }, { terrain: 'Wheat', number: 3 }, { terrain: 'Ore', number: 9 },
    { terrain: 'Sheep', number: 6 }, { terrain: 'Ore', number: 10 }, { terrain: 'Desert', number: null }, { terrain: 'Wood', number: 3 },
    { terrain: 'Brick', number: 2 }, { terrain: 'Wood', number: 4 }, { terrain: 'Wood', number: 8 }, { terrain: 'Wheat', number: 4 }, { terrain: 'Ore', number: 5 },
    { terrain: 'Wheat', number: 6 }, { terrain: 'Sheep', number: 11 }, { terrain: 'Wood', number: 10 }, { terrain: 'Sheep', number: 12 },
    { terrain: 'Brick', number: 11 }, { terrain: 'Sheep', number: 9 }, { terrain: 'Wheat', number: 8 }
  ],
  // Layout 38
  [
    { terrain: 'Desert', number: null }, { terrain: 'Wood', number: 9 }, { terrain: 'Sheep', number: 4 },
    { terrain: 'Wood', number: 6 }, { terrain: 'Ore', number: 5 }, { terrain: 'Sheep', number: 6 }, { terrain: 'Wheat', number: 9 },
    { terrain: 'Sheep', number: 11 }, { terrain: 'Sheep', number: 10 }, { terrain: 'Ore', number: 3 }, { terrain: 'Brick', number: 4 }, { terrain: 'Wood', number: 11 },
    { terrain: 'Ore', number: 8 }, { terrain: 'Wood', number: 5 }, { terrain: 'Wheat', number: 10 }, { terrain: 'Brick', number: 3 },
    { terrain: 'Wheat', number: 12 }, { terrain: 'Brick', number: 2 }, { terrain: 'Wheat', number: 8 }
  ],
  // Layout 39
  [
    { terrain: 'Ore', number: 12 }, { terrain: 'Brick', number: 6 }, { terrain: 'Wood', number: 10 },
    { terrain: 'Ore', number: 8 }, { terrain: 'Brick', number: 4 }, { terrain: 'Sheep', number: 5 }, { terrain: 'Sheep', number: 3 },
    { terrain: 'Desert', number: null }, { terrain: 'Brick', number: 10 }, { terrain: 'Wheat', number: 11 }, { terrain: 'Sheep', number: 2 }, { terrain: 'Wheat', number: 8 },
    { terrain: 'Wood', number: 5 }, { terrain: 'Wood', number: 4 }, { terrain: 'Sheep', number: 9 }, { terrain: 'Wheat', number: 11 },
    { terrain: 'Ore', number: 9 }, { terrain: 'Wood', number: 3 }, { terrain: 'Wheat', number: 6 }
  ],
  // Layout 40
  [
    { terrain: 'Ore', number: 5 }, { terrain: 'Ore', number: 6 }, { terrain: 'Sheep', number: 2 },
    { terrain: 'Wood', number: 4 }, { terrain: 'Wheat', number: 11 }, { terrain: 'Wood', number: 4 }, { terrain: 'Desert', number: null },
    { terrain: 'Sheep', number: 6 }, { terrain: 'Wheat', number: 10 }, { terrain: 'Wood', number: 9 }, { terrain: 'Sheep', number: 10 }, { terrain: 'Brick', number: 8 },
    { terrain: 'Ore', number: 3 }, { terrain: 'Wheat', number: 12 }, { terrain: 'Brick', number: 8 }, { terrain: 'Wood', number: 11 },
    { terrain: 'Wheat', number: 3 }, { terrain: 'Brick', number: 9 }, { terrain: 'Sheep', number: 5 }
  ],
  // Layout 41
  [
    { terrain: 'Brick', number: 4 }, { terrain: 'Sheep', number: 6 }, { terrain: 'Desert', number: null },
    { terrain: 'Ore', number: 6 }, { terrain: 'Ore', number: 2 }, { terrain: 'Wood', number: 10 }, { terrain: 'Ore', number: 8 },
    { terrain: 'Wheat', number: 10 }, { terrain: 'Sheep', number: 9 }, { terrain: 'Wood', number: 11 }, { terrain: 'Wood', number: 3 }, { terrain: 'Wheat', number: 12 },
    { terrain: 'Wood', number: 11 }, { terrain: 'Sheep', number: 3 }, { terrain: 'Wheat', number: 9 }, { terrain: 'Sheep', number: 5 },
    { terrain: 'Wheat', number: 8 }, { terrain: 'Brick', number: 5 }, { terrain: 'Brick', number: 4 }
  ],
  // Layout 42
  [
    { terrain: 'Wheat', number: 11 }, { terrain: 'Wood', number: 10 }, { terrain: 'Wheat', number: 3 },
    { terrain: 'Sheep', number: 12 }, { terrain: 'Ore', number: 10 }, { terrain: 'Wheat', number: 8 }, { terrain: 'Sheep', number: 5 },
    { terrain: 'Wood', number: 4 }, { terrain: 'Wood', number: 8 }, { terrain: 'Desert', number: null }, { terrain: 'Ore', number: 2 }, { terrain: 'Wheat', number: 6 },
    { terrain: 'Wood', number: 11 }, { terrain: 'Sheep', number: 9 }, { terrain: 'Brick', number: 9 }, { terrain: 'Ore', number: 4 },
    { terrain: 'Brick', number: 3 }, { terrain: 'Sheep', number: 5 }, { terrain: 'Brick', number: 6 }
  ],
  // Layout 43
  [
    { terrain: 'Ore', number: 12 }, { terrain: 'Wheat', number: 8 }, { terrain: 'Wood', number: 4 },
    { terrain: 'Desert', number: null }, { terrain: 'Wood', number: 9 }, { terrain: 'Wheat', number: 10 }, { terrain: 'Ore', number: 6 },
    { terrain: 'Wood', number: 5 }, { terrain: 'Brick', number: 6 }, { terrain: 'Sheep', number: 3 }, { terrain: 'Wheat', number: 3 }, { terrain: 'Brick', number: 2 },
    { terrain: 'Sheep', number: 10 }, { terrain: 'Sheep', number: 4 }, { terrain: 'Brick', number: 11 }, { terrain: 'Wheat', number: 11 },
    { terrain: 'Sheep', number: 8 }, { terrain: 'Wood', number: 9 }, { terrain: 'Ore', number: 5 }
  ],
  // Layout 44
  [
    { terrain: 'Wheat', number: 8 }, { terrain: 'Wood', number: 4 }, { terrain: 'Wheat', number: 9 },
    { terrain: 'Wheat', number: 10 }, { terrain: 'Desert', number: null }, { terrain: 'Ore', number: 6 }, { terrain: 'Wood', number: 5 },
    { terrain: 'Sheep', number: 3 }, { terrain: 'Brick', number: 11 }, { terrain: 'Brick', number: 9 }, { terrain: 'Sheep', number: 4 }, { terrain: 'Ore', number: 6 },
    { terrain: 'Sheep', number: 2 }, { terrain: 'Wood', number: 12 }, { terrain: 'Sheep', number: 11 }, { terrain: 'Brick', number: 10 },
    { terrain: 'Wheat', number: 8 }, { terrain: 'Ore', number: 5 }, { terrain: 'Wood', number: 3 }
  ],
  // Layout 45
  [
    { terrain: 'Wood', number: 6 }, { terrain: 'Ore', number: 3 }, { terrain: 'Desert', number: null },
    { terrain: 'Wheat', number: 9 }, { terrain: 'Ore', number: 10 }, { terrain: 'Wheat', number: 2 }, { terrain: 'Sheep', number: 9 },
    { terrain: 'Brick', number: 4 }, { terrain: 'Wood', number: 5 }, { terrain: 'Wood', number: 10 }, { terrain: 'Wheat', number: 5 }, { terrain: 'Wood', number: 6 },
    { terrain: 'Sheep', number: 11 }, { terrain: 'Sheep', number: 3 }, { terrain: 'Brick', number: 8 }, { terrain: 'Brick', number: 4 },
    { terrain: 'Sheep', number: 8 }, { terrain: 'Ore', number: 12 }, { terrain: 'Wheat', number: 11 }
  ],
  // Layout 46
  [
    { terrain: 'Wood', number: 6 }, { terrain: 'Wheat', number: 3 }, { terrain: 'Ore', number: 6 },
    { terrain: 'Wheat', number: 11 }, { terrain: 'Wheat', number: 4 }, { terrain: 'Wood', number: 10 }, { terrain: 'Sheep', number: 4 },
    { terrain: 'Wood', number: 9 }, { terrain: 'Sheep', number: 5 }, { terrain: 'Brick', number: 8 }, { terrain: 'Brick', number: 9 }, { terrain: 'Ore', number: 11 },
    { terrain: 'Sheep', number: 5 }, { terrain: 'Brick', number: 2 }, { terrain: 'Desert', number: null }, { terrain: 'Sheep', number: 12 },
    { terrain: 'Wheat', number: 8 }, { terrain: 'Wood', number: 10 }, { terrain: 'Ore', number: 3 }
  ],
  // Layout 47
  [
    { terrain: 'Wood', number: 4 }, { terrain: 'Brick', number: 4 }, { terrain: 'Wheat', number: 8 },
    { terrain: 'Brick', number: 5 }, { terrain: 'Ore', number: 9 }, { terrain: 'Ore', number: 5 }, { terrain: 'Wheat', number: 12 },
    { terrain: 'Brick', number: 11 }, { terrain: 'Sheep', number: 11 }, { terrain: 'Sheep', number: 8 }, { terrain: 'Sheep', number: 2 }, { terrain: 'Wheat', number: 10 },
    { terrain: 'Wood', number: 3 }, { terrain: 'Ore', number: 9 }, { terrain: 'Desert', number: null }, { terrain: 'Wood', number: 6 },
    { terrain: 'Wheat', number: 10 }, { terrain: 'Sheep', number: 6 }, { terrain: 'Wood', number: 3 }
  ],
  // Layout 48
  [
    { terrain: 'Sheep', number: 3 }, { terrain: 'Sheep', number: 8 }, { terrain: 'Brick', number: 2 },
    { terrain: 'Sheep', number: 12 }, { terrain: 'Wheat', number: 5 }, { terrain: 'Wood', number: 9 }, { terrain: 'Wood', number: 11 },
    { terrain: 'Ore', number: 4 }, { terrain: 'Wheat', number: 9 }, { terrain: 'Ore', number: 5 }, { terrain: 'Wood', number: 11 }, { terrain: 'Brick', number: 6 },
    { terrain: 'Wood', number: 3 }, { terrain: 'Ore', number: 8 }, { terrain: 'Wheat', number: 4 }, { terrain: 'Brick', number: 10 },
    { terrain: 'Desert', number: null }, { terrain: 'Sheep', number: 10 }, { terrain: 'Wheat', number: 6 }
  ],
  // Layout 49
  [
    { terrain: 'Desert', number: null }, { terrain: 'Sheep', number: 6 }, { terrain: 'Wood', number: 3 },
    { terrain: 'Wheat', number: 8 }, { terrain: 'Ore', number: 4 }, { terrain: 'Sheep', number: 4 }, { terrain: 'Wheat', number: 5 },
    { terrain: 'Ore', number: 10 }, { terrain: 'Brick', number: 11 }, { terrain: 'Brick', number: 8 }, { terrain: 'Brick', number: 2 }, { terrain: 'Sheep', number: 5 },
    { terrain: 'Wood', number: 9 }, { terrain: 'Wood', number: 10 }, { terrain: 'Wheat', number: 9 }, { terrain: 'Sheep', number: 6 },
    { terrain: 'Wheat', number: 11 }, { terrain: 'Wood', number: 12 }, { terrain: 'Ore', number: 3 }
  ],
  // Layout 50
  [
    { terrain: 'Desert', number: null }, { terrain: 'Ore', number: 11 }, { terrain: 'Sheep', number: 8 },
    { terrain: 'Brick', number: 10 }, { terrain: 'Ore', number: 3 }, { terrain: 'Brick', number: 3 }, { terrain: 'Wheat', number: 9 },
    { terrain: 'Ore', number: 6 }, { terrain: 'Brick', number: 5 }, { terrain: 'Wheat', number: 10 }, { terrain: 'Wheat', number: 5 }, { terrain: 'Sheep', number: 11 },
    { terrain: 'Wood', number: 4 }, { terrain: 'Sheep', number: 4 }, { terrain: 'Wood', number: 2 }, { terrain: 'Wheat', number: 8 },
    { terrain: 'Sheep', number: 9 }, { terrain: 'Wood', number: 6 }, { terrain: 'Wood', number: 12 }
  ]
];

// Board row structure (hex positions per row)
export const boardStructure = [
  [1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19]
];

// Terrain icons mapping
export const terrainIcons: Record<string, string> = {
  Wood: '🌲',
  Wheat: '🌾',
  Sheep: '🐑',
  Brick: '🧱',
  Ore: '⛰️',
  Desert: '🏜️'
};

// Number to probability dots mapping
export const probabilityDots: Record<number, number> = {
  2: 1, 12: 1,
  3: 2, 11: 2,
  4: 3, 10: 3,
  5: 4, 9: 4,
  6: 5, 8: 5
};

