import React, { useState } from "react";

const options = {
  method: "GET",
  url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
  headers: {
    "X-RapidAPI-Key": "bcebe823c6msh63f40eb68cc101fp11807djsn92379492b515",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const fetchCities = (cityName) =>
  fetch(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&namePrefix=${cityName}`,
    options
  );

function App() {
  const [cityName, setCityName] = React.useState("");
  const [matchedCities, setMatchedCities] = React.useState([]);

  React.useEffect(() => {
    if (cityName) {
      console.log(cityName);
      const getCities = async () => {
        const response = await fetchCities(cityName);
        const { data } = await response.json();
        setMatchedCities(data?.filter((d) => d.type === "CITY"));
      };

      getCities();
    }
  }, [cityName]);

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          onKeyPress={() => {}}
        />
        <ul>
          {matchedCities.map((city) => (
            <li key={city.id}>{city.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
