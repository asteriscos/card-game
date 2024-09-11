import React, { useEffect, useContext } from "react";
import { Card } from "./card";
import { UsedCards } from "./used-cards";
import { useCardDeck } from "../hooks/use-card-deck";
import { GameContext } from "../context/game-context";

export const CardDeck = ({}) => {
  const { currentCard, usedCards, drawCard, resetDeck } = useCardDeck();
  const gameContext = useContext(GameContext);
  useEffect(() => {
    if (currentCard) {
      gameContext.triggerEffects(currentCard);
    }
  }, [currentCard]);

  return (
    <div>
      <Card {...currentCard} />
      <button onClick={() => drawCard()}>Draw card</button>
      <button onClick={() => resetDeck()}>Reset deck</button>
      <UsedCards usedCards={usedCards} />
    </div>
  );
};
