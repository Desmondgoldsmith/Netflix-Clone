import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
const [show,handleShow] =useState(false);
 useEffect(()=>{
    window.addEventListener("scroll",() =>{
        if(window.scrollY > 100){
            handleShow(true)
        }else {
            handleShow(false);
        }
    });
    return ()=>{
        window.removeEventListener("scroll", null);
    }
 },[])
  return (
    <div className={`Nav ${show && "black_nav"}`}>
    <img className='nav_logo' src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png' alt='netflix logo'/>
    </div>
  )
}

export default Nav