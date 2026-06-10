import { terrainIcons } from '../layouts';
import './chrome.css';

const RESOURCES = ['Wood', 'Wheat', 'Sheep', 'Brick', 'Ore', 'Desert'] as const;

export default function Legend() {
  return (
    <footer className="legend">
      <div className="legend__bar">
        {/* ---- Resource tiles ---- */}
        {RESOURCES.map((name) => (
          <div key={name} className="legend-item">
            <img src={terrainIcons[name]} alt={name} />
            {name}
          </div>
        ))}

        {/* ---- Divider between resources and harbors ---- */}
        <div className="legend__divider" aria-hidden="true" />

        {/* ---- 3:1 Harbor ---- */}
        <div className="legend-item">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle
              cx="11"
              cy="11"
              r="10"
              fill="var(--token-face, #f7f1df)"
              stroke="#b08d57"
              strokeWidth="1.5"
            />
            <text
              x="11"
              y="15"
              textAnchor="middle"
              fontFamily="serif"
              fontWeight="bold"
              fontSize="8"
              fill="var(--text-dark, #16222e)"
            >
              3:1
            </text>
          </svg>
          3:1 Harbor
        </div>

        {/* ---- 2:1 Harbor ---- */}
        <div className="legend-item">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle
              cx="11"
              cy="11"
              r="10"
              fill="var(--token-face, #f7f1df)"
              stroke="var(--accent-deep, #d9b12e)"
              strokeWidth="1.5"
            />
            <text
              x="11"
              y="15"
              textAnchor="middle"
              fontFamily="serif"
              fontWeight="bold"
              fontSize="8"
              fill="var(--text-dark, #16222e)"
            >
              2:1
            </text>
          </svg>
          2:1 Harbor
        </div>
      </div>
    </footer>
  );
}
