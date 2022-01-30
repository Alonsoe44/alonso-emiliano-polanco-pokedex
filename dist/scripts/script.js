import Card from "./components/Card.js";
import NavegationBar from "./components/NavegationBar.js";

const appContainerDom = document.querySelector(".app-container");

const asyncPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=5");
  const responseJson = await response.json();
  const pokemonGroup = responseJson.results;
  let pokemonGroupObjects = pokemonGroup.map((pokemon) => pokemon.name);
  const pokemonGroupPromeses = pokemonGroup.map((pokemon) =>
    fetch(pokemon.url)
  );
  const pokemonGroupStrings = await Promise.all(pokemonGroupPromeses);
  const pokemonGroupData = await Promise.all(
    pokemonGroupStrings.map((pokeString) => pokeString.json())
  );
  pokemonGroupObjects = pokemonGroupObjects.map((pokemon, index) => ({
    name: pokemon,
    image: pokemonGroupData[index].sprites.other.dream_world.front_default,
    weight: pokemonGroupData[index].weight,
    height: pokemonGroupData[index].height,
    types: pokemonGroupData[index].types[0].type.name,
    moves: pokemonGroupData[index].moves[0].move.name,
  }));
  pokemonGroupObjects.forEach(
    (pokemon) => new Card(appContainerDom, pokemon.name, pokemon.image)
  );
};

asyncPokemon();
new NavegationBar(appContainerDom);
