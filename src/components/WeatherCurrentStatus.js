import "../App.css";

export function WeatherCurrentStatus(props) {
  return (
    <div>
      <img
        src={`http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`}
        alt={props.weatherType}
      />
      <p>{props.weatherType}</p>
    </div>
  );
}
