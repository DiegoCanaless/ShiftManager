import React from 'react'
import './Boton.css'

const Boton = ({text, onClick, className, children}) => {
  return (
    <button className={`boton ${className}`} onClick={onClick}>
      {text}
      {children}
    </button>
  );
}

export default Boton;