import dayjs from "dayjs";
import "../App.css";

export function BasicWeatherInfo(props) {
  return (
    <div className="basic-weather-info weather-info">
      <h2 className="city-name-header">{props.cityName}</h2>
      <p>{dayjs().format("MMM D")}</p>
      <p>{props.currentTemperature.toFixed()}℃</p>
    </div>
  );
}
