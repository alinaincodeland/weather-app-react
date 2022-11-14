import dayjs from "dayjs";

export function ExtraWeatherInfo(props) {
  return (
    <div className="extra-weather-info weather-info">
      <p>Feels like: {props.feelsLikeTemperature.toFixed()}℃</p>
      <p>Sunrise: {dayjs.unix(props.sunrise).format("HH:mm")}</p>
      <p>Sunset: {dayjs.unix(props.sunset).format("HH:mm")}</p>
      <p>Wind speed: {props.windSpeed}m/s</p>
    </div>
  );
}
