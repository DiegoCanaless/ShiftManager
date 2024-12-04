import './navbarIndex.css';
import logo from "../../assets/logo.jpeg";
import iconMenu from "../../assets/svg/menu.svg";

const abrirMenu = () => {
  
}

const navbarIndex = () => {
  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <img src={logo} alt="" />      
          <p>Shift Manager</p>
        </div>
        <img src={iconMenu} alt="" onClick={abrirMenu} />
      </div>
    </>
  )
}

export default navbarIndex
