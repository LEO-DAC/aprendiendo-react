import { useState } from 'react'
import './App.css'

function App() {
  var [registros, setRegistros] = useState([]);
  const saveRecord = (e) => {
    e.preventDefault();
    const date = document.querySelector('input[type="date"]').value;
    const time = document.querySelector('input[type="time"]').value;
    const presionSistolica = document.querySelector('input[type="number"]').value;
    const presionDiastolica = document.querySelector('input[type="number"]').value;
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
    document.querySelector('input[type="number"]').value = '';
    document.querySelector('#presionDiastolica').value= '';
  }
  
  return (
    <>
    
    <div className='formulario'>
      <h2>Registro de Presión</h2>
      <form>
        <label className='label-input'  >Fecha</label>
        <input className='input-class' type='date' />
        <label className='label-input' > Hora</label>
        <input className='input-class' type='time' />
        <label className='label-input' >Presión Sistólica</label>
        <input className='input-class' type='number' />
        <label className='label-input' >Presión Diastólica</label>
        <input id='presionDiastolica' className='input-class' type='number' />
        <button onClick={saveRecord} type='submit'>Guardar</button>
      </form>
    </div>

          <h3>registros</h3>
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
