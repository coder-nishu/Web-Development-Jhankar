import { useState, useEffect } from "react";
import "./countries.css";
import Country from "../Country/Country";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  const handleVisitedCountry = (country) => {
    setVisitedCountry([...visitedCountry, country]);
  };
  const handleVisitedFlag = (flag) => {
    setVisitedFlags([...visitedFlags, flag]);
  };
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,maps,cca3 ")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="countries-div">
      <h3>Countries: {countries.length}</h3>
      {/* visited countries  */}
      <div className="visited-container">
        <div>
          <h4>Visited Country Count: {visitedCountry.length}</h4>
          <ul>
            {visitedCountry.map((country) => (
              <li>{country.name.common}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Visited countries flag:</h2>
          <ul>
            {
              visitedFlags.map(flag => <li><img src={flag.png} alt="" width="30px" height="30px"/></li>)
            }
          </ul>
        </div>

      </div>
      {/* showing all countries  */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
