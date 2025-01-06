import NavbarSecretario from "../../components/navbarSecretario/navbarSecretario";
import Footer from "../../components/footer/footer";
import "./secretario.css";
import flechaAbajo from "../../assets/svg/flecha-abajo.svg";
import salud from "../../assets/svg/salud.svg";
import { useState, useRef, useEffect } from "react";

const Secretario = () => {
  const [expandir, setExpandir] = useState(true);
  const contenedorRef = useRef(null); // Referencia al contenedor

  const toggleExpandir = () => {
    setExpandir((prevState) => !prevState);
  };

  useEffect(() => {
    if (contenedorRef.current) {
      if (expandir) {
        contenedorRef.current.style.height = `${contenedorRef.current.scrollHeight}px`; // Altura completa
      } else {
        contenedorRef.current.style.height = "0px"; // Altura cerrada
      }
    }
  }, [expandir]);

  return (
    <>
      <NavbarSecretario />
      <main className="contenedorSecretario">
        <div className="tituloSecretario">
          <h2>Próximos Turnos</h2>
          <img
            src={flechaAbajo}
            className={`sumaSecretario ${expandir ? "rotar" : ""}`}
            alt="Agregar servicio"
            onClick={toggleExpandir}
          />
        </div>
        <hr />

        <section
          className="contenedorTurnosSecretario"
          ref={contenedorRef} // Asocia la referencia
        >
          <article className="TurnoCompleto">
            <div className="turnoHeader">
              <div className="turnoTitulo">
                <h4>Charla Programación</h4>
                <p>Fecha: 12/12/2021</p>
              </div>
              <img src={salud} alt="" />
            </div>
            <div className="turnoCuerpo">
              <div>
                <p>Marcelo Gallardo</p>
                <p>12:00hs</p>
                <p>Av. Libertador 834</p>
              </div>
              <div className="opcionesTurno">
                <button>Editar</button>
                <button>Cancelar</button>
              </div>
            </div>
          </article>

          <article className="TurnoCompleto">
            <div className="turnoHeader">
              <div className="turnoTitulo">
                <h4>Charla Programación</h4>
                <p>Fecha: 12/12/2021</p>
              </div>
              <img src={salud} alt="" />
            </div>
            <div className="turnoCuerpo">
              <div>
                <p>Marcelo Gallardo</p>
                <p>12:00hs</p>
                <p>Av. Libertador 834</p>
              </div>
              <div className="opcionesTurno">
                <button>Editar</button>
                <button>Cancelar</button>
              </div>
            </div>
          </article>

          <article className="TurnoCompleto">
            <div className="turnoHeader">
              <div className="turnoTitulo">
                <h4>Charla Programación</h4>
                <p>Fecha: 12/12/2021</p>
              </div>
              <img src={salud} alt="" />
            </div>
            <div className="turnoCuerpo">
              <div>
                <p>Marcelo Gallardo</p>
                <p>12:00hs</p>
                <p>Av. Libertador 834</p>
              </div>
              <div className="opcionesTurno">
                <button>Editar</button>
                <button>Cancelar</button>
              </div>
            </div>
          </article>
        </section>

        <section>
          <div className="tituloSecretario">
            <h2>Turnos Finalizados</h2>
          </div>
          <hr />
          <input
            type="search"
            placeholder="Buscar: Nombre Paciente"
            className="buscadorInscripto"
          />

          <div className="contenedorTurnosPasados">
            <article className="TurnoCompleto">
              <div className="turnoHeader">
                <div className="turnoTitulo">
                  <h4>Charla Programación</h4>
                  <p>Fecha: 12/12/2021</p>
                </div>
                <img src={salud} alt="" />
              </div>
              <div className="turnoCuerpo">
                <div>
                  <p>Marcelo Gallardo</p>
                  <p>12:00hs</p>
                  <p>Av. Libertador 834</p>
                </div>
                <div className="opcionesTurno">
                  <button>Editar</button>
                  <button>Cancelar</button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Secretario;
