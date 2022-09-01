import React from 'react'

const Button = ({texto, onClick, style, icon}) => {
  return (
    <button onClick={onClick} className={style}>{texto}{icon}</button>
  )
}

export default Button