import React from 'react'

const Input = ({ type, name, value, onChange, placeholder, minLength, required, id }) => {
  return (
    <input type={type} value={value} name={name} onChange={onChange} placeholder={placeholder} minLength={minLength} required={required} id={id} />
  )
}

export default Input