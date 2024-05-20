import React from 'react'
import './Recbar.css'
import BotonRecbar from './Botones/BotonRecbar'

const Recbar = () => {
  return (
    <nav>
      <BotonRecbar titulo="Todos"/>
      <BotonRecbar titulo="Musica"/>
      <BotonRecbar titulo="Mixes"/>
      <BotonRecbar titulo="Gorillaz"/>
      <BotonRecbar titulo="Pop rock"/>
      <BotonRecbar titulo="Teen pop"/>
      <BotonRecbar titulo="Ahorros"/>
      <BotonRecbar titulo="Pop japones"/>
      <BotonRecbar titulo="Drake"/>
      <BotonRecbar titulo="Videojuegos"/>
      <BotonRecbar titulo="Misterio"/>
      <BotonRecbar titulo="R&B contemporaneo"/>
    </nav>
  )
}

export default Recbar