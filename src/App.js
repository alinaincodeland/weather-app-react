import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c1e88de15ba4d1b455c17e4c60a8e857`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p> {data.name}</p>
            {data.sys ? <p>{data.sys.country}</p> : null}
          </div>
          <div className="temp">
            {data.main ? <h1> {data.main.temp.toFixed()} F</h1> : null}
          </div>
          <div className="desc">
            {data.weather ? <p>{data.weather[0].main} </p> : null}
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like.toFixed()}F</p> : null}
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity} %</p> : null}
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed.toFixed()}MPH</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
