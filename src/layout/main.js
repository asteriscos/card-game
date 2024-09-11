import React from "react";
import { CardDeck } from "../components/card-deck";
import { GameStatus } from "../components/game-status";
import "./main.css";

export const Main = () => {
  return <div className="main">
    <h1>Card game</h1>
    <div className="main-container">
      <div className="d-flex-group">
        <div className="d-flex-item"><GameStatus /></div>
        <div className="d-flex-item"><CardDeck /></div>
      </div>
    </div>
  </div>;
};
