import React, { useState } from 'react'
import './BotonRecbar.css'

const BotonRecbar = ({ titulo }) => {
  const fondo = titulo.toLowerCase() === "todos" ? "black" : "rgb(230, 230, 230)"
  const letras = titulo.toLowerCase() === "todos" ? "white" : "black"
  
  return (
    <>
      <button  style={{ backgroundColor: fondo, color: letras }} >{titulo}</button>
    </>
  )
}

export default BotonRecbar