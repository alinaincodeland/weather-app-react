import dayjs from "dayjs";
import "../App.css";

export function BasicWeatherInfo(props) {
  return (
    <div>
      <h2>{props.cityName}</h2>
      <p>{dayjs().format("MMM D")}</p>
      <p>{props.currentTemperature}℃</p>
    </div>
  );
}
