import React, { useEffect, useState } from 'react'
import PokemonList from './components/PokemonList'
import { HashRouter, Route, Routes } from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails'
import MyPokemonList from './components/MyPokemonList'
import TopNavbar from './components/TopNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [pokemon, setPokemon] = useState([])

  return (
    <HashRouter>
    <div className="app-contaner">
    <TopNavbar/>
      <Routes>
        
        <Route path="/" element={<PokemonList />} />
        <Route path="/details/:id" element={<PokemonDetails />} />
        <Route path="/mypokemon" element={<MyPokemonList />} />

      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
