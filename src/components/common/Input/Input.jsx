import React from 'react'

const Input = ({type, name, value, onChange, placeholder, minLength, required}) => {
  return (
    <input type={type} value={value} name={name} onChange={onChange} placeholder={placeholder} minLength={minLength} required={required}/>
  )
}

export default Input