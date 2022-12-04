import React from "react";
const PlayerScore = (props ,key) => {
  return (
    <div className="card-item" key={key}>
      <div className="card-item-name">{props.name}</div>
      <div className="card-item-score">{props.score}</div>
    </div>
  );
};
export default PlayerScore;