import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from './Mytitle' 
// mytitle represente le composant et ./Mytitle represente le chemin et ca qui est precis parce que le chemin est précis 
// import MyTitle from './components/PokemonCard'
//   quand tu appelles deux fois deux composants avec le meme nom ca ne marche pas 
//  le nom des composants doit être pareil 
import PokemonCard from './components/PokemonCard'
// app jsx est un composant 

function App() {
  const [count, setCount] = useState(0)

    return (
  <div>
        <MyTitle/>
        <PokemonCard/>
        
  </div>
  

 )}
  

export default App
