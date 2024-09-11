import React, { useContext } from "react";
import { GameContext } from "../context/game-context";
import "./game-status.css";

export const GameStatus = () => {
  const { status } = useContext(GameContext);
  return (
    <div className="game-status-container">
      {/* <span className="txt-status">Status</span> */}
      <div className="stats">
        <div className="stat">
          <label>Life:</label>
          <span>{status?.life}</span>
        </div>
        <div className="stat">
          <label>Gold:</label>
          <span>{status?.gold}</span>
        </div>
      </div>
      <div className="effects-container">
        <label>Effects:</label>
        <ul>
          {status?.effects?.map((effect, key) => {
            return <li key={key}>{effect}</li>;
          })}
        </ul>
      </div>
      <div className="items-container">
        <label>Items:</label>
        <ul>
          {status?.items?.map((item, key) => {
            return <li key={key}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
