import "./superAdmin.css";
import NavbarSuperAdmin from "../../components/navbarSecretario/navbarSecretario";
import Footer from "../../components/footer/footer";
import suma from "../../assets/svg/suma.svg";
import salud from "../../assets/svg/salud.svg";
import { useState } from "react";

const SuperAdmin = () => {
  const [crearServicio, setCrearServicio] = useState(false);
  const [editarServicio, setEditarServicio] = useState(null);
  const [servicios, setServicios] = useState([]);
  const [nuevoServicio, setNuevoServicio] = useState({
    nombre: "",
    profesionales: [],
    icono: null,
  });

  const toggleModal = () => {
    setCrearServicio(!crearServicio);
    setNuevoServicio({ nombre: "", profesionales: [], icono: null }); // Reinicia el formulario
  };

  const toggleEditModal = (index) => {
    if (index !== null) {
      setEditarServicio({ ...servicios[index], index });
    } else {
      setEditarServicio(null);
    }
  };

  const handleInputChange = (e, isEditing = false) => {
    const { name, value, type, checked } = e.target;
    const targetServicio = isEditing ? editarServicio : nuevoServicio;

    if (type === "checkbox") {
      const profesionales = checked
        ? [...targetServicio.profesionales, value]
        : targetServicio.profesionales.filter((pro) => pro !== value);
      isEditing
        ? setEditarServicio({ ...targetServicio, profesionales })
        : setNuevoServicio({ ...targetServicio, profesionales });
    } else if (type === "file") {
      const icono = e.target.files[0];
      isEditing
        ? setEditarServicio({ ...targetServicio, icono })
        : setNuevoServicio({ ...targetServicio, icono });
    } else {
      isEditing
        ? setEditarServicio({ ...targetServicio, [name]: value })
        : setNuevoServicio({ ...targetServicio, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setServicios((prev) => [...prev, nuevoServicio]); // Agrega el nuevo servicio
    toggleModal(); // Cierra el modal
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedServicios = servicios.map((servicio, index) =>
      index === editarServicio.index ? editarServicio : servicio
    );
    setServicios(updatedServicios);
    toggleEditModal(null); // Cierra el modal de edición
  };

  return (
    <>
      <NavbarSuperAdmin />
      <main className="contenedorSuperAdmin">
        <div className="tituloSuperAdmin">
          <h2>Servicios Creados</h2>
          <img
            src={suma}
            className="sumaSuperAdmin"
            alt="Agregar servicio"
            onClick={toggleModal}
            id="crearServicio"
          />
        </div>
        <hr />
        <section className="contenedorServicios">
          {servicios.map((servicio, index) => (
            <article key={index} className="servicioContenedor">
              <div className="contenedorTituloServicio">
                <h4>{servicio.nombre}</h4>
                {servicio.icono ? (
                  <img
                    src={URL.createObjectURL(servicio.icono)}
                    alt="Icono del servicio"
                    className="iconoServicio"
                  />
                ) : (
                  <img src={salud} alt="Icono por defecto" className="iconoServicio" />
                )}
              </div>
              <div className="opcionesServicio">
                <button onClick={() => toggleEditModal(index)}>Administrar</button>
                <button
                  onClick={() =>
                    setServicios((prev) =>
                      prev.filter((_, i) => i !== index)
                    )
                  }
                >
                  Eliminar
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Modal de Crear Servicio */}
      {crearServicio && (
        <div className="modalOverlay" onClick={toggleModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <h3>Agregar Servicio</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Nombre del servicio:
                <input
                  type="text"
                  name="nombre"
                  value={nuevoServicio.nombre}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Ej. Consulta Médica"
                />
              </label>
              <label>
                Profesionales:
                <div>
                  {[
                    "Luquita Rodriguez",
                    "German Beder",
                    "Robert de Niro",
                    "Robert Galatti",
                    "Alfre Montes de Oca",
                  ].map((profesional) => (
                    <label key={profesional}>
                      <input
                        type="checkbox"
                        value={profesional}
                        onChange={(e) => handleInputChange(e)}
                      />
                      {profesional}
                    </label>
                  ))}
                </div>
              </label>
              <label>
                Icono:
                <input
                  type="file"
                  name="icono"
                  accept="image/*"
                  onChange={(e) => handleInputChange(e)}
                />
              </label>
              <div className="modalActions">
                <button type="button" onClick={toggleModal}>
                  Cancelar
                </button>
                <button type="submit">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Editar Servicio */}
      {editarServicio && (
        <div className="modalOverlay" onClick={() => toggleEditModal(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <h3>Editar Servicio</h3>
            <form onSubmit={handleEditSubmit}>
              <label>
                Nombre del servicio:
                <input
                  type="text"
                  name="nombre"
                  value={editarServicio.nombre}
                  onChange={(e) => handleInputChange(e, true)}
                />
              </label>
              <label>
                Profesionales:
                <div>
                  {[
                    "Luquita Rodriguez",
                    "German Beder",
                    "Robert de Niro",
                    "Robert Galatti",
                    "Alfre Montes de Oca",
                  ].map((profesional) => (
                    <label key={profesional}>
                      <input
                        type="checkbox"
                        value={profesional}
                        checked={editarServicio.profesionales.includes(profesional)}
                        onChange={(e) => handleInputChange(e, true)}
                      />
                      {profesional}
                    </label>
                  ))}
                </div>
              </label>
              <label>
                Icono:
                <input
                  type="file"
                  name="icono"
                  accept="image/*"
                  onChange={(e) => handleInputChange(e, true)}
                />
              </label>
              <div className="modalActions">
                <button type="button" onClick={() => toggleEditModal(null)}>
                  Cancelar
                </button>
                <button type="submit">Guardar Cambios</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default SuperAdmin;
