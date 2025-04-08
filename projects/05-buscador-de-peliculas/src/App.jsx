//import responseMovies from './mocks/responseMovies.json'
//import withoutResponse from './mocks/withoutResponse.json'
import { useState } from 'react'
import './App.css'

function App() {

  //const movies = withoutResponse.Response == "False" ? [] : responseMovies.Search;
  //const movies = responseMovies.Search;

  const [WordToSearchFor, setWordToSearchFor] = useState('');
  const [SearchMovies, setSearchMovies] = useState([]);
  const [hasMovies, setHasMovies] = useState(true);

  function FilterSearch(e) {
    setSearchMovies([]);
    e.preventDefault();
    console.log('Buscando:', WordToSearchFor);

    fetch(`http://www.omdbapi.com/?apikey=8ed34103&s=${WordToSearchFor}`)
     .then(response =>{ 
        if(response.Response == "False") {
          setHasMovies(false);
          console.log('No se encontraron resultados');
          console.log(response.Response);
        }else{
          console.log('Resultados encontrados');
          console.log(response.Search);
          setSearchMovies(response.Response);
          setHasMovies(true);
        }
      }
        )
     /*.then(data =>  {setSearchMovies(data.Search)
        console.log('Resultados encontrados');
        console.log(data.Search);
        setHasMovies(true);
      }
     )
     .catch(error => console.log(error)
    
    );*/
    

  }

function handleChange(e) {
  setWordToSearchFor(e.target.value);
  console.log(WordToSearchFor);
}


  return (
  <div className ="page">

    <header>
      <h1>Buscador de Películas</h1>
      <form action="">
            <input type="text"  onChange={handleChange} placeholder='Avenguers, star Wars, Matrix' />
            <button type="submit" onClick={FilterSearch}  >Buscar</button>
      </form>
    </header>

    <main>
      <h3>Registros encontrados: { SearchMovies ?  SearchMovies.length : 0} </h3>

      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Año</th>
            <th>Poster</th>
          </tr>
        </thead>
        <tbody>
          {
            hasMovies & SearchMovies ?

            SearchMovies.map( movie => (
              <tr key={movie.imdbID}>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>
                  <img src={movie.Poster} alt={movie.Title} />
                </td>
              </tr>
            ))
            :
            <tr>
              <td colSpan="3">
                <p>No se encontraron resultados</p>
              </td>
            </  tr>

          }
        </tbody>
      </table>
    </main>
  </div>
  )
}

export default App
