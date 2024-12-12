import React, { useEffect } from 'react';
import Navbar from '../../components/navbarIndex/navbarIndex.jsx';
import Footer from '../../components/footer/footer.jsx';
import logo from "../../assets/img/logopngtalvez.png";
import iconClinic from "../../assets/svg/clinic.svg";
import iconPresentacion from "../../assets/svg/presentaciones.svg";
import iconClase from "../../assets/svg/clases.svg";
import iconPsicologo from "../../assets/svg/psicologo.svg";
import iconBoxeo from "../../assets/svg/boxeo.svg";
import iconCancha from "../../assets/svg/cancha.svg";
import imgSobreNosotros from "../../assets/img/sobrenosotros.jpg";
import './home.css';

export const home = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated');
          
          // Agregar animaciones dependiendo del target
          if (entry.target.classList.contains('contenedorServices')) {
            entry.target.classList.add('animate__backInLeft');
          } else if (entry.target.classList.contains('formularioIndex')) {
            entry.target.classList.add('animate__bounceInRight');
          } else {
            entry.target.classList.add('animate__backInLeft');
          }

          // Eliminar la clase hidden cuando el elemento se vuelve visible
          entry.target.classList.remove('hidden');
        }
      });
    }, { threshold: 0.5 });

    const servicesContainer = document.querySelector('.contenedorServices');
    const sobreNosotrosElements = document.querySelectorAll('.contSobreNosotros p, .contSobreNosotros img');
    const contactoForm = document.querySelector('.formularioIndex');

    if (servicesContainer) {
      observer.observe(servicesContainer);
    }

    sobreNosotrosElements.forEach(element => {
      observer.observe(element);
    });

    if (contactoForm) {
      observer.observe(contactoForm);
    }

    return () => {
      if (servicesContainer) {
        observer.unobserve(servicesContainer);
      }

      sobreNosotrosElements.forEach(element => {
        observer.unobserve(element);
      });

      if (contactoForm) {
        observer.unobserve(contactoForm);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className='contInicio'>
        <div className='contInicioHome'>
          <div className='logoInicioHome'>
            <img src={logo} alt="" className='logoimg' />
            <p>Shift Manager</p>
          </div>
        </div>
        <h1 className='tituloHome'>¡Reserva tu turno en segundos!</h1>
        <p className="textoHome">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore facilis, commodi corporis perferendis fugit voluptates doloribus quas molestiae natus tenetur?</p>
        <i className="bi bi-arrow-down-short"></i>
      </div>
      <div className='fondoGradiente'>
        <h2 className="tituloService">Servicios</h2>
        <div className='contenedorServices hidden'>
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
          <p className='hidden'>Loren Insuma es simplemente el texto de relleno de las imprentas y archivos de texto. Loren Insuma ha sido el texto de relleno estándar de las industrias desde el año 1500 Loren Insuma ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
          <img src={imgSobreNosotros} className='hidden' alt="" />
        </div>

        <h2 className='tituloSobreNosotros'>Contactanos</h2>
        <p className='textoContactanos'>Envianos tu consulta y nos comunicaremos a la brevedad</p>

        <form action="" className='formularioIndex hidden'>
          <label><input type="text" placeholder='Nombre' name="" /></label>
          <label><input type="email" placeholder='Correo' name="" /></label>
          <label><textarea name="" placeholder='Ingresa tu mensaje...'></textarea></label>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default home;
