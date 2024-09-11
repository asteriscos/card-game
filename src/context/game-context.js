import { createContext } from "react";

export const GameContext = createContext({
  status: {
    life: 100,
    gold: 0,
    effects: [],
    items: [],
    state: "playing",
  },
  removeEffect: () => {},
  addEffect: () => {},
  changeState: () => {},
  changeGold: () => {},
  changeLife: () => {},
  removeItem: () => {},
  addItem: () => {},
  triggerEffects: () => {},
});
