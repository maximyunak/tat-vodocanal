import React from 'react';

import styles from './StatsChart.module.scss';
import { GrMoreVertical } from 'react-icons/gr';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatsChart = ({ title }) => {
  const data = {
    labels: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг'],
    datasets: [
      {
        label: title,
        data: [50, 90, 100, 30, 70, 80, 25, 60],
        backgroundColor: '#435ebe',
        hoverBackgroundColor: '#5069c5',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: false,
        text: title,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#7c8db5',
          stepSize: 20,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#7c8db5',
          font: {
            family: 'Open Sans',
            size: 14,
          },
        },
      },
    },
  };
  return (
    <div>
      <div className={styles.root}>
        <div className={styles.header}>
          <h3>{title}</h3>
          <GrMoreVertical />
        </div>
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
};

export default StatsChart;
