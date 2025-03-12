
import { useEffect,useState } from "react"

function App() {
   const[enabled, setEnabled] = useState(false)
   const [position, setPosition] = useState({x:0,y:0})
   
  useEffect(() => { 
    console.log('efecto',{enabled})
    
    // se crea la funcion handleMove que recibe un evento y actualiza la posicion del puntero
    const handleMove = (event) => {
      const {clientX,clientY} = event
      console.log('handleMove',{clientX,clientY})
      setPosition({x:clientX,y:clientY})
    }

    // si enabled es true se agrega el evento pointermove
    if(enabled){
      window.addEventListener('pointermove',handleMove)
    }

    // ese necesario limpiar las suscripciones para evitar fugas de memoria y mejorar el rendimiento
    //se ejecuta cuando se desmonta el componente
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove',handleMove)
    } 
  },[enabled])  
  return (
    <main>
      <div style={{
        position:'absolute',
        border:'5px solid rgb(18, 17, 17)',
        backgroundColor:'#09f',
        borderRadius:'50%',
        opacity:0.8,
        pointerEvents: 'none',
        margincolor:'black',
        left:-20,
        top:-20,
        width:40,
        height:40,
        transform:`translate(${position.x}px,${position.y}px)`
      }}>

      </div>
      <button onClick={() => setEnabled(!enabled)}>{ enabled ? 'Desactivar' : 'Activar' } seguir puntero</button>
    </main>
   
  )
}

export default App
