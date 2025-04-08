import { useState } from 'react'
import  bitacora from './data/bitacora_presion.json'
import  {drawChart} from './components/chart'
import {formRegistroPresion} from './components/formRegistroPresion'
import { TableRegistros } from './components/TableRegistros'
import './App.css'
import  Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [registros, setRegistros] = useState(bitacora);
  const [contadorRegistros, setContadorRegistros] = useState(0);

  return (
    <>
  
  <Button variant="primary">Primary</Button>


    <div style={{ display: 'flex' }}>

       <div style={{ width: '50%', margin: '0 auto' }}>
          {formRegistroPresion(registros,contadorRegistros, setContadorRegistros,setRegistros )}
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
