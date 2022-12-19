import React, { useState } from "react";
import ScoreByCountry from "./ScoreByCountry";
import allCountryScores from "./scores";
import "./App.css";

function App() {
  const [ascending, setAscending] = useState(false);
  // changing order
  const ChangeOrder = () => {
    setAscending(!ascending);
  };
  return (
    <div className="container">
      <h1 className="heading">High Score By Country</h1>
      <button className="btn btn--primary" onClick={ChangeOrder}>
        {ascending ? "Descending" : "Ascending"} Order
      </button>
      {allCountryScores
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((country, index) => {
          return (
            <ScoreByCountry
              country={country.name}
              info={country.scores}
              order={ascending}
              key={index}
            />
          );
        })}
    </div>
  );
}

export default App;
