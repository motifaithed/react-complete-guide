import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  console.log("Data Points");
  console.log(props.dataPoints);
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  console.log("Total Maximum");
  console.log(totalMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
