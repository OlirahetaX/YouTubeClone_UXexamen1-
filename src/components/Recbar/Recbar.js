import React from 'react'
import './Recbar.css'
import BotonRecbar from './Botones/BotonRecbar'

const Recbar = () => {
  return (
    <nav className="recbar">
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
      <BotonRecbar titulo="Gym"/>
      <BotonRecbar titulo="Deportes"/>
    </nav>
  )
}

export default Recbar
