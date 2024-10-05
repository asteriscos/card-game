import React from "react";
import "./card.css";

export const Card = ({ title = "", description = "", effects = [] }) => {
  return (
    <div className="card-wrapper">
      {
        !title ?
          <img src="./card-back.jpg" /> : <><h3 className="title">{title}</h3>
            <p className="description">{description}</p></>

      }
    </div >
  );
};
