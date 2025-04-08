import { useState } from 'react'
import  bitacora from './data/bitacora_presion.json'
import { Line } from 'react-chartjs-2';
import './App.css'

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

function App() {

  const [registros, setRegistros] = useState(bitacora);
  const [contadorRegistros, setContadorRegistros] = useState(0);

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
  };


  const saveRecord = (e) => {
    setContadorRegistros(contadorRegistros + 1);
    e.preventDefault();
    const date = document.querySelector('input[type="date"]').value;
    const time = document.querySelector('input[type="time"]').value;
    const presionSistolica = document.querySelector('#presionSistolica').value;
    const presionDiastolica = document.querySelector('#presionDiastolica').value;
    const record = {
      date: date,
      time: time,
      presionSistolica: presionSistolica,
      presionDiastolica: presionDiastolica
    }
    registros.push(record);
    setRegistros(registros);
    console.log(registros);
    clearForm();
  }

  const clearForm = () => {
    document.querySelector('input[type="date"]').value = '';
    document.querySelector('input[type="time"]').value = '';
    document.querySelector('#presionSistolica').value = '';
    document.querySelector('#presionDiastolica').value= '';
  }
  
  return (
    <>
    


    <div style={{ display: 'flex' }}>

        <div className='formulario' style={{ width: '50%', margin: '0 auto' }}>
          <h2>Registro de Presión</h2>
          <form>
            <label className='label-input'  >Fecha</label>
            <input className='input-class' type='date' />
            <label className='label-input' > Hora</label>
            <input className='input-class' type='time' />
            <label className='label-input' >Presión Sistólica</label>
            <input id='presionSistolica' className='input-class' type='number' />
            <label className='label-input' >Presión Diastólica</label>
            <input id='presionDiastolica' className='input-class' type='number' />
            <button onClick={saveRecord} type='submit'>Guardar</button>
          </form>
        </div>

        <div style={{ width: '50%', margin: '0 auto' }}>
          <Line data={ data} options={options} />
        </div>
</div>
    <h3>registros totales: { registros.length } </h3>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Presión Sistólica</th>
              <th>Presión Diastólica</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((registro, index) => {
              return (
                <tr key={index}>
                  <td>{registro.date}</td>
                  <td>{registro.time}</td>
                  <td>{registro.presionSistolica}</td>
                  <td>{registro.presionDiastolica}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

    </>
  )
}

export default App
