import React from 'react'
import './navbarSecretario.css'
import logo from '../../assets/img/logopngtalvez.png'
import { useState } from 'react'




const navbarSecretario = () => {

  const [mostrarCerrarSesion, setMostrarCerrarSesion] = useState(false);

  const toggleCerrarSesion = () => {
    setMostrarCerrarSesion(!mostrarCerrarSesion);
  };

  const cerrarSesion = () => {
    alert("Cerrando sesión...");
    // Aquí puedes agregar la lógica para cerrar sesión, como limpiar el estado global o redirigir.
  };

  return (
    <>
        <div className='navbarSecretario'>
          <div className='contenedorNombreSecretario' id='cerrarSesion' onClick={toggleCerrarSesion}>
            <span>ADMIN: Martin P. Disalvo</span>
            {mostrarCerrarSesion && (
              <div className="opcionCerrarSesion" onClick={cerrarSesion}>
                Cerrar Sesión
              </div>
            )}
        </div>
            

            <div className='contenedorLogoSecretario'>
                <img src={logo} alt="" />
                <span>Shift Manager</span>
            </div>
        </div>
    </>
  )
}

export default navbarSecretario
