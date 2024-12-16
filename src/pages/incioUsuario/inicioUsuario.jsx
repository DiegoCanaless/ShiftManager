import React, { useState } from 'react';
import NavbarUsuario from '../../components/navbarusuario/NavbarUsuario';
import './inicioUsuario.css';

const InicioUsuario = () => {
  // Estado para controlar la visibilidad de las tarjetas y el icono de la flecha
  const [pendientesVisible, setPendientesVisible] = useState(true);
  const [anterioresVisible, setAnterioresVisible] = useState(true);

  // Función para alternar el estado de las secciones
  const togglePendientes = () => {
    setPendientesVisible(!pendientesVisible);
  };

  const toggleAnteriores = () => {
    setAnterioresVisible(!anterioresVisible);
  };

  return (
    <>
      <NavbarUsuario />
      <div>
        <div className="nav-estatico">
          <span className="nombreEmpresa">ShiftManager</span>
          <div className="iconos-barra">
            {/* Aquí pueden ir íconos si los tienes */}
          </div>
        </div>

        {/* Turnos Pendientes */}
        <div className="turnos-pendientes">
          <h2 className="titulo-pendientes" onClick={togglePendientes}>
            Turnos Pendientes
            <span className="icono-desplegable">
              <i className={`bi ${pendientesVisible ? 'bi-arrow-down-short' : 'bi-arrow-right-short'}`}></i>
            </span>
          </h2>
          {pendientesVisible && (
            <div className="card-turno">
              <h2 className="titulo-consulta">Consulta Médica</h2>
              <p className="card-datos">Dr. Ramírez Guenza</p>
              <p className="card-datos">29-11-24</p>
              <p className="card-datos">16:30hs - 17:30hs</p>
              <p className="card-datos">Av. Libertador 842</p>
              <div className="btns-card">
                <button className="btn-card">Editar</button>
                <button className="btn-card">Cancelar</button>
              </div>
            </div>
          )}
          <div className="linea-separadora"></div>
        </div>

        {/* Turnos Anteriores */}
        <div className="turnos-anteriores">
          <h2 className="titulo-anteriores" onClick={toggleAnteriores}>
            Turnos Anteriores
            <span className="icono-desplegable">
              <i className={`bi ${anterioresVisible ? 'bi-arrow-down-short' : 'bi-arrow-right-short'}`}></i>
            </span>
          </h2>
          {anterioresVisible && (
            <div className="card-turno">
              <h2 className="titulo-consulta">Consulta Médica</h2>
              <p className="card-datos">Dr. Ramírez Guenza</p>
              <p className="card-datos">29-11-24</p>
              <p className="card-datos">16:30hs - 17:30hs</p>
              <p className="card-datos">Av. Libertador 842</p>
              <div className="btns-card">
                <button className="btn-card">Editar</button>
                <button className="btn-card">Cancelar</button>
              </div>
            </div>
          )}
          <div className="linea-separadora"></div>
        </div>
      </div>
    </>
  );
};

export default InicioUsuario;
