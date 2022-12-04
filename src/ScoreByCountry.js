import React from "react";
import PlayerScore from "./PlayerScore";
const ScoreByCountry = (props, key) => {
   
  return (
    <div className="card" key={key}>
      <h2 className="card-title">High Score : {props.country}</h2>
      {props.info
       .sort(props.order ? (a, b) => a.s - b.s : (a, b) => b.s - a.s) 
      .map((player, index) => {
        return <PlayerScore key={index} name={player.n} score={player.s} />;
      })}
    
    </div>
  );
};
export default ScoreByCountry;
