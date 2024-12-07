import React from 'react'
import Navbar from '../../components/navbarIndex/navbarIndex.jsx'
import Footer from '../../components/footer/footer.jsx'
import logo from "../../assets/logopngtalvez.png";
import './home.css';

export const home = () => {
	return (
		<>
				<Navbar></Navbar>
				<div className='contInicio'>
					<div className='contInicioHome'>
						<div className='logoInicioHome'>
							<img src={logo} alt="" className='logoimg'/>      
							<p >Shift Manager</p>
						</div>
					</div>
					<h1 className='tituloHome'>¡Reserva tu turno en segundos!</h1>
					<i class="bi bi-arrow-down-short"></i>
				</div>
				<Footer></Footer>
		</>
	)
}

export default home
