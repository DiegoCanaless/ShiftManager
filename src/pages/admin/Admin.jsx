import React, { useState } from "react";
import "./Admin.css";
import NavBarSimple from "../../components/navbarsimple/navbarSimple";
import TarjetaServicio from "../../components/tarjetaServicio/tarjetaServicio";
import Input from "../../components/input/Input";
import FlechaAbajo from "../../assets/svg/flecha-abajo.svg";
import FlechaArriba from "../../assets/svg/flecha-arriba.svg";
import IconoBoxeo from "../../assets/svg/boxeo.svg";
import Checkbox from "../../components/checkbox/Checkbox";
import IconoCalendario from "../../assets/svg/calendario.svg";

const Admin = () => {
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [modalidad, setModalidad] = useState("");

  // Servicios de ejemplo
  const servicios = [
    {
      id: 1,
      titulo: "Servicio de Boxeo",
      textoBtnA: "Administrar",
      textoBtnB: "Eliminar",
      icono: IconoBoxeo,
    },
    {
      id: 2,
      titulo: "Servicio de Yoga",
      textoBtnA: "Administrar",
      textoBtnB: "Eliminar",
      icono: IconoBoxeo,
    },
    {
      id: 3,
      titulo: "Consulta Médica",
      textoBtnA: "Administrar",
      textoBtnB: "Eliminar",
      icono: IconoBoxeo,
    },
    {
      id: 4,
      titulo: "Clases de Baile",
      textoBtnA: "Administrar",
      textoBtnB: "Eliminar",
      icono: IconoBoxeo,
    },
  ];

  const handleBtnAClick = () => {
    console.log("Botón A clickeado");
  };

  const handleBtnBClick = () => {
    console.log("Botón B clickeado");
  };

  // Filtra los servicios a mostrar: 2 si está colapsado, todos si está expandido
  const serviciosAMostrar = mostrarTodos ? servicios : servicios.slice(0, 2);

  const toggleServicios = () => {
    setMostrarTodos(!mostrarTodos);
  };

  const handleModalidadChange = (newModalidad) => {
    setModalidad(newModalidad);
  };

  return (
    <>
      <NavBarSimple />
      <div className="contenedor-admin">
        <div className="contenedor-servicios-admin">
          {/* Encabezado desplegable */}
          <div className="desplegable-servicios-admin" onClick={toggleServicios}>
            <h2>Servicios</h2>
            <img src={mostrarTodos ? FlechaArriba : FlechaAbajo} alt="Flecha" className="flecha-admin"/>
          </div>

          <div className="grid-servicios-admin">
            {serviciosAMostrar.map((servicio) => (
              <TarjetaServicio
                key={servicio.id}
                titulo={servicio.titulo}
                textoBtnA={servicio.textoBtnA}
                textoBtnB={servicio.textoBtnB}
                onClickBtnA={handleBtnAClick}
                onClickBtnB={handleBtnBClick}
              >
                <img
                  src={servicio.icono}
                  alt={servicio.titulo}
                  className="icono-boxeo"
                />
              </TarjetaServicio>
            ))}
          </div>
        </div>
        <div className="contenedor-detalles-servicio">
          <form action="#" className="formulario-detalles-servicio">
            <div className='campo-formulario-servicio'>
              <h3>Nombre del servicio:</h3>
              <Input className='input-formulario-admin' type="text" placeholder="Ingresa el nombre" required />
            </div>

            <div className='campo-formulario-servicio'>
              <h3>Modalidad:</h3>
              <div className="formulario-servicio-modalidad">
                <Checkbox
                  id="presencial"
                  checked={modalidad === "presencial"}
                  onChange={() => handleModalidadChange("presencial")}
                />
                <p>Presencial</p>
              </div>
              <div className="formulario-servicio-modalidad">
                <Checkbox
                  id="virtual"
                  checked={modalidad === "virtual"}
                  onChange={() => handleModalidadChange("virtual")}
                />
                <p>Virtual</p>
              </div>
            </div>
            {/* Dependiendo de la modalidad elegida, se muestra o no el campo Dirección */}
            {modalidad === "presencial" && (
              <div className='campo-formulario-servicio'>
                <h3>Dirección:</h3>
                <Input className='input-formulario-admin' type="text" placeholder="Ingresa la dirección" required />
              </div>
            )}

            <div className='campo-formulario-servicio'>
              <h3>Fechas disponibles:</h3>
              <img src={IconoCalendario} alt="Calendario" className="icono-calendario" />
            </div>
          </form>
        </div>
      </div>
      <footer className='footer-simple'>
        <p>© 2024 Shift Manager System. All rights reserved.</p>
      </footer>
    </>
    
  );
};

export default Admin;
