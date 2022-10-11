import axios from '../axios';
import React, { useEffect, useState } from 'react'
import requests from '../request';

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
    })
  return (
    <header className='Banner_header'>
      {/* {Banner header} */}
      <h1>Banner Header</h1>
      {/* {2 buttons} */}
      {/* description */}
    </header>
  )
}

export default Banner