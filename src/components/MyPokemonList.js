import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { useNavigate,} from 'react-router'
import { Link } from 'react-router-dom'


const MyPokemonList = () => {
  let data =  JSON.parse(localStorage.getItem("pokemon") || "[]");
  const[allPokemons, setAllPokemons] = useState([])
  const navigate = useNavigate();

 const getAllPokemons = async () => {

   function createPokemonObject(results)  {
     let i = 0;
     results.forEach( async pokemon => {

       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
       let data = null
       
       if (res){data =  await res.json()}
       data.nickname = pokemon.nickname
       setAllPokemons( currentList => [...currentList, data])
       await allPokemons.sort((a, b) => a.id - b.id)
       
        i++
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
    {allPokemons.length >=1 ? allPokemons.map( (pokemonStats, index) => 
      <PokemonCard
        key={index}
        id={pokemonStats.id}
        image={pokemonStats.sprites.other.dream_world.front_default}
        name={pokemonStats.name}
        nickname={pokemonStats.nickname}
        type={pokemonStats.types}
        canRelease={true}
      />): <div className='pokemon-container'>
        <h1>U dont have any pokemon, please catch some!</h1>
        <Link to={`/`}>
          <button className="btn-action">Catch some!</button>
        </Link>
      </div>}
    
  </div>
    
</div>
)

}


export default MyPokemonList