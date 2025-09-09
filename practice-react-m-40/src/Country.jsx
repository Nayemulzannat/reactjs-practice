import React from 'react';

function Cuntry({ country }) {
    
  return (
    <div style={{ border: "1px solid #ccc", margin: "8px", padding: "8px", borderRadius: "8px" }}>
      <h3>{country.name.common}</h3>
      <p>Region: {country.region}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <img src={country.flags.png} alt={country.name.common} width="120" />
    </div>
  );
}

export default Cuntry;
