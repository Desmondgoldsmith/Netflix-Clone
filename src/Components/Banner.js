import axios from '../axios';
import React, { useEffect, useState } from 'react'
import requests from '../request';
import './Banner.css';
const base_url = "https://image.tmdb.org/t/p/original/";
function Banner() {
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
            return request;
        }
        fetchData();
    },[])
     //truncate text
     function truncate(str, n){
        return str?.length > n ? str.substr(0,n-1) + "...":str;
     }
  return (
<header className='banner'
 style = {{
    backgroundPosition: "center center",
    backgroundImage : `url("${base_url}${movies.backdrop_path}")`,
    backgroundSize: "cover",
 }}
>
    <div className='banner_content'>
      {/* banner header */}
        <h1 className='banner_header'>{movies?.name||movies?.title||movies.original_name}</h1>
    {/* two buttons */}
    <button className='banner_buttons'>Play</button>
    <button className='banner_buttons'>My List</button>
    <h3 className='banner_description'>{truncate(movies?.overview,150)}</h3>
    </div>

    
  <div className='banner_fade_bottom'/>
</header>
  )
}

export default Banner