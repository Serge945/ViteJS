import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from './Mytitle' 
import PokemonCard from './components/PokemonCard'

// mytitle represente le composant et ./Mytitle represente le chemin et ca qui est precis parce que le chemin est précis 
// import MyTitle from './components/PokemonCard'
//   quand tu appelles deux fois deux composants avec le meme nom ca ne marche pas 
//  le nom des composants doit être pareil 
// app jsx est un composant 


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];



function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePreviousPokemon = () =>{
    setPokemonIndex(pokemonIndex-1); 
  }; 

  const handleNextPokemon= ()=>{
    setPokemonIndex(pokemonIndex+1);
  };
  const currentPokemon = pokemonList[pokemonIndex];
  return(
    <div>
    <img src={currentPokemon.imgSrc} alt={currentPokemon.name} />
    <h2>{currentPokemon.name}</h2>
    <button onClick={handlePreviousPokemon}>Précédent</button>
    <button onClick={handleNextPokemon}>Suivant</button>
    </div>
);
}
  export default App




    // return (
    //   <div>
    //     <MyTitle/>
    //     <PokemonCard pokemon = {pokemonList[0]}/>
    //   </div>
  



// PokemonCard est un composant React et pokemon est une prop passée à ce composant.

// Dans cette ligne de code : <PokemonCard pokemon={pokemonList[0]}/>, la prop pokemon est égale
//  à l'objet du premier élément de pokemonList. Cet objet a deux propriétés : name qui est égal
//   à "bulbasaur", et imgSrc qui est l'URL de l'image pour "bulbasaur".

// Le composant PokemonCard peut utiliser la prop pokemon pour afficher les informations
//  du pokémon de manière appropriée dans l'interface utilisateur.