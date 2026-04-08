import React from "react";
import "./Country.css";
const Country = ({ country }) => {
  console.log(country);
  const handleVistied = () => {
    alert("btn clicked");
  };
  return (
    <div className="country">
      <h3>Name: {country.name.common}</h3>
      <h4>Official Name: {country.name.official}</h4>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h4>Capital: {country.capital.capital}</h4>
      <h4>Population: {country.population.population}</h4>
      <h5>
        Area: {country.area.area}{" "}
        {country.area.area > 200000 ? "Big Country" : "Small Country"}
      </h5>
      <button onClick={handleVistied}>Not Visited</button>
    </div>
  );
};

export default Country;
