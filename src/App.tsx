import React from 'react';
import PokemonCard from './components/PokemonCard'; 



function App() {
  return (
    <div>
      <PokemonCard pokemon={PokemonCard[0]}/>
    </div>
  );
};

export default App;