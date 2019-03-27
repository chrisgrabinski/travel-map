import React, { useState, useEffect } from "react";
import { css } from "emotion";
import { Chart } from "react-google-charts";

const App = () => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [countryInput, setCountryInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [countriesList, setCountriesList] = useState([]);
  const [region, setRegion] = useState("world");

  useEffect(() => {
    fetch(
      "https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;flag;region;subregion"
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setCountriesList(myJson);
      });
  }, []);

  function toRegionId(regionName) {
    if (regionName === "Africa") {
      return "002";
    } else if (regionName === "Northern Africa") {
      return "015";
    } else if (regionName === "Western Africa") {
      return "011";
    } else if (regionName === "Middle Africa") {
      return "017";
    } else if (regionName === "Eastern Africa") {
      return "014";
    } else if (regionName === "Southern Africa") {
      return "018";
    } else if (regionName === "Europe") {
      return "150";
    } else if (regionName === "Northern Europe") {
      return "154";
    } else if (regionName === "Western Europe") {
      return "155";
    } else if (regionName === "Eastern Europe") {
      return "151";
    } else if (regionName === "Southern Europe") {
      return "039";
    } else if (regionName === "Americas") {
      return "019";
    } else if (regionName === "Northern America") {
      return "021";
    } else if (regionName === "Caribbean") {
      return "029";
    } else if (regionName === "Central America") {
      return "013";
    } else if (regionName === "South America") {
      return "005";
    } else if (regionName === "Asia") {
      return "142";
    } else if (regionName === "Central Asia") {
      return "143";
    } else if (regionName === "Eastern Asia") {
      return "030";
    } else if (regionName === "Southern Asia") {
      return "034";
    } else if (regionName === "South-Eastern Asia") {
      return "035";
    } else if (regionName === "Western Asia") {
      return "145";
    } else if (regionName === "Oceania") {
      return "009";
    } else if (regionName === "Australia and New Zealand") {
      return "053";
    } else if (regionName === "Melanesia") {
      return "054";
    } else if (regionName === "Micronesia") {
      return "057";
    } else if (regionName === "Polynesia") {
      return "061";
    }

    return false;
  }

  function testForCountryDuplicate(countryName) {
    if (visitedCountries.find(country => country.name === countryName)) {
      return true;
    }

    return false;
  }

  function getCountryData(countryName) {
    return countriesList.find(country => country.name === countryName);
  }

  function addCountry(event) {
    event.preventDefault();

    if (testForCountryDuplicate(countryInput)) {
      setErrorMessage(`You've already added ${countryInput} to the list!`);
    } else {
      const countryData = getCountryData(countryInput);
      setErrorMessage(null);
      setVisitedCountries([...visitedCountries, countryData]);
      setRegion(toRegionId(countryData.subregion));
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
      <div
        className={css`
          left: 32px;
          position: fixed;
          top: 32px;
          z-index: 1;
        `}
      >
        <form
          action=""
          onSubmit={addCountry}
          className={css`
            display: flex;
          `}
        >
          <input
            type="text"
            value={countryInput}
            list="countries"
            onChange={event => setCountryInput(event.target.value)}
            className={css`
              background-color: white;
              border-radius: 5px;
              border: 0;
              box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.25);
              flex-shrink: 0;
              font-size: 16px;
              height: 56px;
              margin-right: 16px;
              max-width: 320px;
              padding: 0 16px;
              width: 100%;
            `}
          />
          <datalist id="countries">
            {countriesList.map(country => (
              <option
                key={`datalist-country-${country.alpha2Code}`}
                value={country.name}
              />
            ))}
          </datalist>
          <button
            type="submit"
            className={css`
              background-color: #0054ff;
              border-radius: 5px;
              border: 0;
              box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.25);
              color: white;
              flex-shrink: 0;
              font-size: 16px;
              font-weight: bold;
              height: 56px;
              padding: 0 28px;
            `}
          >
            Add country
          </button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
        <select
          name="region"
          id="region"
          value={region}
          onChange={event => setRegion(event.target.value)}
          onBlur={event => setRegion(event.target.value)}
          className={css`
            appearance: none;
            background-color: white;
            border-radius: 5px;
            border: 0;
            box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.25);
            flex-shrink: 0;
            font-size: 16px;
            height: 56px;
            max-width: 192px;
            padding: 0 16px;
            position: fixed;
            right: 32px;
            top: 32px;
            width: 100%;
          `}
        >
          <option value="world">World</option>
          <option value="002">Africa</option>
          <option value="150">Europe</option>
          <option value="019">Americas</option>
          <option value="142">Asia</option>
          <option value="009">Oceania</option>
        </select>
      </div>
      <div>
        <Chart
          chartType="GeoChart"
          data={[
            ["Country"],
            ...visitedCountries.map((country, index) => {
              let newCountry = [];
              newCountry.push(country.alpha2Code);

              return newCountry;
            })
          ]}
          width="100%"
          height="720"
          legendToggle
          options={{
            backgroundColor: "#81d4fa",
            datalessRegionColor: "white",
            defaultColor: "#095aff",
            region: region
          }}
        />
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
