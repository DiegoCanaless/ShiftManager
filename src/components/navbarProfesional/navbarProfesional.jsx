
import logo from '../../assets/img/logopngtalvez.png'
import "./navbarProfesional.css"

const navbarProfesional = () => {
  return (
    <>
        <div className='navbarProfesional'>
            <div className="navbarProfesionalEnlaces">
                <div><span>Servicios</span></div>
                <div><span>Calendario</span></div>
            </div>

            <div className='contenedorLogoProfesional'>
                <img src={logo} alt="" />
                <span>Shift Manager</span>
            </div>
        </div>
    </>
  )
}

export default navbarProfesional
