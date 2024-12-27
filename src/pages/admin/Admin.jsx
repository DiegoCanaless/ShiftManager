import React, { useState, useEffect } from "react";
import "./Admin.css";
import NavBarSimple from "../../components/navbarsimple/navbarSimple";
import TarjetaServicio from "../../components/tarjetaServicio/tarjetaServicio";
import Input from "../../components/input/Input";
import Boton from "../../components/boton/Boton";
import FlechaAbajo from "../../assets/svg/flecha-abajo.svg";
import FlechaArriba from "../../assets/svg/flecha-arriba.svg";
import Checkbox from "../../components/checkbox/Checkbox";
import IconoCuadroVacio from "../../assets/svg/cuadro-vacio.svg";
import IconoBoxeo from "../../assets/svg/boxeo.svg";
import IconoSalud from "../../assets/svg/salud.svg";
import IconoClases from "../../assets/svg/clases.svg";
import IconoClinic from "../../assets/svg/clinic.svg";
import IconoPresentaciones from "../../assets/svg/presentaciones.svg";
import IconoCancha from "../../assets/svg/cancha.svg";
import IconoEliminar from "../../assets/svg/eliminar.svg";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const iconos = [
  { src: IconoBoxeo, className: "icono-boxeo" },
  { src: IconoSalud, className: "icono-salud" },
  { src: IconoClases, className: "icono-clases" },
  { src: IconoClinic, className: "icono-clinic" },
  { src: IconoPresentaciones, className: "icono-presentaciones" },
  { src: IconoCancha, className: "icono-cancha" }
];

