import React from 'react'

const Button = ({ texto, onClick, icon, style }) => {
  return (
    <button style={style} onClick={onClick}>{texto}{icon}</button>
  )
}

export default Button