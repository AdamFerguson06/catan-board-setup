import './chrome.css';

interface ControlsProps {
  onRandom: () => void;
  onBack: () => void;
  canGoBack: boolean;
  layoutNumber: number;
  layoutCount: number;
}

export default function Controls({
  onRandom,
  onBack,
  canGoBack,
  layoutNumber,
  layoutCount,
}: ControlsProps) {
  return (
    <div className="controls">
      {/* Primary: Random Board */}
      <button type="button" className="btn btn--primary" onClick={onRandom}>
        {/* Five-pip die icon */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="1" y="1" width="16" height="16" rx="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          {/* pip top-left */}
          <circle cx="5.5" cy="5.5" r="1.25" fill="currentColor" />
          {/* pip top-right */}
          <circle cx="12.5" cy="5.5" r="1.25" fill="currentColor" />
          {/* pip center */}
          <circle cx="9" cy="9" r="1.25" fill="currentColor" />
          {/* pip bottom-left */}
          <circle cx="5.5" cy="12.5" r="1.25" fill="currentColor" />
          {/* pip bottom-right */}
          <circle cx="12.5" cy="12.5" r="1.25" fill="currentColor" />
        </svg>
        Random Board
      </button>

      {/* Secondary: Go Back */}
      <button
        type="button"
        className="btn btn--secondary"
        onClick={onBack}
        disabled={!canGoBack}
      >
        {/* Left-arrow icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M10 3L5 8L10 13"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Go Back
      </button>

      {/* Layout counter chip — single span so the flex chip doesn't
          split the text into items and swallow the spaces */}
      <div className="layout-chip">
        <span>
          Layout <strong>#{layoutNumber}</strong> of {layoutCount}
        </span>
      </div>
    </div>
  );
}
