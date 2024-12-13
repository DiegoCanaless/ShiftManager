import React from 'react'
import './Input.css'

const Input = ({type, placeholder, className, ...props}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={ `input ${className}`}
      {...props}
    />
  );
}

export default Input;