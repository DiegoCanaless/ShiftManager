import React, { useState } from "react";
import "./Admin.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBarSimple from "../../components/navbarsimple/navbarSimple";
import TarjetaServicio from "../../components/tarjetaServicio/tarjetaServicio";
import Input from "../../components/input/Input";
import Boton from "../../components/boton/Boton";
import FlechaAbajo from "../../assets/svg/flecha-abajo.svg";
import FlechaArriba from "../../assets/svg/flecha-arriba.svg";
import IconoBoxeo from "../../assets/svg/boxeo.svg";
import Checkbox from "../../components/checkbox/Checkbox";
import IconoCalendario from "../../assets/svg/calendario.svg";
import IconoEliminar from "../../assets/svg/eliminar.svg";

const Admin = () => {
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [modalidad, setModalidad] = useState("");
  const [fechasSeleccionadas, setFechasSeleccionadas] = useState([]);
  const [mostrarCalendario, setMostrarCalendario] = useState(false); 
  const [mostrarFechas, setMostrarFechas] = useState(false);

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

  // Filtra los servicios a mostrar: 2 si está colapsado, todos si está expandido
  const serviciosAMostrar = mostrarTodos ? servicios : servicios.slice(0, 2);

  // Funciones para manejar los clics en los botones
  const handleBtnAClick = () => {
    console.log("Botón A clickeado");
  };

  const handleBtnBClick = () => {
    console.log("Botón B clickeado");
  };

  // Función para alternar entre mostrar todos los servicios o solo algunos
  const toggleServicios = () => {
    setMostrarTodos(!mostrarTodos);
  };

  const toggleFechas = () => {
    setMostrarFechas(!mostrarFechas);
  };

  // Función para manejar el cambio de modalidad (presencial/virtual)
  const handleModalidadChange = (newModalidad) => {
    setModalidad(newModalidad);
  };

  // Función para manejar la selección de fechas
  const handleFechaSeleccionada = (date) => {
    if (fechasSeleccionadas.some((fecha) => fecha.getTime() === date.getTime())) {
      setFechasSeleccionadas(fechasSeleccionadas.filter((fecha) => fecha.getTime() !== date.getTime()));
    } else {
      setFechasSeleccionadas([...fechasSeleccionadas, date]);
    }
  };

  // Función para eliminar una fecha seleccionada
  const eliminarFecha = (fecha) => {
    setFechasSeleccionadas(fechasSeleccionadas.filter((f) => f.getTime() !== fecha.getTime()));
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
        
        <div className="formulario-servicio">
          <form action="#" className="formulario-detalles-servicio">
            <div className='campo-formulario-servicio'>
              <h3>Nombre:</h3>
              <Input className='input-formulario-servicio' type="text" placeholder="Ingresa el nombre del servicio" required />
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
                <Input className='input-formulario-servicio' type="text" placeholder="Ingresa la dirección" required />
              </div>
            )}

            <div className='campo-formulario-servicio'>
              <h3>Administar fechas:</h3>
              <img src={IconoCalendario} alt="Calendario" className="icono-calendario" onClick={() => setMostrarCalendario(!mostrarCalendario)} />
            </div>

            {/* Calendario donde se pueden elegir las distintas fechas para brindar el servicio */}
            {mostrarCalendario && (
              <div className="calendar-overlay">
                <div className="calendar-container">
                  <DatePicker
                    selected={null}
                    onChange={handleFechaSeleccionada}
                    inline
                    calendarClassName="custom-calendar"
                    dayClassName={(date) => 
                      fechasSeleccionadas.some((fecha) => fecha.getTime() === date.getTime())
                        ? "selected-day"
                        : ""
                    }
                    shouldCloseOnSelect={false}
                    multiple
                  />
                  <Boton text="Aceptar" onClick={() => setMostrarCalendario(false)} className="boton-violeta"/>
                </div>
              </div>
            )}

            {/* ACAAAAAAAAAAAA */}
            <div className="campo-fechas-servicio">
              <div className="desplegable-fechas-admin" onClick={toggleFechas}>
                <h3>Fechas Actuales</h3>
                <img src={mostrarFechas ? FlechaArriba : FlechaAbajo} alt="Flecha" className="flecha-admin"/>
              </div>
              {mostrarFechas && (
                <div className="lista-fechas">
                  {fechasSeleccionadas.map((fecha, index) => (
                    <div key={index} className="fecha-item">
                      {new Date(fecha).toLocaleDateString()}
                      <img src={IconoEliminar} alt="Eliminar" className="icono-eliminar" onClick={() => eliminarFecha(fecha)}/>
                    </div>
                  ))}
                </div>
              )}
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
