import React, { useEffect, useContext } from "react";
import { Card } from "./card";
import { UsedCards } from "./used-cards";
import { useCardDeck } from "../hooks/use-card-deck";
import { GameContext } from "../context/game-context";
import "./card-deck.css";

export const CardDeck = ({}) => {
  const { currentCard, usedCards, drawCard, resetDeck } = useCardDeck();
  const gameContext = useContext(GameContext);
  useEffect(() => {
    if (currentCard) {
      gameContext.triggerEffects(currentCard);
    }
  }, [currentCard]);

  return (
    <div className="board-container">
      <div className="card-deck-container">
        <Card {...currentCard} />
        <div className="card-deck-top" onClick={() => drawCard()}>
          <img src="./card-back.jpg" />
          <div className="card-deck-text">
            <span>Draw card</span>
          </div>
        </div>
      </div>
      <button onClick={() => resetDeck()}>Reset deck</button>
      {/* <UsedCards usedCards={usedCards} /> */}
    </div>
  );
};
