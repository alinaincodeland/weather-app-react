// import dayjs from "dayjs";
import {
  WiRaindrop,
  WiBarometer,
  WiThermometerExterior,
  WiStrongWind,
} from "react-icons/wi";

export function ExtraWeatherInfo(props) {
  return (
    <div className="extra-weather-info weather-info">
      <p>
        <WiThermometerExterior /> Feels like:{" "}
        {props.feelsLikeTemperature.toFixed()}℃
      </p>
      <p>
        <WiRaindrop /> Humidity: {props.humidity}%
      </p>
      <p>
        <WiBarometer /> Pressure: {props.pressure}
        <span className="weather-unit">hPa</span>
      </p>
      <p>
        <WiStrongWind /> Wind speed: {props.windSpeed}
        <span className="weather-unit">m/s</span>
      </p>
    </div>
  );
}
