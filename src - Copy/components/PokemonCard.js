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
  )
}

export default PokemonCard
