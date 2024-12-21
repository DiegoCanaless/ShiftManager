import React from 'react'
import './navbarSecretario.css'
import logo from '../../assets/img/logopngtalvez.png'

const navbarSecretario = () => {
  return (
    <>
        <div className='navbarSecretario'>
            <div className='contenedorNombreSecretario'>
                <span>ADMIN: Martin P.Disalvo </span>
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
