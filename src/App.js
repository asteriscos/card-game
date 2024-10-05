import "./App.css";
import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Main, Home, Rules, Who } from "./layout";
import { GameContext } from './context/game-context';
import { useGameStatus } from './hooks/use-game-status';

function App() {
  const gameStatus = useGameStatus();
  return (
    <GameContext.Provider value={gameStatus}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="game" element={<Main />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/who" element={<Who />} />
          </Routes>
        </Router>
      </div>
    </GameContext.Provider>
  );
}

export default App;
