import React, { useState, useEffect } from 'react';
import axios from './axios';


const base_url = "https://image.tmdb.org/t/p/original/";

// const base_url = "https://image.tmdb.org/t/p/";

// const base_url = "";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {+++
  async function fetchData() {
    const request = await axios.get(fetchUrl);
    //console.log(request);
    setMovies(request.data.results);
    return request;
    //"https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213"
   }
  fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div className="row">
        <h2>{title}</h2>

        <div className="row__posters">
           { /* several row__poster(s) */}

           {movies.map(movie => (
             <img 
              //  className="row_posters"
             src={'${base_url}${movie.poster_path}'} alt={movie.name}/>
           ))}
        </div>
    </div>
  )
}

export default Row