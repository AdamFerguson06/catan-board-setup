import { useState, useCallback } from 'react';
import { layouts } from './layouts';
import Header from './components/Header';
import Controls from './components/Controls';
import Legend from './components/Legend';
import Board from './board/Board';
import './App.css';

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

  return (
    <div className="app-shell">
      <Header>
        <Controls
          onRandom={showRandomLayout}
          onBack={goBack}
          canGoBack={layoutHistory.length > 0}
          layoutNumber={currentLayout + 1}
          layoutCount={layouts.length}
        />
      </Header>
      <main className="board-wrap">
        <Board key={animationKey} layout={layouts[currentLayout]} />
      </main>
      <Legend />
    </div>
  );
}

export default App;

