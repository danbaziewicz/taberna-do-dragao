import React from 'react'

const Input = ({ type, name, value, onChange, placeholder, minLength, required, style, id }) => {
  return (
    <input type={type} value={value} name={name} onChange={onChange} style={style} placeholder={placeholder} minLength={minLength} required={required} id={id} />
  )
}

export default Input