import React, { useContext } from "react";
import { GameContext } from "../context/game-context";

export const GameStatus = () => {
  const { status } = useContext(GameContext);
  return (
    <div>
      <h2>Status</h2>
      <p>
        <label>
          Life:<span>{status?.life}</span>
        </label>
      </p>
      <p>
        <label>
          Gold:<span>{status?.gold}</span>
        </label>
      </p>
      <div>
        <p>Effects:</p>
        <ul>
          {status?.effects?.map((effect, key) => {
            return <li key={key}>{effect}</li>;
          })}
        </ul>
      </div>
      <div>
        <p>Items:</p>
        <ul>
          {status?.items?.map((item, key) => {
            return <li key={key}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
