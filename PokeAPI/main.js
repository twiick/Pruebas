const input=document.querySelector("#inputPokemon")
const traerPokemon=document.querySelector("#traerDatos");
let pokemon="";
const API="https://pokeapi.co/api/v2/pokemon";

const pokemonName=document.querySelector("#pokemonName")
const pokemonImage=document.querySelector("#pokemonImage")

traerPokemon.addEventListener("click",traerDatos)
input.addEventListener("keypress", (event)=>{
    if (event.key === "Enter") {
        traerDatos();
    }
  });

function traerDatos(){
    pokemon=input.value;
    fetch(`${API}/${pokemon}`)
        .then(res=>res.json())
        .then(productos=>{
            pokemonName.innerHTML=productos.name;
            pokemonImage.src=productos.sprites.front_default;
        })
}
