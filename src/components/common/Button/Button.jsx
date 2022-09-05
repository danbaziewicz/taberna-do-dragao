import React from 'react'

const Button = ({ texto, onClick, icon }) => {
  return (
    <button onClick={onClick}>{texto}{icon}</button>
  )
}

export default Button