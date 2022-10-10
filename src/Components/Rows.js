import axios from '../axios';
import React, { useEffect, useState } from 'react'
import './rows.css';

 const base_url = "https://image.tmdb.org/t/p/original/";
 function Rows({title,fetchURL}) {
    const [movies,setMovies] = useState([]);
    //using the useEffect property to make a request to TMDB to pull the movies on reload.
     useEffect(()=>{
        async function fetchData(){
            //only fetch data once the page gets loaded !
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
     },[fetchURL]);
    console.log(movies);
    return (
    <div className='row'>
    <h2>{title}</h2>
    <div className='row_posters'>
    {movies.map(movie=>(
        <img className='row_poster' key={movie.id} src = {`${base_url}${movie.poster_path}`} alt = {movie.name} /> 
    ))}
    </div>
    </div>
    
    )
}

export default Rows;