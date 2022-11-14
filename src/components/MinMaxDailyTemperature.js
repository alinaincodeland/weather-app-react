export function MinMaxDailyTemperature(props) {
  const min = Math.min(...props.mins);
  const max = Math.max(...props.maxs);

  return (
    <ul>
      <li>min temp: {min}℃</li>
      <li>max temp: {max}℃</li>
    </ul>
  );
}
