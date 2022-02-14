import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { useNavigate } from 'react-router'


const MyPokemonList = () => {
  let data =  JSON.parse(localStorage.getItem("pokemon") || "[]");
  const[allPokemons, setAllPokemons] = useState([])
  const navigate = useNavigate();

 const getAllPokemons = async () => {

   function createPokemonObject(results)  {
     results.forEach( async pokemon => {
       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
       let data = null
       
       if (res){data =  await res.json()}
       setAllPokemons( currentList => [...currentList, data])
       await allPokemons.sort((a, b) => a.id - b.id)
     })
     
   }
   
   createPokemonObject(data)
 }



useEffect(() => {
 getAllPokemons()
}, [])



return(
  <div className="pokemon-container">
  <div className="all-container">
    {allPokemons ? allPokemons.map( (pokemonStats, index) => 
      <PokemonCard
        key={index}
        id={pokemonStats.id}
        image={pokemonStats.sprites.other.dream_world.front_default}
        name={pokemonStats.name}
        type={pokemonStats.types}
        nickname={pokemonStats.nickname}
        canRelease={true}
      />): "U dont have any pokemon, please catch some!"}
    
  </div>
    
</div>
)

}


export default MyPokemonList