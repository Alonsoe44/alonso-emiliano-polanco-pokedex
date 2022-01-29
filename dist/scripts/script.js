const emptyBox = document.querySelector(".pokemon-card__pokemon-image");
const asyncPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const responseJson = await response.json();
  const pokeInfoResponse = await fetch(responseJson.results[0].url);
  const pokeInfo = await pokeInfoResponse.json();

  const pokePictureResponse = pokeInfo.sprites.other.dream_world.front_default;

  emptyBox.src = pokePictureResponse;
};

asyncPokemon();
