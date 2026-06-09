import type { BoardLayout } from '../layouts';
import { terrainIcons, probabilityDots } from '../layouts';
import {
  axialToPixel,
  polygonPoints,
  LAND_COORDS,
  SEA_COORDS,
  VIEW_BOX,
} from './geometry';
import { HARBORS } from './harbors';
import type { Harbor } from './harbors';
import { harborPierCorners } from './harbors';
import './board.css';

interface BoardProps {
  layout: BoardLayout;
}

// ── Sub-components ─────────────────────────────────────────────────────────────

interface HarborMarkProps {
  harbor: Harbor;
}

function HarborMark({ harbor }: HarborMarkProps) {
  const center = axialToPixel(harbor.sea);
  const [p1, p2] = harborPierCorners(harbor);
  const isGeneric = harbor.type === 'generic';

  return (
    <g className="harbor">
      {/* Pier lines */}
      <line
        x1={center.x} y1={center.y}
        x2={p1.x} y2={p1.y}
        stroke="#c9a063"
        strokeWidth={5}
        strokeLinecap="round"
        opacity={0.95}
      />
      <line
        x1={center.x} y1={center.y}
        x2={p2.x} y2={p2.y}
        stroke="#c9a063"
        strokeWidth={5}
        strokeLinecap="round"
        opacity={0.95}
      />
      {/* Badge background */}
      <circle
        cx={center.x}
        cy={center.y}
        r={16}
        fill="var(--token-face, #f7f1df)"
        stroke="#b08d57"
        strokeWidth={2}
      />
      {isGeneric ? (
        <text
          x={center.x}
          y={center.y}
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="'Cinzel', serif"
          fontSize={12}
          fontWeight={700}
          fill="var(--text-dark, #16222e)"
        >
          3:1
        </text>
      ) : (
        <>
          <image
            href={terrainIcons[harbor.type]}
            x={center.x - 9}
            y={center.y - 13}
            width={18}
            height={18}
          />
          <text
            x={center.x}
            y={center.y + 9.5}
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="'Cinzel', serif"
            fontSize={8.5}
            fontWeight={700}
            fill="var(--text-dark, #16222e)"
          >
            2:1
          </text>
        </>
      )}
    </g>
  );
}

interface HexTileProps {
  hex: BoardLayout[number];
  index: number;
}

function HexTile({ hex, index }: HexTileProps) {
  const coord = LAND_COORDS[index];
  const center = axialToPixel(coord);
  const { terrain, number } = hex;
  const terrainClass = `fill-${terrain.toLowerCase()}`;
  const isRed = number === 6 || number === 8;
  const numberFill = isRed ? 'var(--red-number, #c0392b)' : 'var(--text-dark, #16222e)';
  const dotCount = number !== null ? (probabilityDots[number] ?? 0) : 0;

  // Build dot x positions centered around cx
  const dotSpacing = 4.2;
  const dotOffsets: number[] = [];
  if (dotCount > 0) {
    const totalWidth = (dotCount - 1) * dotSpacing;
    for (let d = 0; d < dotCount; d++) {
      dotOffsets.push(-totalWidth / 2 + d * dotSpacing);
    }
  }

  return (
    <g
      className="hex-tile"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* Terrain polygon */}
      <polygon
        points={polygonPoints(center, 0.965)}
        className={terrainClass}
        stroke="rgba(10,20,30,0.45)"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      {number !== null ? (
        <>
          {/* Terrain icon offset up */}
          <image
            href={terrainIcons[terrain]}
            x={center.x - 22}
            y={center.y - 34}
            width={44}
            height={44}
          />
          {/* Number token circle */}
          <circle
            cx={center.x}
            cy={center.y + 21}
            r={16.5}
            fill="var(--token-face, #f7f1df)"
            stroke="rgba(10,20,30,0.35)"
            strokeWidth={1}
          />
          {/* Number text */}
          <text
            x={center.x}
            y={center.y + 19}
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="'Cinzel', serif"
            fontSize={15}
            fontWeight={700}
            fill={numberFill}
          >
            {number}
          </text>
          {/* Probability dots */}
          {dotOffsets.map((dx, di) => (
            <circle
              key={di}
              cx={center.x + dx}
              cy={center.y + 28.5}
              r={1.4}
              fill={numberFill}
            />
          ))}
        </>
      ) : (
        /* Desert — icon centered, larger, no token */
        <image
          href={terrainIcons[terrain]}
          x={center.x - 24}
          y={center.y - 24}
          width={48}
          height={48}
        />
      )}
    </g>
  );
}

// ── Main Board component ───────────────────────────────────────────────────────

export default function Board({ layout }: BoardProps) {
  return (
    <svg
      className="board-svg"
      viewBox={VIEW_BOX}
      role="img"
      aria-label="Catan board layout with harbors"
    >
      <title>Catan Board Layout</title>

      {/* 1. Sea ring */}
      {SEA_COORDS.map((coord, i) => {
        const center = axialToPixel(coord);
        return (
          <polygon
            key={i}
            points={polygonPoints(center, 0.99)}
            className="sea-hex"
            fill="var(--sea-tile, #1b5378)"
            stroke="rgba(58,45,28,0.25)"
            strokeWidth={1.5}
          />
        );
      })}

      {/* 2. Harbors */}
      {HARBORS.map((harbor, i) => (
        <HarborMark key={i} harbor={harbor} />
      ))}

      {/* 3. Land tiles */}
      {LAND_COORDS.map((_, i) => (
        <HexTile key={i} hex={layout[i]} index={i} />
      ))}
    </svg>
  );
}
