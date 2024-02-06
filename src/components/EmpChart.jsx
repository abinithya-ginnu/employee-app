import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
    xAxis: [
      {
        label: 'City',
      },
    ]
  };
  const dataset = [
    {
      count: 99,
      city: 'Gwenborough',
    },
    {
      count: 144,
      city: 'Wisokyburgh',
    },
    {
      count: 249,
      city: 'McKenziehaven',
    },
    {
      count: 25,
      city: 'Roscoeview',
    }
  ];
const valueFormatter = (value) => `${value}`;

const EmpChart = (props) => {
  return (
    <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'city' }]}
        series={[{ dataKey: 'count', label: 'Employee Count in cities', valueFormatter }]}
        width={500}
        height={400}
    />
  )
}

export default EmpChart
