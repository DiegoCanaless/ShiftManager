import React from 'react'
import './TarjetaServicio.css'

const TarjetaServicio = ({titulo, children, textoBtnA, textoBtnB, onClickBtnA, onClickBtnB}) => {
  return (
    <>
      <div className='contenedor-servicio'>
        <div className='header-servicio'>
          <h3>{titulo}</h3>
          {children}
        </div>
        <div className='contenedor-botones'>
          <button onClick={onClickBtnA}>{textoBtnA}</button>
          <button onClick={onClickBtnB}>{textoBtnB}</button>
        </div>
      </div>
    </>
  )
}

export default TarjetaServicio;
