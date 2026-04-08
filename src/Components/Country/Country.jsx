import React, { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  // console.log(country);
  // console.log(handleVisitedCountries);

  const [visited, setVisited] = useState(false);
  
   const handleVistied = () => {
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    setVisited(visited ? false : true);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${visited && "country-visited"} `}>
      {/* we added dynamic classname here to toggle between country card */}
      <h3>Name: {country.name.common}</h3>
      <h4>Official Name: {country.name.official}</h4>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h4>Capital: {country.capital.capital}</h4>
      <h4>Population: {country.population.population}</h4>
      <h5>
        Area: {country.area.area}{" "}
        {country.area.area > 200000 ? "Big Country" : "Small Country"}
      </h5>
      <button onClick={handleVistied}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button
        onClick={() => {
          handleVisitedFlags(country?.flags?.flags?.png)
        }}
      >
        Add Visited Country
      </button>
    </div>
  );
};

export default Country;
