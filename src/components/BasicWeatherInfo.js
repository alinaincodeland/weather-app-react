import dayjs from "dayjs";
import { motion } from "framer-motion";
import "../App.css";

export function BasicWeatherInfo(props) {
  return (
    <motion.div
      animate={{ y: 0, scale: 1 }}
      initial={{ y: 100, scale: 0 }}
      className="basic-weather-info weather-info"
    >
      <h2 className="city-name-header">{props.cityName}</h2>
      <p>{dayjs().format("MMM D")}</p>
      <p>{props.currentTemperature.toFixed()}℃</p>
    </motion.div>
  );
}
