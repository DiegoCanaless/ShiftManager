import React from 'react'
import './input.css'

const input = ({type, placeholder, className, ...props}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={ `input ${className}`}
      {...props}
    />
  );
}

export default input;