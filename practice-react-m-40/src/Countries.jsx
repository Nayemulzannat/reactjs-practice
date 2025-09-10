import React, { useEffect, useState } from 'react';
import Country from './Country';
export default function Countries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const json = await response.json();
                console.log("✅ Fetched data:", json);
                setCountries(json);
            } catch (error) {
                console.error("❌ Error fetching data:", error);
            }
        };

        fetchData();


        
    }, []);

    return (
        <div>
            <h2>Fetched Countries: {countries.length}</h2>
            <ul>
                {countries.map((country) => (
                    <Country key={country.cca3} country={country} />
                ))}
            </ul>
        </div>
    );
}
