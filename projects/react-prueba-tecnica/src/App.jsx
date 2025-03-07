import { useState,useEffect } from 'react';
//const API_CAT = 'https://cataas.com/cat/says/hello';
const FACTS_CAT = 'https://catfact.ninja/fact';

export function App(){
    const [consulta,setConsulta] = useState(null);
    const [imageURL,setImageURL] = useState('');
    useEffect(()=>{
        console.log("dentro de useEffect 1 ")
    fetch(FACTS_CAT)
        .then(response  => response.json())
        .then(data => {
            const cons = data.fact
            setConsulta(cons)
            console.log("cons = "+ cons)
            const concatWord =  cons.split(' ',3).join(' ')
            console.log("concatWord = "+ concatWord)
                // Set the direct URL to the image
                setImageURL(`https://cataas.com/cat/says/${concatWord}`);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

    },[])


    return (
        <div>
            <h1>App de gatitos</h1>
            <h3>{ consulta!=null ? consulta.split(' ',3).join(' ') :'' }</h3>
            { imageURL && <img src={imageURL} alt="imagen de gato" />}

        </div>
    );
}