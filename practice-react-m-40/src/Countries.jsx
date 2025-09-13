import React, { useEffect, useState } from 'react';
import Country from './Country';
export default function Countries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population'
                );
                const json = await response.json();
                setCountries(json);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Total Country: {countries.length}</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {countries.map((country) => (
                    <Country key={country.cca3} country={country} />
                ))}
            </div>
        </div>
    );
}
