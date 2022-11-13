import React, { useState } from "react";
import debounce from "lodash.debounce";
import dayjs from "dayjs";

const GEO_API_OPTIONS = {
  method: "GET",
  url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
  headers: {
    "X-RapidAPI-Key": "bcebe823c6msh63f40eb68cc101fp11807djsn92379492b515",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const useFetch = (dataMapperFn = (x) => x, fetchOptions) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [data, setData] = React.useState();

  const fetchFunction = async (url) => {
    setData(undefined);
    setIsLoading(true);
    try {
      const response = await fetch(url, fetchOptions);
      const json = await response.json();
      setData(dataMapperFn(json));
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const invalidateData = () => setData(undefined);

  return [fetchFunction, { data, isLoading, error }, invalidateData];
};

function App() {
  const [selectedCity, setSelectedCity] = React.useState();
  const [cityName, setCityName] = React.useState("");
  const [
    fetchCitiesData,
    { isLoading: isCitiesDataLoading, data: citiesData },
    resetCitiesData,
  ] = useFetch(
    (json) => json.data.filter((d) => d.type === "CITY"),
    GEO_API_OPTIONS
  );
  const [
    fetchWeatherData,
    { isLoading: isWeatherDataLoading, data: weatherData },
  ] = useFetch();

  const fetchCitiesDataDebounced = debounce(fetchCitiesData, 500);

  React.useEffect(() => {
    if (cityName && !selectedCity) {
      fetchCitiesDataDebounced(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&namePrefix=${cityName}`
      );
    }
    return () => fetchCitiesDataDebounced.cancel();
  }, [cityName]);

  React.useEffect(() => {
    if (selectedCity) {
      setCityName(selectedCity.name);
      fetchWeatherData(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${selectedCity.latitude}&lon=${selectedCity.longitude}&units=metric&appid=fe6de60708ab64e081bda8e97ece617d`
      );
    }
  }, [selectedCity]);

  const handleCityName = (e) => {
    setSelectedCity(undefined);
    resetCitiesData();
    setCityName(e.target.value);
  };

  const weatherDataGroupedByDate =
    weatherData?.list.reduce((grouped, current) => {
      const [key] = current.dt_txt.split(" ");
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(current);
      return grouped;
    }, {}) ?? {};

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={cityName}
          onChange={(e) => handleCityName(e)}
        />
        {isCitiesDataLoading && <span>Cities data loading...</span>}
        {!isCitiesDataLoading && !selectedCity && cityName && (
          <ul>
            {citiesData?.map((city) => (
              <li key={city.id} onClick={() => setSelectedCity(city)}>
                {city.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      {isWeatherDataLoading && <span>Weather data loading...</span>}
      {!isWeatherDataLoading && selectedCity && weatherData && (
        <main>
          <h1>{selectedCity.name}</h1>
          <span>
            Sunrise: {dayjs.unix(weatherData.city.sunrise).format("HH:mm")}
          </span>
          <br />
          <span>
            Sunset: {dayjs.unix(weatherData.city.sunset).format("HH:mm")}
          </span>
          <div>
            <h3>Today weather: </h3>
            <h2>
              {
                Object.entries(weatherDataGroupedByDate)[0][1][0].weather[0]
                  .main
              }
            </h2>
            <ul>
              {Object.entries(weatherDataGroupedByDate)[0][1].map((d) => (
                <li key={d.dt_txt}>
                  {d.dt_txt} : {d.main.temp}℃
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>5 days forecast:</h3>
            <div style={{ display: "flex" }}>
              {Object.entries(weatherDataGroupedByDate)
                .slice(1)
                .map((d) => (
                  <div key={d[0]}>
                    <h4>
                      {dayjs(d[0]).format("dddd")} - {d[0]}
                    </h4>
                    <ul>
                      {d[1].map((dt) => (
                        <li key={dt.dt_txt}>
                          {dayjs(dt.dt_txt).format("HH:mm")} : {dt.main.temp}℃ -
                          feels like {dt.main.feels_like}℃
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
