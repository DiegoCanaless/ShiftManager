import React, { useState } from 'react'
import logoGoogle from '../../assets/svg/logoGoogle.svg'
import NavbarSimple from '../../components/navbarsimple/navbarSimple';
import './login.css'

const login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <NavbarSimple />
      <div className='contenedor-login'>
        <h1 className='titulo-login'>INICIÁ SESIÓN</h1>
        <form className='formulario-login' action="#">
          <input className='input-login' type="email" placeholder="Ingresá tu email" required/>
          <input className='input-login' type="password" placeholder="Ingresá tu contraseña" required/>

          <div className='contenedor-botones-login'>
            <button className='boton-login'>INICIAR SESIÓN</button>
            <button className='boton-login-google' onClick={(e) => e.preventDefault()}>
              GOOGLE
              <img src={logoGoogle} alt="Google logo" className='logo-google' />
            </button>
            <button className='boton-login-registrar' onClick={(e) => { e.preventDefault(); openModal(); }}>
              REGISTRATE
            </button>
          </div>
        </form>
        
        
      </div>

      {isModalOpen && (
        <div className='modal-registro'>
          <div className="contenido-modal-registro">
            <span className='close-modal-registro' onClick={closeModal}>&times;</span>
            <div className="cabecera-modal-registro">
              <h2>Formulario de registro</h2>
              <p>Blablablablablablabla.</p>
            </div>
            {/* No se que esto de FORM ACTION="#" */}
            <form className='formulario-registro' action="#">
              <div className='campo-registro'>
                <h3>Nombre:</h3>
                <input className='input-registro' type="text" placeholder="Ingresá tu nombre" required />
              </div>
              <div className='campo-registro'>
                <h3>Apellido:</h3>
                <input className='input-registro' type="text" placeholder="Ingresá tu apellido" required />
              </div>
              <div className='campo-registro'>
                <h3>Fecha de nacimiento:</h3>
                <input className='input-registro' type="date" placeholder="Fecha de nacimiento" required />
              </div>
              <div className='campo-registro'>
                <h3>Correo electrónico:</h3>
                <input className='input-registro' type="email" placeholder="ejemplo@ejemplo.com" required />
              </div>
              <div className='campo-registro'>
                <h3>Contraseña:</h3>
                <input className='input-registro' type="password" placeholder="Ingresá una contraseña segura" required />
              </div>
              <div className='campo-registro'>
                <h3>Repetir contraseña:</h3>
                <input className='input-registro' type="password" placeholder="Repetí la contraseña" required />
              </div>

              <div className='contenedor-botones-login'>
                <button className='boton-login-google' onClick={(e) => e.preventDefault()}>
                  REGISTRARSE CON GOOGLE
                  <img src={logoGoogle} alt="Google logo" className='logo-google' />
                </button>
                <button className='boton-login'>REGISTRARSE</button>
              </div>
              <span> Ya tenés una cuenta? <a href="#" onClick={closeModal}>Iniciá sesión</a></span>
            </form>
          </div>
        </div>
      )}
      <footer className='footer-simple'>
        <p>© 2024 Shift Manager System. All rights reserved.</p>
      </footer>
    </>
  )
}

export default login
