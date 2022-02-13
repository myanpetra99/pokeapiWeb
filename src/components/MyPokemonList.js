import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { useNavigate } from 'react-router'


const MyPokemonList = () => {
    const[allPokemons, setAllPokemons] = useState([{}])
    const navigate = useNavigate();
   const getAllPokemons = async () => {
     const data = localStorage.getItem("pokemon")
     function createPokemonObject(results)  {
       results.forEach( async pokemon => {
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
      {allPokemons.length > 1 ? allPokemons.map( (pokemonStats, index) => 
        <PokemonCard
          key={index}
          id={pokemonStats.id}
          image={pokemonStats.sprites.other.dream_world.front_default}
          name={pokemonStats.name}
          type={pokemonStats.types[0].type.name}
        />): <div>
            <h1>U dont have any pokemon, please catch some!</h1>
            <a onClick={()=>navigate('/',{replace: true})}><button>Search for pokemon</button></a> 
        
        </div>}
      
    </div>
  
  </div>
  )
 
}

export default MyPokemonList