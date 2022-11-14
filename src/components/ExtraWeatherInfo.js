import dayjs from "dayjs";
import {
  WiHorizonAlt,
  WiHorizon,
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
        <WiHorizonAlt /> Sunrise: {dayjs.unix(props.sunrise).format("HH:mm")}
      </p>
      <p>
        <WiHorizon /> Sunset: {dayjs.unix(props.sunset).format("HH:mm")}
      </p>
      <p>
        <WiStrongWind /> Wind speed: {props.windSpeed}m/s
      </p>
    </div>
  );
}
