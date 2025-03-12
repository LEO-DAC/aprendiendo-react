
// se importa el método createRoot de react-dom/client
// se importa el método render de react-dom
import { createRoot } from 'react-dom/client'
import { App } from './App'   
// se importa el método render de react
const root = createRoot(document.getElementById('app'))
// se renderiza un h1 con el texto "Hola React" en el elemento con id "app"
root.render(<App />)