import React from 'react'
import './Boton.css'

const Boton = ({text, onClick, className, children, style}) => {
  return (
    <button className={`boton ${className}`} onClick={onClick} style={style}>
      {text}
      {children}
    </button>
  );
}

export default Boton;