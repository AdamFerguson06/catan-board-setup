import { axialToPixel, hexCorners } from './geometry';
import type { AxialCoord, Point } from './geometry';

export type HarborType = 'generic' | 'Wood' | 'Brick' | 'Sheep' | 'Wheat' | 'Ore';

export interface Harbor {
  sea: AxialCoord;
  type: HarborType;
}

export const HARBORS: Harbor[] = [
  { sea: { q: 0, r: -3 }, type: 'generic' },
  { sea: { q: 2, r: -3 }, type: 'Wheat' },
  { sea: { q: 3, r: -2 }, type: 'Ore' },
  { sea: { q: 3, r: 0 }, type: 'generic' },
  { sea: { q: 1, r: 2 }, type: 'Sheep' },
  { sea: { q: -1, r: 3 }, type: 'generic' },
  { sea: { q: -3, r: 3 }, type: 'generic' },
  { sea: { q: -3, r: 1 }, type: 'Brick' },
  { sea: { q: -2, r: -1 }, type: 'Wood' },
];

export function harborPierCorners(h: Harbor): [Point, Point] {
  const center = axialToPixel(h.sea);
  const corners = hexCorners(center, 1);
  const origin: Point = { x: 0, y: 0 };

  const sorted = corners
    .slice()
    .sort((a, b) => {
      const da = Math.hypot(a.x - origin.x, a.y - origin.y);
      const db = Math.hypot(b.x - origin.x, b.y - origin.y);
      return da - db;
    });

  return [sorted[0], sorted[1]];
}
