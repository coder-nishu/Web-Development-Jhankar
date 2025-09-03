import React from "react";
import { useState } from "react";
import "./country.css";
const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  const { name, flags, maps, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  const passWithParameter = () => {
    handleVisitedCountry(country);
    handleVisitedFlag(flags);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>
        <a href={maps.googleMaps} target="blank">
          Map: {maps.googleMaps}
        </a>
      </p>
      <p>code: {cca3}</p>
      <button onClick={handleVisited}>
        {visited ? "visited" : "not visited"}
      </button>
      <br />
      <button onClick={passWithParameter}>Mark as Visited</button>
    </div>
  );
};

export default Country;
