import  { useState } from 'react';
import NavbarUsuario from '../../components/navbarusuario/NavbarUsuario';
import './inicioUsuario.css';

const InicioUsuario = () => {
  // Estado para controlar la visibilidad de las tarjetas y el icono de la flecha
  const [pendientesVisible, setPendientesVisible] = useState(true);
  const [anterioresVisible, setAnterioresVisible] = useState(true);
  const [turnosPendientes, setTurnosPendientes] = useState([
    {
      id: 1,
      titulo: 'Consulta Médica',
      doctor: 'Dr. Ramírez Guenza',
      fecha: '29-11-24',
      horario: '16:30hs - 17:30hs',
      direccion: 'Av. Libertador 842',
    },
    {
      id: 1,
      titulo: 'Consulta Médica',
      doctor: 'Dr. Ramírez Guenza',
      fecha: '29-11-24',
      horario: '16:30hs - 17:30hs',
      direccion: 'Av. Libertador 842',
    },
    {
      id: 1,
      titulo: 'Consulta Médica',
      doctor: 'Dr. Ramírez Guenza',
      fecha: '29-11-24',
      horario: '16:30hs - 17:30hs',
      direccion: 'Av. Libertador 842',
    },
    {
      id: 1,
      titulo: 'Consulta Médica',
      doctor: 'Dr. Ramírez Guenza',
      fecha: '29-11-24',
      horario: '16:30hs - 17:30hs',
      direccion: 'Av. Libertador 842',
    },
    {
      id: 1,
      titulo: 'Consulta Médica',
      doctor: 'Dr. Ramírez Guenza',
      fecha: '29-11-24',
      horario: '16:30hs - 17:30hs',
      direccion: 'Av. Libertador 842',
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [turnoAEliminar, setTurnoAEliminar] = useState(null);

  // Función para alternar el estado de las secciones
  const togglePendientes = () => {
    setPendientesVisible(!pendientesVisible);
  };

  const toggleAnteriores = () => {
    setAnterioresVisible(!anterioresVisible);
  };

  // Función para mostrar el modal de confirmación
  const handleCancelarClick = (id) => {
    setTurnoAEliminar(id);
    setModalVisible(true);
  };

  // Función para confirmar la eliminación del turno
  const confirmarEliminacion = () => {
    setTurnosPendientes(turnosPendientes.filter((turno) => turno.id !== turnoAEliminar));
    setModalVisible(false);
    setTurnoAEliminar(null);
  };

  // Función para cerrar el modal sin eliminar
  const cerrarModal = () => {
    setModalVisible(false);
    setTurnoAEliminar(null);
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
          <div className={`turnos-content ${pendientesVisible ? 'visible' : ''}`} style={{ display: 'flex', overflowX: 'auto', gap: '10px' }}>
            {turnosPendientes.map((turno) => (
              <div key={turno.id} className="card-turno">
                <h2 className="titulo-consulta">{turno.titulo}</h2>
                <p className="card-datos">{turno.doctor}</p>
                <p className="card-datos">{turno.fecha}</p>
                <p className="card-datos">{turno.horario}</p>
                <p className="card-datos">{turno.direccion}</p>
                <div className="btns-card">
                  <button className="btn-card">Editar</button>
                  <button className="btn-card" onClick={() => handleCancelarClick(turno.id)}>Cancelar</button>
                </div>
              </div>
            ))}
          </div>
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
          <div className={`turnos-content ${anterioresVisible ? 'visible' : ''}`} style={{ display: 'flex', overflowX: 'auto', gap: '10px' }}>
            <div className="card-turno-anterior">
              <h2 className="titulo-consulta">Consulta Médica</h2>
              <p className="card-datos">Dr. Ramírez Guenza</p>
              <p className="card-datos">29-11-24</p>
              <p className="card-datos">16:30hs - 17:30hs</p>
              <p className="card-datos">Av. Libertador 842</p>
            </div>
          </div>
          <div className="linea-separadora"></div>
        </div>
      </div>

      {/* Modal de confirmación */}
      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <p>¿Desea cancelar el turno?</p>
            <div className="modal-buttons">
              <button className="btn-card" onClick={confirmarEliminacion}>Sí</button>
              <button className="btn-card" onClick={cerrarModal}>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InicioUsuario;
