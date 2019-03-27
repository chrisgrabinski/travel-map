import React, { useState, useEffect } from "react";

const App = () => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [countryInput, setCountryInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all?fields=name;alpha2Code")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setCountriesList(myJson);
      });
  }, []);

  function addCountry(event) {
    event.preventDefault();

    if (visitedCountries.includes(countryInput)) {
      setErrorMessage(`You've already added ${countryInput} to the list!`);
    } else {
      setErrorMessage(null);
      setVisitedCountries([...visitedCountries, countryInput]);
    }

    setCountryInput("");
  }

  function removeCountry(country) {
    const newVisitedCountries = visitedCountries.filter(value => {
      return value !== country;
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
          {visitedCountries.map(visitedCountry => (
            <li key={visitedCountry}>
              {visitedCountry}{" "}
              <button onClick={() => removeCountry(visitedCountry)}>
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
