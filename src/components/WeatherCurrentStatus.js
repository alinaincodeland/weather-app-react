import "../App.css";

export function WeatherCurrentStatus(props) {
  return (
    <div className="current-weather-status weather-info">
      <img
        className="current-conditions-image"
        src={`http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`}
        alt={props.weatherType}
      />
      <p>{props.weatherType}</p>
    </div>
  );
}
