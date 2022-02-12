import React, { useEffect, useState } from 'react'
import PokemonList from './components/PokemonList'
import { HashRouter, Route, Routes } from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails'
import TopNavbar from './components/TopNavbar'

const App = () => {

  return (
    <HashRouter>
    <div className="app-contaner">
    <TopNavbar/>
      <Routes>
        
        <Route path="/" element={<PokemonList />} />
        <Route path="/details/:id" element={<PokemonDetails />} />
        
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
