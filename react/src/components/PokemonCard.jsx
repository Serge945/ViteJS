import React from 'react';
// import PokemonCard from '../components/PokemonCard';
import MyTitle from '../Mytitle';
 

//  const pokemon = "bulbasaur";  
//  const pokemonList = [
//      {
//      name: "bulbasaur",
//      imgSrc:
//             "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//         },
//         {
//           name: "mew",
//         },
//         {
//           name: "pikachu",
//         },
//       ];

        
      

// chaque component a son jsx qui ensuite est redirigé vers une fonction App
//  l'intéret du jsx est de pouvoir faire du js dans du html
//  le but du return est de renvoyer le jsx  

// function PokemonCardStatic(){
//     const pokemon=pokemonList[0]; 
//     const image = pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>;

//     return (
//         <div>
//     <h2>{pokemon.name}</h2>
//       {image}
    
//     </div>
//     )
// }

function PokemonCard(props){
    console.log(props)
    const pokemon = props.pokemon;
    const image = pokemon.imgSrc? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      );

return (
<div>
<h2>{pokemon.name}</h2>
{image}
</div>
);
}

// explication de la ternaire 
// Cette ligne de code utilise une instruction conditionnelle (ou ternaire) pour décider d'afficher l'image du Pokémon ou un paragraphe avec des points d'interrogation si la propriété imgSrc n'est pas définie pour le Pokémon en question.

// La condition vérifie si la propriété imgSrc existe pour le Pokémon actuel en utilisant 
// l'opérateur ternaire ?. Si elle existe, elle renvoie un élément img avec l'URL 
// de l'image stockée dans la propriété imgSrc et le nom du Pokémon stocké dans la propriété name avec 
// l'attribut alt. Si elle n'existe pas, elle renvoie un élément p avec le texte "???" à l'intérieur.


// function PokemonCard() {
//     const pokemon = pokemonList[1]; // Récupère le deuxième Pokémon de la liste
  
//     // Si la propriété `imgSrc` existe pour le Pokémon actuel, affiche l'image. Sinon, affiche un paragraphe avec des points d'interrogation.
//     const image = pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>;
  
//     return (
//       <div>
//         <h2>{pokemon.name}</h2>
//         {image}
//       </div>
//     );
//   }
  


 
    export default PokemonCard