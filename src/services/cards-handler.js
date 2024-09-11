import { CARDS } from "../assets/cards";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const getRandomCard = (deck = []) => {
  const index = getRandomInt(deck.length);
  const pickedCard = deck[index];

  return { card: pickedCard, index };
};
