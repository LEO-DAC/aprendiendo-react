import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const registros = [];

  const handleSubmit = (e) => {}   
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
        <input className='input-class' type='number' />
        <button type='submit'>Guardar</button>
      </form>
    </div>

    </>
  )
}

export default App
