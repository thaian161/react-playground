import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  // transform dataPoint object to array of number
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // find the max number in the ...dataPointValues array
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
