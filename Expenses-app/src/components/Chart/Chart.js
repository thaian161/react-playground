import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {



  return (
    <div className="chart">
     {props.dataPoints.map( (datapoint) => (
      <ChartBar 
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={null}
        label={dataPoint.label} />
        ))
      }
    </div>
  )
}

export default Chart