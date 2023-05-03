
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Blue', 'Green', 'Skyblue'],
  datasets: [
    {
      label: 'Revenue',
      data: [20,15,9],
      backgroundColor: [
        'rgba(78, 115, 223, 1)',
        'rgba(28,200,138,1)',
        'rgba(54, 185, 204, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',

      ],
      borderWidth: 1,
    },
  ],
};

function RevenueChart() {
  return (
    <Doughnut data={data}/>
  )
}

export default RevenueChart



