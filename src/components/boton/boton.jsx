import React from 'react'
import './boton.css'

const boton = ({text, onClick, className, children}) => {
  return (
    <button className={`boton ${className}`} onClick={onClick}>
      {text}
      {children}
    </button>
  );
}

export default boton;