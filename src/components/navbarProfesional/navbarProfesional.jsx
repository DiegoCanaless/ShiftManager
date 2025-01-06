import React, { useState } from 'react';
import logo from '../../assets/img/logopngtalvez.png';
import './navbarProfesional.css';

const NavbarProfesional = () => {
  const [showLogout, setShowLogout] = useState(false);

  const toggleLogout = () => {
    setShowLogout((prev) => !prev);
  };

  const handleLogout = () => {
    console.log('Cerrando sesión...');
    // Aquí puedes agregar lógica para cerrar sesión, como limpiar localStorage o redirigir al usuario.
  };

  return (
    <>
      <div className="navbarProfesional">
        <div className="navbarProfesionalEnlaces">
          <div>
            <span onClick={toggleLogout} className="nombreUsuario">
              Martin P.Disalvo
            </span>
            {showLogout && (
              <div className="logoutOption" onClick={handleLogout}>
                Cerrar sesión
              </div>
            )}
          </div>
          <div><span>Servicios</span></div>
          <div><span>Calendario</span></div>
        </div>

        <div className="contenedorLogoProfesional">
          <img src={logo} alt="Logo" />
          <span>Shift Manager</span>
        </div>
      </div>
    </>
  );
};

export default NavbarProfesional;
