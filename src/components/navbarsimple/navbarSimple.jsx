import React from 'react'
import logo from "../../assets/logopngtalvez.png";
import './navbarSimple.css'
import volver from "../../assets/svg/volver.svg";

export const navbarSimple = () => {
  return (
    <>
      <div className='navbar-simple'>
        <div className='contenedor-volver'>
          <img src={volver} alt="volver" className='logo-volver' />
          <p>Volver</p>
        </div>
        <div className='logo-simple'>
          <img src={logo} alt="" className='logoimg-simple'/>
          <p id="nombreLogo-simple">Shift Manager</p>
        </div>
        <div className='div-vacio'>

        </div>
      </div>
    </>
  )
}

export default navbarSimple
