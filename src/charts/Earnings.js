
import React from 'react';
//import faker from 'faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'];
  
  export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        //data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        // data: [142, 677, 992, 431, 195, 876, 351],
        data: Array.from({length: 7}, () => Math.floor(Math.random() * 1000)),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

function Earnings() {
  return (
<Line options={options} data={data} />
  )
}

export default Earnings
