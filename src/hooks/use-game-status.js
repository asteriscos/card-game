import React, { useEffect, useState } from "react";
export const useGameStatus = () => {
  const [status, setStatus] = useState({
    life: 100,
    gold: 0,
    effects: [],
    items: [],
    state: "playing",
  });

  const removeItem = (item = "") => {
    const newItems = status.items.filter(function (it) {
      return it !== item;
    });
    setStatus((status)=>({ ...status, items: newItems }));
  };
  const addItem = (item = "") => {
    if (!status.items.includes(item)) {
      setStatus((status)=>({ ...status, items: [...status.items, item] }));
    }
  };
  const removeEffect = (effect = "") => {
    const newEffects = status.effects.filter(function (eff) {
      return eff !== effect;
    });
    setStatus((status)=>({ ...status, effects: newEffects }));
  };
  const addEffect = (effect = "") => {
    if (!status.effects.includes(effect)) {
      setStatus((status)=>({
        ...status,
        effects: [...status.effects, effect],
      }));
    }
  };
  const changeState = (state) => {
    setStatus((status)=>({ ...status, state: state }));
  };
  const changeGold = (amount = 0) => {
    const newGold = status.gold + amount;
    setStatus((status)=>({ ...status, gold: newGold }));
  };
  const changeLife = (amount = 0) => {
    const newLife = status.life + amount;
    setStatus((status)=>({ ...status, life: newLife }));
  };

  const triggerEffects = (card = {}) => {
    card?.effects?.forEach((eff) => {
      switch (eff?.type) {
        case "add-effect":
          addEffect(eff.value);
          break;
        case "remove-effect":
          removeEffect(eff.value);
          break;
        case "add-item":
          addItem(eff.value);
          break;
        case "remove-item":
          removeEffect(eff.value);
          break;
        case "change-life":
          changeLife(eff.value);
          break;
        case "change-gold":
          changeGold(eff.value);
          break;
        case "change-state":
          changeState(eff.value);
          break;
      }
    });
  };

  return {
    status,
    removeEffect,
    addEffect,
    changeState,
    changeGold,
    changeLife,
    removeItem,
    addItem,
    triggerEffects,
  };
};
