import { motion } from "framer-motion";
import "../App.css";

export function WeatherCurrentStatus(props) {
  return (
    <motion.div
      animate={{ y: 0, scale: 1 }}
      initial={{ y: 100, scale: 0 }}
      className="current-weather-status weather-info"
    >
      <img
        className="current-conditions-image"
        src={`http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`}
        alt={props.weatherType}
      />
      <p>{props.weatherType}</p>
    </motion.div>
  );
}
