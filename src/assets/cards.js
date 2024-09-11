export const CARDS = [
  {
    title: "Loot gold",
    description: "You have robbed gold, but lost some life in the process.",
    effects: [
      { type: "change-life", value: -15 },
      { type: "change-gold", value: 35 },
    ],
  },
  {
    title: "Fall in the pit",
    description: "You have fallen into the pit",
    effects: [{ type: "state", value: "lost" }],
  },
  { title: "Drink poison", description: "The wine was poisoned", effects: [{ type: "add-effect", value: "poisoned" }] },
  { title: "Cure poison", description: "Drink elixir to cure poison", effects: [{ type: "remove-effect", value: "poisoned" }] },
  { title: "Rescue princess", description: "You have rescued the princess", effects: [{ type: "state", value: "win" }] },
  { title: "Found a sword", description: "You have found a sword", effects: [{ type: "add-item", value: "sword" }] },
];
