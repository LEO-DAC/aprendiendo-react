import { useState } from 'react'
import  bitacora from './data/bitacora_presion.json'
import  {drawChart} from './components/Chart'
import {FormRegistroPresion} from './components/FormRegistroPresion'
import { TableRegistros } from './components/TableRegistros'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [registros, setRegistros] = useState(bitacora);
  const [contadorRegistros, setContadorRegistros] = useState(0);

  return (
    <>
      <div style={{ display: 'flex' }}>

       <div style={{ width: '50%', margin: '0 auto' }}>
          {FormRegistroPresion(registros,contadorRegistros, setContadorRegistros,setRegistros )}
        </div>
        
        <div style={{ width: '50%', margin: '0 auto' }}>
          {drawChart(registros)}
        </div>

    </div>
     <div>
      {TableRegistros(registros)}
    </div> 

    </>
  )
}

export default App
