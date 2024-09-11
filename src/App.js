import logo from "./logo.svg";
import "./App.css";
import React, {useState} from "react";
import { Main } from "./layout/main";
import { GameContext } from './context/game-context';
import { useGameStatus } from './hooks/use-game-status';

function App() {
  const gameStatus = useGameStatus();
  return (
    <GameContext.Provider value={gameStatus}>
    <div className="App">
      <Main />
    </div>
    </GameContext.Provider>
  );
}

export default App;
