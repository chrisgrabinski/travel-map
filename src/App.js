import React, { useState } from "react";

const App = () => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [countryInput, setCountryInput] = useState("");

  function addCountry(event) {
    event.preventDefault();
    setVisitedCountries([...visitedCountries, countryInput]);
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
