import React, { useState, useEffect } from "react";
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
import IconoCancha from "../../assets/svg/cancha.svg";
import IconoClases from "../../assets/svg/clases.svg";
import IconoClinic from "../../assets/svg/clinic.svg";
import IconoPresentaciones from "../../assets/svg/presentaciones.svg";
import IconoPsicologo from "../../assets/svg/psicologo.svg";

const Admin = () => {
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [modalidad, setModalidad] = useState("");
  const [fechasSeleccionadas, setFechasSeleccionadas] = useState([]);
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [mostrarFechas, setMostrarFechas] = useState(false);
  const [nombreServicio, setNombreServicio] = useState("");
  const [descripcionServicio, setDescripcionServicio] = useState("");
  const [direccionServicio, setDireccionServicio] = useState("");
  const [servicios, setServicios] = useState([]);
  const [horarioTemporal, setHorarioTemporal] = useState({});

  useEffect(() => {
    const serviciosGuardados = JSON.parse(localStorage.getItem("servicios")) || [];
    setServicios(serviciosGuardados);
  }, []);

  const toggleServicios = () => {
    setMostrarTodos(!mostrarTodos);
  };

  const toggleFechas = () => {
    setMostrarFechas(!mostrarFechas);
  };

  const handleModalidadChange = (newModalidad) => {
    setModalidad(newModalidad);
  };

  const handleFechaSeleccionada = (date) => {
    if (fechasSeleccionadas.some((fecha) => fecha.date.getTime() === date.getTime())) {
      setFechasSeleccionadas(fechasSeleccionadas.filter((fecha) => fecha.date.getTime() !== date.getTime()));
    } else {
      setFechasSeleccionadas([...fechasSeleccionadas, { date, horarios: [] }]);
    }
  };

  const eliminarFecha = (fecha) => {
    setFechasSeleccionadas(fechasSeleccionadas.filter((f) => f.date.getTime() !== fecha.date.getTime()));
  };

  const eliminarHorario = (fecha, horario) => {
    setFechasSeleccionadas(
      fechasSeleccionadas.map((f) =>
        f.date.getTime() === fecha.date.getTime()
          ? { ...f, horarios: f.horarios.filter((h) => h !== horario) }
          : f
      )
    );
  };

  const handleHorarioTemporalChange = (fecha, value) => {
    setHorarioTemporal({
      ...horarioTemporal,
      [fecha.date.getTime()]: value,
    });
  };

  const agregarHorario = (fecha) => {
    const horario = horarioTemporal[fecha.date.getTime()];
    if (horario) {
      setFechasSeleccionadas(
        fechasSeleccionadas.map((f) =>
          f.date.getTime() === fecha.date.getTime() ? { ...f, horarios: [...f.horarios, horario] } : f
        )
      );
      setHorarioTemporal({
        ...horarioTemporal,
        [fecha.date.getTime()]: "",
      });
    }
  };

  const guardarServicio = () => {
    if (!isFormValid()) return;

    const nuevoServicio = {
      id: servicios.length + 1,
      titulo: nombreServicio,
      descripcion: descripcionServicio,
      textoBtnA: "Administrar",
      textoBtnB: "Eliminar",
      icono: IconoBoxeo,
      fechas: fechasSeleccionadas,
      modalidad: modalidad,
      direccion: modalidad === "presencial" ? direccionServicio : null
    };

    const nuevosServicios = [...servicios, nuevoServicio];
    setServicios(nuevosServicios);
    localStorage.setItem("servicios", JSON.stringify(nuevosServicios));
    setNombreServicio("");
    setDescripcionServicio("");
    setDireccionServicio("");
    setFechasSeleccionadas([]);
  };

  const isFormValid = () => {
    const hasName = nombreServicio.trim() !== '';
    const hasModalidad = modalidad !== '';
    const hasAddress = modalidad === 'presencial' ? direccionServicio.trim() !== '' : true;
    const hasDates = fechasSeleccionadas.length > 0;
    const hasDescription = descripcionServicio.trim() !== '';

    return hasName && hasModalidad && hasAddress && hasDates && hasDescription;
  };

  return (
    <>
      <NavBarSimple />
      <div className="contenedor-admin">
        <div className="contenedor-servicios-admin">
          {/* Encabezado desplegable */}
          <div className="desplegable-servicios-admin" onClick={toggleServicios}>
            <h2>Servicios</h2>
            <img src={mostrarTodos ? FlechaArriba : FlechaAbajo} alt="Flecha" className="icono-flecha" />
          </div>

          <div className="grid-servicios-admin">
            {servicios.slice(0, mostrarTodos ? servicios.length : 2).map((servicio) => (
              <TarjetaServicio
                key={servicio.id}
                titulo={servicio.titulo}
                textoBtnA={servicio.textoBtnA}
                textoBtnB={servicio.textoBtnB}
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
              <label className='label-formulario-servicio'><h3>Nombre:</h3></label>
              <Input
                className='input-formulario-servicio'
                type="text"
                placeholder="Ingresa el nombre del servicio"
                value={nombreServicio}
                onChange={(e) => setNombreServicio(e.target.value)}
              />
            </div>

            <div className='campo-formulario-servicio'>
              <label className='label-formulario-servicio'><h3>Descripción:</h3></label>
              <Input
                className='input-formulario-servicio'
                type="text"
                placeholder="Ingresa la descripción del servicio"
                value={descripcionServicio}
                onChange={(e) => setDescripcionServicio(e.target.value)}
              />
            </div>

            <div className='campo-formulario-servicio'>
              <label className='label-formulario-servicio'><h3>Modalidad:</h3></label>
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
                <label className='label-formulario-servicio'>Dirección:</label>
                <Input
                  className='input-formulario-servicio'
                  type="text"
                  placeholder="Ingresa la dirección"
                  value={direccionServicio}
                  onChange={(e) => setDireccionServicio(e.target.value)}
                />
              </div>
            )}

            <div className='campo-formulario-servicio'>
              <label className='label-formulario-servicio'><h3>Administrar fechas:</h3></label>
              <img
                src={IconoCalendario}
                alt="Calendario"
                className="icono-calendario"
                onClick={() => setMostrarCalendario(!mostrarCalendario)}
              />
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
                      fechasSeleccionadas.some((fecha) => fecha.date.getTime() === date.getTime())
                        ? "selected-day"
                        : ""
                    }
                    shouldCloseOnSelect={false}
                    multiple
                  />
                  <Boton
                    text="Aceptar"
                    onClick={() => setMostrarCalendario(false)}
                    className="boton-violeta"
                  />
                </div>
              </div>
            )}

            <div className="campo-fechas-servicio">
              <div className="desplegable-fechas-admin" onClick={toggleFechas}>
                <h3>Administrar horarios</h3>
                <img src={mostrarFechas ? FlechaArriba : FlechaAbajo} alt="Flecha" className="icono-flecha" />
              </div>
              {mostrarFechas && (
                <div className="lista-fechas">
                  {fechasSeleccionadas.map((fecha, index) => (
                    <div key={index} className="fecha-item">
                      <div className="fecha-con-eliminar">
                        {new Date(fecha.date).toLocaleDateString()}
                        <img
                          src={IconoEliminar}
                          alt="Eliminar"
                          className="icono-eliminar"
                          onClick={() => eliminarFecha(fecha)}
                        />
                      </div>
                      {fecha.horarios.map((horario, horarioIndex) => (
                        <div key={horarioIndex} className="horario-item">
                          {horario}
                          <img
                            src={IconoEliminar}
                            alt="Eliminar"
                            className="icono-eliminar"
                            onClick={() => eliminarHorario(fecha, horario)}
                          />
                        </div>
                      ))}
                      <div className="agregar-horario-item">
                        <Input
                          type="time"
                          className="input-horario"
                          placeholder="Agregar horario"
                          value={horarioTemporal[fecha.date.getTime()] || ""}
                          onChange={(e) => handleHorarioTemporalChange(fecha, e.target.value)}
                        />
                        <Boton
                          text="Agregar"
                          onClick={() => agregarHorario(fecha)}
                          className="boton-violeta"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Boton
              text="Guardar Servicio"
              onClick={(e) => {
                e.preventDefault();
                guardarServicio();
              }}
              className={`boton-violeta ${!isFormValid() ? 'boton-disabled' : ''}`}
              disabled={!isFormValid()}
            />
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
