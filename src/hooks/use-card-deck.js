import React, { useEffect, useState } from "react";
import { getRandomCard } from "../services/cards-handler";
import { CARDS } from "../assets/cards";
export const useCardDeck = () => {
  const [deck, setDeck] = useState(CARDS);
  const [usedCards, setUsedCards] = useState([]);
  const [currentCard, setCurrentCard] = useState({});

  const drawCard = () => {
    const { card, index } = getRandomCard(deck);
    removefromDeck(index);
    setCurrentCard(card);
  };
  const removefromDeck = (index) => {
    const newUsedCards = [...usedCards, deck[index]];
    const newDeck = deck.filter(function (card, i) {
      return index !== i;
    });
    setDeck(newDeck);
    setUsedCards(newUsedCards);
  };
  const resetDeck = () => {
    setCurrentCard({});
    setDeck(CARDS);
    setUsedCards([]);
  };
  return { currentCard, deck, usedCards, drawCard, resetDeck };
};
