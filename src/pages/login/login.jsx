import React, { useState } from 'react'
import logoGoogle from '../../assets/svg/logoGoogle.svg'
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
        <div className='contenedor-login'>
            <h1 className='titulo-login'>INICIÁ SESIÓN</h1>
            <div className='formularios-login'>
                <input className='input-login' type="text" placeholder="Ingresá tu email"/>
                <input className='input-login' type="password" placeholder="Ingresá tu contraseña"/>
            </div>
            <div className='contenedor-botones-login'>
                <button className='boton-login'>INICIAR SESIÓN</button>
                <button className='boton-login-google'>
                    INICIAR SESIÓN CON GOOGLE
                    <img src={logoGoogle} alt="Google logo" className='logo-google' />
                </button>
                <button className='boton-login-registrar' onClick={openModal}>REGISTRATE</button>
            </div>
        </div>

        {isModalOpen && (
            <div className='modal-registro'>
                <div className='contenido-modal'>
                    <span className='close-modal' onClick={closeModal}>&times;</span>
                    <h1 className='titulo-modal'>REGISTRATE</h1>
                </div>
            </div>
        )}
    </>
  )
}

export default login
