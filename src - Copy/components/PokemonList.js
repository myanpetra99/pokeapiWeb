import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = () => {
    const[allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=40')
 
   const getAllPokemons = async () => {
     const res = await fetch(loadMore)
     const data = await res.json()
 
     setLoadMore(data.next)
     function createPokemonObject(results)  {
       results.forEach( async pokemon => {
         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
         let data = null
         if (res){data =  await res.json()}
         setAllPokemons( currentList => [...currentList, data])
         await allPokemons.sort((a, b) => a.id - b.id)
       })
       
     }
     
     createPokemonObject(data.results)
   }
 
  useEffect(() => {
   getAllPokemons()
  }, [])

  return(
    <div className="pokemon-container">
    <div className="all-container">
      {allPokemons? allPokemons.map( (pokemonStats, index) => 
        <PokemonCard
          key={index}
          id={pokemonStats.id}
          image={pokemonStats.sprites.other.dream_world.front_default}
          name={pokemonStats.name}
          type={pokemonStats.types}
        />): "U dont have any pokemon, please catch some!"}
      
    </div>
      <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
  </div>
  )
 
}

export default PokemonList