import React from "react";
import { CardDeck } from "../components/card-deck";
import { GameStatus } from "../components/game-status";
import "./main.css";
import { AudioPlayer } from "../components/audio-player/audio-player";
import { Layout } from "./common";


export const Main = () => {
  return <Layout><div className="main">
    <h1>Card game</h1>
    <div className="main-container">
      <div className="">
        <div className=""><GameStatus /></div>
        <div className=""><CardDeck /></div>
      </div>
    </div>
    <AudioPlayer/>
  </div>
  </Layout>;
};
