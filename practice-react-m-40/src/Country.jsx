import React from 'react';

function Country({ country }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      margin: "8px",
      padding: "12px",
      borderRadius: "8px",
      width: "220px",
      textAlign: "center",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <img src={country.flags.png} alt={country.name.common} width="120" />
      <h3>{country.name.common}</h3>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Populationn:</strong> {country.population.toLocaleString()}</p>
    </div>
  );
}

export default Country;
