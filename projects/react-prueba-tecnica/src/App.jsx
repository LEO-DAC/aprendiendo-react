import { useState,useEffect } from 'react';
export const FACTS_CAT = 'https://catfact.ninja/fact';
export const API_CAT = 'https://cataas.com/cat/says/';
import './style.css';
import {PrimerHook } from './Hooks/PrimerHook.jsx';

export function App(){
    const [consulta,setConsulta] = useState(null);
    const [imageURL,setImageURL] = useState('');
    const [varHandleSubmit,setVarHandleSubmit] = useState(0);
    useEffect(()=>{
        fetch(FACTS_CAT)
        .then(response  => response.json())
        .then(data => {
            const cons = data.fact
            setConsulta(cons)
            const concatWord =  cons.split(' ',3).join(' ')
                // Set the direct URL to the image
                setImageURL( API_CAT+concatWord );
            })
            .catch(error => {
                console.error("Error fetching data:", error);
          });

    },[varHandleSubmit])

  function changerCat(){
    setVarHandleSubmit(varHandleSubmit+1)
  }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={ changerCat }>Change Cat</button>  
            <h3>{ consulta!=null ? consulta.split(' ',3).join(' ') :'' }</h3>
            { imageURL && <img src={imageURL} alt="imagen de gato" />}
              
            <PrimerHook texto={"texto de prueba"} />
        </main>
    );
}