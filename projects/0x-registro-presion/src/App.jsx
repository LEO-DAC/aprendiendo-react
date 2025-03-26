import { useState } from 'react'
import './App.css'

function App() {
  const [registros, setRegistros] = useState([]);
  const [contadorRegistros, setContadorRegistros] = useState(0);

/*
  useEffect(() => {
    console.log("useEffect");
    console.log("los registros cambiaron");
  }, [registros]);
*/
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
    
    <div className='formulario'>
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
