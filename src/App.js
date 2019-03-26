import React, { useState } from "react";

const App = () => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [countryInput, setCountryInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
            onChange={event => setCountryInput(event.target.value)}
          />
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
