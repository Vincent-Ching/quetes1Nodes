import React from 'react';

const PokemonCard: React.FC = () => {
  return (
    <figure>
      {/* Contenu de la carte Pokémon ici */}
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />
      <figcaption>Bulbasaur</figcaption>
    </figure>
  );
};

export default PokemonCard