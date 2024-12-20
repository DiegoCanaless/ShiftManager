import './navbarIndex.css';
import logo from "../../assets/logopngtalvez.png";
import iconMenu from "../../assets/svg/menu.svg";
import iconHome from "../../assets/svg/home.svg";
import iconService from "../../assets/svg/services.svg";
import iconInfo from "../../assets/svg/info.svg";
import iconContactanos from "../../assets/svg/email.svg";
import iconcerrarMenu from "../../assets/svg/cerrarMenu.svg";

import { useState } from 'react';



export const navbarIndex = () => {

  const [menuAbierto, setMenuAbierto] = useState(false);

  const abrirMenu = () => {
    setMenuAbierto(!menuAbierto);
    let listaNavBar = document.getElementById("listaNavBar")
    let navbar = document.getElementById("navbar")
    let nombreLogo = document.getElementById("nombreLogo")
    let navbarLogo = document.getElementById("navbarLogo")
    let menuIcon = document.getElementById("menuIcon")
    let cerrarMenuIcon = document.getElementById("cerrarMenuIcon")



    navbar.classList.toggle("navbarExpand")
    listaNavBar.style.display = menuAbierto ? "none" : "grid"


    cerrarMenuIcon.style.display = menuAbierto ? "none" : "block"
    nombreLogo.style.display = menuAbierto ? "block" : "none"
    navbarLogo.style.display = menuAbierto ? "block" : "none"
    menuIcon.style.display = menuAbierto ? "block" : "none"
    
    

  }
  
  const cerrarMenu = () => {
    setMenuAbierto(false);

  }


  return (
    <>
      <div className='navbar' id='navbar'>
        <div className='logo'>
          <img src={logo} alt="" className='logoimg' id="navbarLogo" />      
          <p id="nombreLogo">Shift Manager</p>
        </div>
        <div className='listaNavBar' id='listaNavBar'>
          <a><img src={iconHome} alt=""/><p>Home</p></a>
          <a><img src={iconService} alt=""/><p>Servicios</p></a>
          <a><img src={iconInfo} alt=""/><p>Sobre Nosotros</p></a>
          <a><img src={iconContactanos} alt=""/><p>Contactanos</p></a>
          <a className='navPedirTurno'>Pedir Turno</a>
          <div className='modoOscuroContenedor'>
            <i className="bi bi-moon-fill"></i>
            <i className="bi bi-brightness-low-fill"></i>
          </div>
          <div className='divRaroNavbar'></div>
          <div className='cerrarMenuContenedor'>
            <img src={iconcerrarMenu} className='menuCerrarIcon' alt="" onClick={abrirMenu} id='cerrarMenuIcon' />
          </div>
          
        </div>
        
        
        <img src={iconMenu} className='menuIcon' alt="" onClick={abrirMenu} id='menuIcon' />
      </div>
    </>
  )
}

export default navbarIndex
