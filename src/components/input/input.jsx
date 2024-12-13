import React from 'react'

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