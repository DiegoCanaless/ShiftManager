import logo from '../../assets/img/logopngtalvez.png'
import './navbarUsuario.css'

const navbarUsuario = () => {
  return (
    <>
        <div className='navbarProfesional'>
            <div className="navbarProfesionalEnlaces">
                <div><span>Pedir un Turno</span></div>
                <div><span>Mis Turnos</span></div>
                <div><span>Martin P.Disalvo</span></div>
            </div>

            <div className='contenedorLogoUsuario'>
                <img src={logo} alt="" />
                <span>Shift Manager</span>
            </div>
        </div>
    </>
  )
}

export default navbarUsuario
