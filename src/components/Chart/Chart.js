import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
  const expensesArrayValues = props.dataPoints.map(
    dataPoint => dataPoint.value,
  );
  let totalMax = Math.max(...expensesArrayValues);

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
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
