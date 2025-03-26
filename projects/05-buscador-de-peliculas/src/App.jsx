import responseMovies from './mocks/responseMovies.json'
import withoutResponse from './mocks/withoutResponse.json'
import { useState } from 'react'
import './App.css'

function App() {
  
  //const movies = withoutResponse.Response == "False" ? [] : responseMovies.Search;
  const movies = responseMovies.Search;
  const hasMovies = movies.length > 0 ? true : false; 

  const [WordToSearchFor, setWordToSearchFor] = useState('');
  const [SearchMovies, setSearchMovies] = useState(movies);
function FilterSearch(e) {
  setSearchMovies([]);
  e.preventDefault();
  console.log('Buscando:', WordToSearchFor);
  var moviesFilter = [];
  for (let i=0; i< movies.length; i++ ){
    
    if (movies[i].Title.includes(WordToSearchFor)){
        moviesFilter.push(movies[i]);
        setSearchMovies(moviesFilter);    
        console.log("Coincidencia: "+movies[i].Title);
    }
  }

  console.log( "registros encontrados: "+SearchMovies.length);
}

function handleChange(e) {
  setWordToSearchFor(e.target.value);
  console.log(WordToSearchFor);
}


  return (
  <div class ="page">

    <header>
      <h1>Buscador de Películas</h1>
      <form action="">
            <input type="text"  onChange={handleChange} placeholder='Avenguers, star Wars, Matrix' />
            <button type="submit" onClick={FilterSearch}  >Buscar</button>
      </form>
    </header>

    <main>
      aqui van a mostrarse los resultados

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
            hasMovies ?

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
