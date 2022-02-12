import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {
  const [pokemonName, setPokemonName] = useState('MissingNo')
  const [pokemonAbillities, setPokemonAbillities] = useState([])
  const [pokemonImage, setPokemonImage] = useState('')
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [pokemonStats, setPokemonStats] = useState([])
  const [pokemonWeight, setPokemonWeight] = useState(0)
  const [pokemonHeight, setPokemonHeight] = useState(0)
  const [cardClass, setCardClass] = useState('')

  const { id } = useParams()

  const getPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    setPokemonName(data.name)
    setPokemonAbillities(data.abilities)
    setPokemonImage(data.sprites.front_default)
    setPokemonTypes(data.types)
    setPokemonStats(data.stats)
    setPokemonWeight(data.weight)
    setPokemonHeight(data.height)
    setCardClass(data.types[0].type.name+' pokemon-detail ')
    

  }

  useEffect(() => {
    getPokemon()
  }, [])
  
  return (
    <div className={cardClass}>
      <h1>{pokemonName}</h1>
      <img src={pokemonImage} alt={pokemonName} />
      <h2>Abillities</h2>
      <ul>
        {pokemonAbillities.map(({ ability }) => (

          <li key={ability.name}>{ability.name}</li>
        ))}
      </ul>
      <h2>Types</h2>
      <ul>
        {pokemonTypes.map(({ type }) => (
          <li key={type.name}>{type.name}</li>
        ))}
      </ul>
      <h2>Stats</h2>
      <ul>
        {pokemonStats.map(({ base_stat, stat }) => (
          <li key={stat.name}>{stat.name} : {base_stat}</li>
        ))}
      </ul>
      <h2>Weight</h2>
      <p>{pokemonWeight}</p>
      <h2>Height</h2>
      <p>{pokemonHeight}</p>
    </div>
  )
}

export default PokemonDetails
