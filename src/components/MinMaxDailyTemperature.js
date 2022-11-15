import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export function MinMaxDailyTemperature(props) {
  const min = Math.min(...props.mins).toFixed();
  const max = Math.max(...props.maxs).toFixed();

  return (
    <ul className="five-days-forecast">
      <li>
        <FaArrowDown className="arrow-down-icon" /> min {min}℃
      </li>
      <li>
        <FaArrowUp className="arrow-up-icon" /> max {max}℃
      </li>
    </ul>
  );
}
