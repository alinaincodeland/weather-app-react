import dayjs from "dayjs";

export function ExtraWeatherInfo(props) {
  return (
    <div>
      <p>Feels like: {props.feelsLikeTemperature}℃</p>
      <p>Sunrise: {dayjs.unix(props.sunrise).format("HH:mm")}</p>
      <p>Sunset: {dayjs.unix(props.sunset).format("HH:mm")}</p>
      <p>Wind speed: {props.windSpeed}m/s</p>
    </div>
  );
}
