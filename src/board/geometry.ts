export interface AxialCoord { q: number; r: number }
export interface Point { x: number; y: number }

export const HEX_SIZE = 50;

export function axialToPixel(c: AxialCoord): Point {
  return {
    x: HEX_SIZE * Math.sqrt(3) * (c.q + c.r / 2),
    y: HEX_SIZE * 1.5 * c.r,
  };
}

export function hexCorners(center: Point, scale = 1): Point[] {
  const corners: Point[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60 * Math.PI) / 180;
    corners.push({
      x: center.x + scale * HEX_SIZE * Math.sin(angle),
      y: center.y - scale * HEX_SIZE * Math.cos(angle),
    });
  }
  return corners;
}

export function polygonPoints(center: Point, scale = 1): string {
  return hexCorners(center, scale)
    .map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`)
    .join(' ');
}

export const LAND_COORDS: AxialCoord[] = [
  // row 1 (3 hexes)
  { q: 0, r: -2 }, { q: 1, r: -2 }, { q: 2, r: -2 },
  // row 2 (4 hexes)
  { q: -1, r: -1 }, { q: 0, r: -1 }, { q: 1, r: -1 }, { q: 2, r: -1 },
  // row 3 (5 hexes)
  { q: -2, r: 0 }, { q: -1, r: 0 }, { q: 0, r: 0 }, { q: 1, r: 0 }, { q: 2, r: 0 },
  // row 4 (4 hexes)
  { q: -2, r: 1 }, { q: -1, r: 1 }, { q: 0, r: 1 }, { q: 1, r: 1 },
  // row 5 (3 hexes)
  { q: -2, r: 2 }, { q: -1, r: 2 }, { q: 0, r: 2 },
];

/* One smooth giant hexagon for the water plate, like the physical frame.
   Flat top/bottom edges, vertices at left/right. R = 11·HEX_SIZE/√3 is the
   exact circumscribed hexagon: its edges pass through every outer corner
   of the sea-ring hexes (top edge sits at y = ±5.5·HEX_SIZE = ±275). */
export const FRAME_RADIUS = (11 * HEX_SIZE) / Math.sqrt(3); // ≈ 317.54

export function framePoints(): string {
  const pts: Point[] = [];
  for (let i = 0; i < 6; i++) {
    const a = (i * 60 * Math.PI) / 180;
    pts.push({ x: FRAME_RADIUS * Math.cos(a), y: FRAME_RADIUS * Math.sin(a) });
  }
  return pts.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ');
}

// Frame extents (x ±317.5, y ±275), padded ~10 units
export const VIEW_BOX = '-328 -285 656 570';
