import React from 'react'
import Navbar from '../../components/navbarIndex/navbarIndex.jsx'
import Footer from '../../components/footer/footer.jsx'
import logo from "../../assets/logopngtalvez.png";
import iconClinic from "../../assets/svg/clinic.svg"
import iconPresentacion from "../../assets/svg/presentaciones.svg"
import iconClase from "../../assets/svg/clases.svg"
import iconPsicologo from "../../assets/svg/psicologo.svg"
import iconBoxeo from "../../assets/svg/boxeo.svg"
import iconCancha from "../../assets/svg/cancha.svg"
import imgSobreNosotros from "../../assets/img/sobrenosotros.jpg"
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
					<p className="textoHome">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore facilis, commodi corporis perferendis fugit voluptates doloribus quas molestiae natus tenetur?</p>
					<i class="bi bi-arrow-down-short"></i>
				</div>
				<div className='fondoGradiente'>
					<h2 className="tituloService">Servicios</h2>
					<div className='contenedorServices'>
						<a href="">
							<div className="service">
								<img src={iconClinic} alt="" />
								<h3>Consultas Medicas</h3>
							</div>
						</a>
						<a href="">
							<div className="service">
								<img src={iconPresentacion} alt="" />
								<h3>Conferencias</h3>
							</div>
						</a>
						<a href="">
							<div className="service">
								<img src={iconClase} alt="" />
								<h3>Clases de Consulta</h3>
							</div>
						</a>
						<a href="">
							<div className="service">
								<img src={iconPsicologo} alt="" />
								<h3>Psicologo</h3>
							</div>
						</a>
						<a href="">
							<div className="service">
								<img src={iconBoxeo} alt="" />
								<h3>Clases de Boxeo</h3>
							</div>
						</a>
						<a href="">
							<div className="service">
								<img src={iconCancha} alt="" />
								<h3>Canchas</h3>
							</div>
						</a>
					</div>

					<h2 className="tituloSobreNosotros">Sobre Nosotros</h2>
					<div className='contSobreNosotros'>
						<p>Loren Insuma es simplemente el texto de relleno de las imprentas y archivos de texto. Loren Insuma ha sido el texto de relleno estándar de las industrias desde el año 1500
						Loren Insuma ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
						<img src={imgSobreNosotros} alt="" />
					</div>


					<h2 className='tituloSobreNosotros'>Contactanos</h2>
					<p className='textoContactanos'>Envianos tu consulta y nos comunicaremos a la brevedad</p>

					<form action="" className='formularioIndex'>
						<label><input type="text" placeholder='Nombre' name="" /></label>

						<label><input type="email" placeholder='Correo' name="" /></label>

						<label><textarea name="" placeholder='Ingresa tu mensaje...'></textarea></label>

						<button type="submit">Enviar</button>
					</form>
					
					




				</div>
				
				
				<Footer></Footer>
		</>
	)
}

export default home