const Admin = () => {
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [modalidad, setModalidad] = useState("");
  const [nombreServicio, setNombreServicio] = useState("");
  const [descripcionServicio, setDescripcionServicio] = useState("");
  const [direccionServicio, setDireccionServicio] = useState("");
  const [servicios, setServicios] = useState([]);
  const [iconoSeleccionado, setIconoSeleccionado] = useState(null);
  const [mostrarSelectorIcono, setMostrarSelectorIcono] = useState(false);
  const [servicioEditando, setServicioEditando] = useState(null);
  const [horarios, setHorarios] = useState([]);
  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");
  const [diasSeleccionados, setDiasSeleccionados] = useState([]);
  const [fechasSeleccionadas, setFechasSeleccionadas] = useState([]);
  const [mostrarHorarios, setMostrarHorarios] = useState(false);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

  useEffect(() => {
    const serviciosGuardados = JSON.parse(localStorage.getItem("servicios")) || [];
    setServicios(serviciosGuardados);
  }, []);

  const toggleServicios = () => {
    setMostrarTodos(!mostrarTodos);
  };

  const handleModalidadChange = (newModalidad) => {
    setModalidad(newModalidad);
  };

  const guardarServicio = () => {
    const nuevoServicio = {
      id: Date.now(),
      titulo: nombreServicio,
      descripcion: descripcionServicio,
      modalidad: modalidad,
      direccion: modalidad === "presencial" ? direccionServicio : null,
      icono: iconoSeleccionado.src,
      iconoClassName: iconoSeleccionado.className,
      calendarios: [
        {
          tipo: "dias",
          dias: diasSeleccionados,
          horarios: horarios
        },
        {
          tipo: "fechas",
          fechas: fechasSeleccionadas,
          horarios: horarios
        }
      ]
    };
    setServicios([...servicios, nuevoServicio]);
    localStorage.setItem("servicios", JSON.stringify([...servicios, nuevoServicio]));
    limpiarFormulario();
  };

  const editarServicio = (servicio) => {
    setServicioEditando(servicio);
    setNombreServicio(servicio.titulo);
    setDescripcionServicio(servicio.descripcion);
    setModalidad(servicio.modalidad);
    setDireccionServicio(servicio.direccion || "");
    setIconoSeleccionado({ src: servicio.icono, className: servicio.iconoClassName });
    setDiasSeleccionados(servicio.calendarios.find(c => c.tipo === "dias")?.dias || []);
    setFechasSeleccionadas(servicio.calendarios.find(c => c.tipo === "fechas")?.fechas || []);
    setHorarios(servicio.calendarios[0].horarios);
  };

  const eliminarServicio = (id) => {
    const nuevosServicios = servicios.filter((servicio) => servicio.id !== id);
    setServicios(nuevosServicios);
    localStorage.setItem("servicios", JSON.stringify(nuevosServicios));

    if (servicioEditando && servicioEditando.id === id) {
      setServicioEditando(null);
      limpiarFormulario();
    }
  };

  const actualizarServicio = () => {
    if (!isFormValid()) return;

    const servicioActualizado = {
      ...servicioEditando,
      titulo: nombreServicio,
      descripcion: descripcionServicio,
      modalidad: modalidad,
      direccion: modalidad === "presencial" ? direccionServicio : null,
      icono: iconoSeleccionado.src,
      iconoClassName: iconoSeleccionado.className,
      calendarios: [
        {
          tipo: "dias",
          dias: diasSeleccionados,
          horarios: horarios
        },
        {
          tipo: "fechas",
          fechas: fechasSeleccionadas,
          horarios: horarios
        }
      ]
    };

    const nuevosServicios = servicios.map((servicio) =>
      servicio.id === servicioActualizado.id ? servicioActualizado : servicio
    );
    setServicios(nuevosServicios);
    localStorage.setItem("servicios", JSON.stringify(nuevosServicios));
    setServicioEditando(null);
    limpiarFormulario();
  };

  const isFormValid = () => {
    const hasName = nombreServicio.trim() !== '';
    const hasModalidad = modalidad !== '';
    const hasAddress = modalidad === 'presencial' ? direccionServicio.trim() !== '' : true;
    const hasDates = diasSeleccionados.length > 0 || fechasSeleccionadas.length > 0;
    const hasDescription = descripcionServicio.trim() !== '';
    const hasIcon = iconoSeleccionado !== null;

    return hasName && hasModalidad && hasAddress && hasDates && hasDescription && hasIcon;
  };

  const agregarHorario = () => {
    if (desde && hasta) {
      setHorarios([...horarios, { desde, hasta }]);
      setDesde("");
      setHasta("");
    }
  };

  const eliminarHorario = (index) => {
    const nuevosHorarios = horarios.filter((_, i) => i !== index);
    setHorarios(nuevosHorarios);
  };

  const limpiarFormulario = () => {
    setNombreServicio("");
    setDescripcionServicio("");
    setDireccionServicio("");
    setModalidad("");
    setIconoSeleccionado(null);
    setDiasSeleccionados([]);
    setFechasSeleccionadas([]);
    setHorarios([]);
  };

  const handleDiaChange = (dia) => {
    setDiasSeleccionados((prevDias) =>
      prevDias.includes(dia) ? prevDias.filter((d) => d !== dia) : [...prevDias, dia]
    );
  };

  const handleFechaChange = (fecha) => {
    setFechasSeleccionadas((prevFechas) =>
      prevFechas.includes(fecha) ? prevFechas.filter((f) => f !== fecha) : [...prevFechas, fecha]
    );
  };

  const handleCalendarChange = (date) => {
    setFechaSeleccionada(date);
    setFechasSeleccionadas((prevFechas) =>
      prevFechas.includes(date.toDateString()) ? prevFechas.filter((f) => f !== date.toDateString()) : [...prevFechas, date.toDateString()]
    );
  };

  return (
    <>
      <NavBarSimple />
      <div className="contenedor-admin">
        <div className="contenedor-servicios-admin">
          <div className="contenedor-desplegable">
            <div className="desplegable-grid-servicios-admin" onClick={toggleServicios}>
              <h2>Servicios</h2>
              <img src={mostrarTodos ? FlechaArriba : FlechaAbajo} alt="Flecha" className="icono-flecha" />
            </div>
          </div>

          <div className="grid-servicios-admin">
            {servicios.slice(0, mostrarTodos ? servicios.length : 3).map((servicio) => (
              <TarjetaServicio
                key={servicio.id}
                titulo={servicio.titulo}
                textoBtnA={servicio.textoBtnA}
                textoBtnB={servicio.textoBtnB}
                onClickBtnA={() => editarServicio(servicio)}
                onClickBtnB={() => eliminarServicio(servicio.id)}
              >
                <img
                  src={servicio.icono}
                  alt={servicio.titulo}
                  className={`icono-opcion ${servicio.iconoClassName}`}
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

            {modalidad === "presencial" && (
              <div className='campo-formulario-servicio'>
                <label className='label-formulario-servicio'><h3>Dirección:</h3></label>
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
              <label className='label-formulario-servicio'><h3>Icono:</h3></label>
              <div className='icono-seleccionado' onClick={() => setMostrarSelectorIcono(true)}>
                {iconoSeleccionado ? (
                  <img src={iconoSeleccionado.src} alt="Icono seleccionado" className={`icono-opcion ${iconoSeleccionado.className}`} />
                ) : (
                  <img src={IconoCuadroVacio} alt="Icono vacío" className="icono-cuadro-vacio"/>
                )}
              </div>
            </div>

            {mostrarSelectorIcono && (
              <div className="selector-icono-overlay">
                <div className="selector-icono-container">
                  <span className='close-selector-icono' onClick={() => setMostrarSelectorIcono(false)}>&times;</span>
                  {iconos.map((icono, index) => (
                    <img
                      key={index}
                      src={icono.src}
                      alt={`Icono ${index}`}
                      className={`icono-opcion ${icono.className}`}
                      onClick={() => {
                        setIconoSeleccionado(icono);
                        setMostrarSelectorIcono(false);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </form>
          <div className="fechas-horas-servicio">
            <h3>Días disponibles:</h3>
            <div className="contenedor-fechas">
              <fieldset>
                <div className="button-group">
                  <input type="checkbox" id="lunes" name="dias" checked={diasSeleccionados.includes("lunes")} onChange={() => handleDiaChange("lunes")} />
                  <label htmlFor="lunes">Lunes</label>
                </div>
                <div className="button-group">
                  <input type="checkbox" id="martes" name="dias" checked={diasSeleccionados.includes("martes")} onChange={() => handleDiaChange("martes")} />
                  <label htmlFor="martes">Martes</label>
                </div>
                <div className="button-group">
                  <input type="checkbox" id="miercoles" name="dias" checked={diasSeleccionados.includes("miercoles")} onChange={() => handleDiaChange("miercoles")} />
                  <label htmlFor="miercoles">Miércoles</label>
                </div>
                <div className="button-group">
                  <input type="checkbox" id="jueves" name="dias" checked={diasSeleccionados.includes("jueves")} onChange={() => handleDiaChange("jueves")} />
                  <label htmlFor="jueves">Jueves</label>
                </div>
                <div className="button-group">
                  <input type="checkbox" id="viernes" name="dias" checked={diasSeleccionados.includes("viernes")} onChange={() => handleDiaChange("viernes")} />
                  <label htmlFor="viernes">Viernes</label>
                </div>
                <div className="button-group">
                  <input type="checkbox" id="sabado" name="dias" checked={diasSeleccionados.includes("sabado")} onChange={() => handleDiaChange("sabado")} />
                  <label htmlFor="sabado">Sábado</label>
                </div>
                <div className="button-group">
                  <input type="checkbox" id="domingo" name="dias" checked={diasSeleccionados.includes("domingo")} onChange={() => handleDiaChange("domingo")} />
                  <label htmlFor="domingo">Domingo</label>
                </div>
              </fieldset>
            </div>

            <div className="contenedor-horarios">
              <h3>Horarios:</h3>
              <div className="formulario-horarios">
                <div className='campo-horario'>
                  <p>Desde:</p>
                  <input
                    type="time"
                    className="input-horario"
                    value={desde}
                    onChange={(e) => setDesde(e.target.value)}
                  />
                </div>
                <div className='campo-horario'>
                  <p>Hasta:</p>
                  <input
                    type="time"
                    className="input-horario"
                    value={hasta}
                    onChange={(e) => setHasta(e.target.value)}
                  />
                </div>
                <Boton
                  text="Agregar"
                  className="boton-blanco"
                  style={{ width: '100px' }}
                  onClick={agregarHorario}
                />
              </div>
              <p className="ver-horarios" onClick={() => setMostrarHorarios(true)}>Ver horarios ({horarios.length})</p>
            </div>

            <div className="fechas-horas-servicio">
              <h3>Fechas especiales:</h3>
              <div className="calendario-especial-admin">
                <Calendar
                  onChange={handleCalendarChange}
                  value={fechaSeleccionada}
                />
              </div>

              <div className="contenedor-horarios">
                <h3>Horarios para fechas especiales:</h3>
                <div className="formulario-horarios">
                  <div className='campo-horario'>
                    <p>Desde:</p>
                    <input
                      type="time"
                      className="input-horario"
                      value={desde}
                      onChange={(e) => setDesde(e.target.value)}
                    />
                  </div>
                  <div className='campo-horario'>
                    <p>Hasta:</p>
                    <input
                      type="time"
                      className="input-horario"
                      value={hasta}
                      onChange={(e) => setHasta(e.target.value)}
                    />
                  </div>
                  <Boton
                    text="Agregar"
                    className="boton-blanco"
                    style={{ width: '100px' }}
                    onClick={agregarHorario}
                  />
                </div>
                <p className="ver-horarios" onClick={() => setMostrarHorarios(true)}>Ver horarios ({horarios.length})</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contenedor-boton-accion">
          <Boton
            text={servicioEditando ? "Editar Servicio" : "Guardar Servicio"}
            onClick={(e) => {
              e.preventDefault();
              if (servicioEditando) {
                actualizarServicio();
              } else {
                guardarServicio();
              }
            }}
            className={`${servicioEditando ? 'boton-blanco' : 'boton-violeta'} ${!isFormValid() ? 'boton-disabled' : ''}`}
            disabled={!isFormValid()}
          />
        </div>
      </div>
      {mostrarHorarios && (
        <div className="calendar-overlay">
          <div className="calendar-container">
            <span className='close-selector-icono' onClick={() => setMostrarHorarios(false)}>&times;</span>
            <div className="lista-fechas">
              {horarios.map((horario, index) => (
                <div key={index} className="fecha-item">
                  {horario.desde} - {horario.hasta}
                  <img
                    src={IconoEliminar}
                    alt="Eliminar"
                    className="icono-eliminar"
                    onClick={() => eliminarHorario(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <footer className='footer-simple'>
        <p>© 2024 Shift Manager System. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Admin;