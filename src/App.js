import React, { useState, useEffect } from "react";

const App = () => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [countryInput, setCountryInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;flag")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setCountriesList(myJson);
      });
  }, []);

  function getCountryData(countryName) {
    return countriesList.find(country => country.name === countryName);
  }

  function addCountry(event) {
    event.preventDefault();

    if (visitedCountries.includes(countryInput)) {
      setErrorMessage(`You've already added ${countryInput} to the list!`);
    } else {
      setErrorMessage(null);
      setVisitedCountries([...visitedCountries, getCountryData(countryInput)]);
    }

    setCountryInput("");
  }

  function removeCountry(countryCode) {
    const newVisitedCountries = visitedCountries.filter(visitedCountry => {
      return visitedCountry.alpha2Code !== countryCode;
    });

    setVisitedCountries(newVisitedCountries);
  }

  return (
    <div className="App">
      <div>
        <form action="" onSubmit={addCountry}>
          <input
            type="text"
            value={countryInput}
            list="countries"
            onChange={event => setCountryInput(event.target.value)}
          />
          <datalist id="countries">
            {countriesList.map(country => (
              <option
                key={`datalist-country-${country.alpha2Code}`}
                value={country.name}
              />
            ))}
          </datalist>
          <button type="submit">Add country</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      </div>
      <div>
        <ul>
          {visitedCountries.map(country => (
            <li key={country.alpha2Code}>
              <img src={country.flag} alt="" width="24" height="16" />
              {country.name}{" "}
              <button onClick={() => removeCountry(country.alpha2Code)}>
                Remove country
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
