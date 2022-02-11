import React, { useEffect, useState } from 'react'
import PokemonList from './components/PokemonList'
import { HashRouter, Route, Routes } from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails'

const App = () => {

  return (
    <HashRouter>
    <div className="app-contaner">
      <h1>PokeDex</h1>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/details/:id" element={<PokemonDetails />} />
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
