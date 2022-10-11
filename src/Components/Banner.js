import axios from '../axios';
import React, { useEffect, useState } from 'react'
import requests from '../request';
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
        }
        fetchData();
    },[])
  return (
    <header className='Banner' 
    style={{backgroundSize: "cover",
            backgroundImage: `url("${base_url}${movies?.backdrop_path}")`,
           backgroundPosition : "center center",
    }}
    >
     <div className='Banner_content'>
         {/* {Banner header} */}
      <h1>{
         movies?.title || movies?.name || movies.original_name
      }</h1>
       <div className='banner_button'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
       </div>
      {/* {2 buttons} */}
      <h3 className='header_description'>{movies?.overview}</h3>
      {/* description */}
     </div>
     
    </header>
  )
}

export default Banner