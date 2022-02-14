import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProgressBar } from 'react-bootstrap'

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
    setCardClass(data.types+ ' pokemon-detail ')
  }

  

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div className={cardClass}>
      <div className='header'>
      <h1>{pokemonName}</h1>
      <img src={pokemonImage} alt={pokemonName} />
      <ul className={pokemonTypes}>
        {pokemonTypes.map(({ type }) => (
          <li key={type.name} className={type.name + ' mini-type'}>{type.name}</li>
        ))}
      </ul>
      </div>
      <h2>Abillities</h2>
      <ul>
        {pokemonAbillities.map(({ ability }) => (
          <li key={ability.name}>{ability.name}</li>
        ))}
      </ul>
     
      <h2>Stats</h2>
      <ul>
        {pokemonStats.map(({ base_stat, stat }) => (
          <li key={stat.name}>
            {stat.name} : <ProgressBar now={base_stat} />
          </li>
        ))}
      </ul>
     
      <h2>Weight</h2>
      <p>{pokemonWeight}</p>
      <h2>Height</h2>
      <p>{pokemonHeight}</p>
      <button>Catch</button>
    </div>
  )
}

export default PokemonDetails
