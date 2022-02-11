import React from 'react'
import { Link } from 'react-router-dom'

const PokemonCard = ({ id, image, name, type, _callback }) => {
  const cardClass = type + ' thumb-container'
  return (
    <Link to={`/details/${id}`}>
      <div className={cardClass}>
        <div className='number'>
          <small>#{id}</small>
        </div>
        <img src={image} alt={name} />
        <div className='detail-wrapper'>
          <h3>{name}</h3>
          <small>Type: {type}</small>
          <button>Catch</button>
        </div>
      </div>
    </Link>
  )
}

export default PokemonCard
