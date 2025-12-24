import { useState, useCallback } from 'react';
import { layouts, boardStructure, terrainIcons, probabilityDots, HexData } from './layouts';
import './App.css';

interface HexProps {
  data: HexData;
  delay: number;
}

function Hex({ data, delay }: HexProps) {
  const isRedNumber = data.number === 6 || data.number === 8;
  const dots = data.number !== null ? probabilityDots[data.number] || 0 : 0;

  return (
    <div 
      className={`hex terrain-${data.terrain.toLowerCase()} animate`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="hex-border"></div>
      <div className="hex-inner">
        <img className="resource-icon" src={terrainIcons[data.terrain]} alt={data.terrain} />
        {data.number !== null && (
          <div className={`number-token ${isRedNumber ? 'red-number' : ''}`}>
            {data.number}
            <div className="probability-dots">
              {Array(dots).fill(null).map((_, i) => (
                <span key={i}></span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [currentLayout, setCurrentLayout] = useState(() => 
    Math.floor(Math.random() * layouts.length)
  );
  const [layoutHistory, setLayoutHistory] = useState<number[]>([]);
  const [animationKey, setAnimationKey] = useState(0);

  const showRandomLayout = useCallback(() => {
    setLayoutHistory(prev => [...prev, currentLayout]);
    
    let newLayout: number;
    do {
      newLayout = Math.floor(Math.random() * layouts.length);
    } while (newLayout === currentLayout && layouts.length > 1);
    
    setCurrentLayout(newLayout);
    setAnimationKey(prev => prev + 1);
  }, [currentLayout]);

  const goBack = useCallback(() => {
    if (layoutHistory.length > 0) {
      const newHistory = [...layoutHistory];
      const previousLayout = newHistory.pop()!;
      setLayoutHistory(newHistory);
      setCurrentLayout(previousLayout);
      setAnimationKey(prev => prev + 1);
    }
  }, [layoutHistory]);

  const layout = layouts[currentLayout];
  let hexIndex = 0;

  return (
    <>
      <header>
        <img src="/Robber-Pirate-Catan-logo 1.png" alt="Catan Board Logo" className="logo" />
        <h1>Catan Board</h1>
      </header>

      <div className="controls">
        <button className="btn btn-primary" onClick={showRandomLayout}>
          🎲 Random Board
        </button>
        <button 
          className="btn btn-secondary" 
          onClick={goBack}
          disabled={layoutHistory.length === 0}
        >
          ← Go Back
        </button>
        <div className="layout-info">
          Layout #<span>{currentLayout + 1}</span> of {layouts.length}
        </div>
      </div>

      <div className="board-container">
        <div className="board" key={animationKey}>
          {boardStructure.map((row, rowIndex) => {
            const startIndex = hexIndex;
            hexIndex += row.length;
            return (
              <div key={rowIndex} className="hex-row">
                {row.map((_, colIndex) => {
                  const dataIndex = startIndex + colIndex;
                  return (
                    <Hex 
                      key={dataIndex}
                      data={layout[dataIndex]} 
                      delay={dataIndex * 40}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="legend">
        <div className="legend-item">
          <img className="legend-icon" src={terrainIcons.Wood} alt="Wood" />
          <span>Wood</span>
        </div>
        <div className="legend-item">
          <img className="legend-icon" src={terrainIcons.Wheat} alt="Wheat" />
          <span>Wheat</span>
        </div>
        <div className="legend-item">
          <img className="legend-icon" src={terrainIcons.Sheep} alt="Sheep" />
          <span>Sheep</span>
        </div>
        <div className="legend-item">
          <img className="legend-icon" src={terrainIcons.Brick} alt="Brick" />
          <span>Brick</span>
        </div>
        <div className="legend-item">
          <img className="legend-icon" src={terrainIcons.Ore} alt="Ore" />
          <span>Ore</span>
        </div>
        <div className="legend-item">
          <img className="legend-icon" src={terrainIcons.Desert} alt="Desert" />
          <span>Desert</span>
        </div>
      </div>

      <footer>
        <p>All layouts are rules-compliant: no adjacent 6s and 8s</p>
      </footer>
    </>
  );
}

export default App;

