import React, { useState, useEffect } from "react";
import "./NavbarUsuario.css";

const NavbarUsuario = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Verifica el tamaño inicial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    if (!isDesktop) setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isDesktop ? "desktop" : isOpen ? "open" : "closed"}`}>
      <div className="navbar-header">
        <div className="user-info">
          <span className="username">Shift Manager</span>
        </div>
        {!isDesktop && (
          <div className="navbar-icons">
            <button className="menu-toggle" onClick={toggleMenu}>
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        )}
      </div>

      {(isDesktop || isOpen) && (
        <div className="navbar-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#pediTurno">Pedí un turno</a></li>
            <li><a href="#misTurnos">Mis turnos</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarUsuario;
