import React from 'react'
import "./footer.css"
import logo from '../../assets/img/logo.jpg'
import logoX from '../../assets/svg/logoX.svg'
import logoInstagram from '../../assets/svg/logoInstagram.svg'
import logoFacebook from '../../assets/svg/logoFacebook.svg'
import logoEmail from '../../assets/svg/logoEmail.svg'

const footer = () => {
  return (
    <>
        <div className='footer'>
            <img className='imagenFooter2' src={logo} alt="Logo de Shift Manager"/>
            <div className='footerContenido'>
                <div className='iconosFooter'>
                    <img src={logoX} className='iconX' alt="Logo de X"/>
                    <img src={logoInstagram} className='iconInstagram' alt="Logo de Instagram"/>
                    <img src={logoFacebook} className='iconFacebook' alt="Logo de Facebook"/>
                    <img src={logoEmail} className='iconEmail' alt="Logo de Email"/>
                </div>
                <div className='textoFooter'>
                    <p>© 2024 Shift Manager System. All rights reserved.</p>
                </div>
            </div>

            <img className='imagenFooter' src={logo} alt="Logo de Shift Manager"/>
        </div>
    </>
  )
}

export default footer