import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState({})

  const { id } = useParams()

  const getPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    setPokemon(data)


    
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div className="pokemon-details">
        <h1>gg</h1>
    </div>
  )
}

export default PokemonDetails
