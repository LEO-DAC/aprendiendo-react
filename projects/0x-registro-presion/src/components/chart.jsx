import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Title,
  } from 'chart.js';
  
  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
  );


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Datos de presion',
      },
    },
  };

  // meses de toma de presion
  const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];  
  
  export const drawChart=( registros ) =>{

        const data = {
            labels: labels,
            //labels: ['8am', '6pm'],
            datasets: [
            {
                label: 'Sistolica',
                data: registros.map((registro) => registro.presionSistolica),
                fill: true,
                borderColor: 'rgb(137, 192, 75)',
                tension: 0.1
            },
            {
                label: 'Diastolica',
                data: registros.map((registro) => registro.presionDiastolica),
                fill: true,
                borderColor: 'rgb(38, 40, 124)',
                tension: 0.1
            }
            ]
        }

        return (
            <Line data={ data} options={options} />
        )

    };

