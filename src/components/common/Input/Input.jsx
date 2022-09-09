import React from 'react'

const Input = ({type, name, value, onChange, placeholder, minLength, required, style, id}) => {
  return (
    <input type={type} value={value} name={name} onChange={onChange} placeholder={placeholder} minLength={minLength} required={required} className={style} id={id}/>
  )
}

export default Input