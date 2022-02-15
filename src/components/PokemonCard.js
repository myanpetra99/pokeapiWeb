import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const PokemonCard = ({ id, image, name, type, nickname, canRelease, _callback }) => {
  const cardClass = type + ' thumb-container'
  

  
  function releasePokemon (nickname){
    let currentPokemon = JSON.parse(localStorage.getItem("pokemon") || "[]");
    currentPokemon = currentPokemon.filter(pokemon => pokemon.nickname !== nickname)
    localStorage.setItem("pokemon", JSON.stringify(currentPokemon));
    alert("You have released " + nickname + " from your pokemon list!")
    window.location.reload();
  }




  return (
    <div className={cardClass}>
    <Link to={`/details/${id}`}>
      <div>
        <div className='number'>
        </div>
        <img src={image} alt={name} />
        <div className='detail-wrapper'>
          <h3>{name}</h3>
          <p>{nickname}</p>
          <div className='type-wrapper'>
          <ul className={type}>
        {type.map(({ type }) => (
          <div key={type.name} className={type.name + ' mini-type'}>{type.name}</div>
        ))}
      </ul>
      </div>
        </div>
       
      </div>
    </Link>
    { canRelease ? <button className='btn-action' onClick={()=>{ releasePokemon(nickname) }}>Release</button>:null}
    </div>
    
  )
}

export default PokemonCard
