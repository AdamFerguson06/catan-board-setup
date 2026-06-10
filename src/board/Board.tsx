import { useRef, useState } from 'react';
import type { BoardLayout } from '../layouts';
import { terrainIcons, probabilityDots } from '../layouts';
import {
  axialToPixel,
  polygonPoints,
  framePoints,
  LAND_COORDS,
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

const [BASE_X, BASE_Y, BASE_W, BASE_H] = VIEW_BOX.split(' ').map(Number);
const MAX_ZOOM = 4;
const DOUBLE_TAP_ZOOM = 2.2;
const TAP_MOVE_TOLERANCE = 12; // client px of drift before a touch stops counting as a tap
const DOUBLE_TAP_WINDOW_MS = 320;
const DOUBLE_TAP_RADIUS = 40;

interface ViewRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export default function Board({ layout }: BoardProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const view = useRef<ViewRect>({ x: BASE_X, y: BASE_Y, w: BASE_W, h: BASE_H });
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const gesture = useRef<{
    lastSingle: { x: number; y: number } | null;
    lastPinch: { dist: number; mid: { x: number; y: number } } | null;
    downPos: { x: number; y: number } | null;
    moved: boolean;
    lastTap: { t: number; x: number; y: number } | null;
  }>({ lastSingle: null, lastPinch: null, downPos: null, moved: false, lastTap: null });
  // Only flips when crossing the 1x boundary — gesture frames update the DOM directly
  const [zoomed, setZoomed] = useState(false);

  const clampView = (x: number, y: number, w: number, h: number): ViewRect => {
    const cw = Math.min(Math.max(w, BASE_W / MAX_ZOOM), BASE_W);
    const ch = Math.min(Math.max(h, BASE_H / MAX_ZOOM), BASE_H);
    return {
      x: Math.min(Math.max(x, BASE_X), BASE_X + BASE_W - cw),
      y: Math.min(Math.max(y, BASE_Y), BASE_Y + BASE_H - ch),
      w: cw,
      h: ch,
    };
  };

  const applyView = (next: ViewRect) => {
    view.current = next;
    svgRef.current?.setAttribute('viewBox', `${next.x} ${next.y} ${next.w} ${next.h}`);
    setZoomed(next.w < BASE_W - 0.5);
  };

  const resetView = () => applyView({ x: BASE_X, y: BASE_Y, w: BASE_W, h: BASE_H });

  // Map a client point to [0..1] fractions of the rendered svg box
  const clientFrac = (cx: number, cy: number) => {
    const r = svgRef.current!.getBoundingClientRect();
    return { fx: (cx - r.left) / r.width, fy: (cy - r.top) / r.height };
  };

  const zoomAbout = (z: number, anchorClient: { x: number; y: number }) => {
    const zc = Math.min(Math.max(z, 1), MAX_ZOOM);
    const v = view.current;
    const { fx, fy } = clientFrac(anchorClient.x, anchorClient.y);
    const ax = v.x + fx * v.w;
    const ay = v.y + fy * v.h;
    const w = BASE_W / zc;
    const h = BASE_H / zc;
    applyView(clampView(ax - fx * w, ay - fy * h, w, h));
  };

  const pinchOf = (pts: { x: number; y: number }[]) => ({
    dist: Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y),
    mid: { x: (pts[0].x + pts[1].x) / 2, y: (pts[0].y + pts[1].y) / 2 },
  });

  const onPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    e.preventDefault();
    try {
      svgRef.current?.setPointerCapture(e.pointerId);
    } catch {
      /* synthetic events have no active pointer to capture */
    }
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const g = gesture.current;
    g.moved = false;
    g.downPos = { x: e.clientX, y: e.clientY };
    if (pointers.current.size === 1) {
      g.lastSingle = { x: e.clientX, y: e.clientY };
      g.lastPinch = null;
    } else if (pointers.current.size === 2) {
      g.lastPinch = pinchOf([...pointers.current.values()]);
      g.lastSingle = null;
    }
  };

  const onPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const g = gesture.current;

    if (g.downPos && Math.hypot(e.clientX - g.downPos.x, e.clientY - g.downPos.y) > TAP_MOVE_TOLERANCE) {
      g.moved = true;
    }

    if (pointers.current.size === 2 && g.lastPinch) {
      // Pinch: scale by distance ratio, keep the previous midpoint's board
      // point anchored under the current midpoint (handles pan + zoom at once)
      const cur = pinchOf([...pointers.current.values()]);
      const v = view.current;
      const z = Math.min(Math.max((BASE_W / v.w) * (cur.dist / g.lastPinch.dist), 1), MAX_ZOOM);
      const prevFrac = clientFrac(g.lastPinch.mid.x, g.lastPinch.mid.y);
      const ax = v.x + prevFrac.fx * v.w;
      const ay = v.y + prevFrac.fy * v.h;
      const curFrac = clientFrac(cur.mid.x, cur.mid.y);
      const w = BASE_W / z;
      const h = BASE_H / z;
      applyView(clampView(ax - curFrac.fx * w, ay - curFrac.fy * h, w, h));
      g.lastPinch = cur;
    } else if (pointers.current.size === 1 && g.lastSingle && view.current.w < BASE_W - 0.5) {
      // One-finger pan while zoomed in
      const r = svgRef.current!.getBoundingClientRect();
      const v = view.current;
      const dx = ((e.clientX - g.lastSingle.x) / r.width) * v.w;
      const dy = ((e.clientY - g.lastSingle.y) / r.height) * v.h;
      applyView(clampView(v.x - dx, v.y - dy, v.w, v.h));
      g.lastSingle = { x: e.clientX, y: e.clientY };
    } else if (pointers.current.size === 1) {
      g.lastSingle = { x: e.clientX, y: e.clientY };
    }
  };

  const onPointerEnd = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.delete(e.pointerId);
    const g = gesture.current;

    if (pointers.current.size === 1) {
      const [rest] = pointers.current.values();
      g.lastSingle = { x: rest.x, y: rest.y };
      g.lastPinch = null;
    } else if (pointers.current.size === 0) {
      g.lastSingle = null;
      g.lastPinch = null;
      if (e.type === 'pointerup' && !g.moved) {
        // Double-tap (touch) / double-click (mouse): zoom in at point, or reset
        const prev = g.lastTap;
        if (
          prev &&
          e.timeStamp - prev.t < DOUBLE_TAP_WINDOW_MS &&
          Math.hypot(e.clientX - prev.x, e.clientY - prev.y) < DOUBLE_TAP_RADIUS
        ) {
          if (view.current.w < BASE_W - 0.5) {
            resetView();
          } else {
            zoomAbout(DOUBLE_TAP_ZOOM, { x: e.clientX, y: e.clientY });
          }
          g.lastTap = null;
        } else {
          g.lastTap = { t: e.timeStamp, x: e.clientX, y: e.clientY };
        }
      }
    }
  };

  const v = view.current;
  return (
    <div className="board-frame">
      <svg
        ref={svgRef}
        className={`board-svg${zoomed ? ' is-zoomed' : ''}`}
        viewBox={`${v.x} ${v.y} ${v.w} ${v.h}`}
        role="img"
        aria-label="Catan board layout with harbors"
        /* pan-x pan-y at rest: page scroll stays native, but two-finger pinch
           over the board reaches us instead of zooming the whole page */
        style={{ touchAction: zoomed ? 'none' : 'pan-x pan-y' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
      >
        <title>Catan Board Layout</title>

      {/* 1. Sea — one smooth hexagonal plate, like the physical frame:
          no scalloped hex edges on the outside, just a single coastline. */}
      <defs>
        <radialGradient
          id="sea-depth"
          gradientUnits="userSpaceOnUse"
          cx="0"
          cy="0"
          r="318"
        >
          {/* Water is only visible from ~radius 195 (land edge) outward, so
              the shallow stop sits at 63% to land exactly on the waterline */}
          <stop offset="0%" style={{ stopColor: 'var(--sea-shallow, #7cb3d2)' }} />
          <stop offset="63%" style={{ stopColor: 'var(--sea-shallow, #7cb3d2)' }} />
          <stop offset="84%" style={{ stopColor: 'var(--sea-mid, #6fa9c9)' }} />
          <stop offset="100%" style={{ stopColor: 'var(--sea-deep, #5b8fb0)' }} />
        </radialGradient>
      </defs>
      <polygon className="sea-plate" points={framePoints()} fill="url(#sea-depth)" />

      {/* 2. Sand base under the land mass — keeps the seams between terrain
          tiles parchment (not water) and draws one ink coastline around the
          whole island. Pass A (coast) is an ink silhouette whose stroke
          survives only beyond the land edge; pass B (sand) paints slightly
          oversized fills on top so no antialiasing cracks remain. */}
      <g className="land-coast" aria-hidden="true">
        {LAND_COORDS.map((coord, i) => (
          <polygon key={i} points={polygonPoints(axialToPixel(coord))} />
        ))}
      </g>
      <g className="land-base" aria-hidden="true">
        {LAND_COORDS.map((coord, i) => (
          <polygon key={i} points={polygonPoints(axialToPixel(coord), 1.01)} />
        ))}
      </g>

      {/* 3. Harbors */}
      {HARBORS.map((harbor, i) => (
        <HarborMark key={i} harbor={harbor} />
      ))}

      {/* 4. Land tiles */}
      {LAND_COORDS.map((_, i) => (
        <HexTile key={i} hex={layout[i]} index={i} />
      ))}
      </svg>
      {zoomed && (
        <button type="button" className="board-reset" onClick={resetView}>
          Reset view
        </button>
      )}
    </div>
  );
}
