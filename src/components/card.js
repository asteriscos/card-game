import React from "react";
import "./card.css";

export const Card = ({ title = "Draw a card", description = "", effects = [] }) => {
  return (
    <div className="card-wrapper">
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};
