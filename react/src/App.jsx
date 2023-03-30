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


const pokemon = "bulbasaur";  
 const pokemonList = [
     {
     name: "bulbasaur",
     imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
          name: "mew",
        },
        {
          name: "pikachu",
        },
      ];



function App() {
  const [count, setCount] = useState(0)

    return (
      <div>
        <MyTitle/>
        <PokemonCard pokemon = {pokemonList[2]}/>
      </div>
  
)
    }

export default App

// PokemonCard est un composant React et pokemon est une prop passée à ce composant.

// Dans cette ligne de code : <PokemonCard pokemon={pokemonList[0]}/>, la prop pokemon est égale
//  à l'objet du premier élément de pokemonList. Cet objet a deux propriétés : name qui est égal
//   à "bulbasaur", et imgSrc qui est l'URL de l'image pour "bulbasaur".

// Le composant PokemonCard peut utiliser la prop pokemon pour afficher les informations
//  du pokémon de manière appropriée dans l'interface utilisateur.