// import dayjs from "dayjs";
import { motion } from "framer-motion";
import {
  WiRaindrop,
  WiBarometer,
  WiThermometerExterior,
  WiStrongWind,
} from "react-icons/wi";

export function ExtraWeatherInfo(props) {
  return (
    <motion.div
      animate={{ y: 0, scale: 1 }}
      initial={{ y: 100, scale: 0 }}
      transition={{ delay: 1 }}
      className="extra-weather-info weather-info"
    >
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
    </motion.div>
  );
}
