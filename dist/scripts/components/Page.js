import Component from "./Component.js";
import Card from "./Card.js";
import NavegationBar from "./NavegationBar.js";
import Button from "./Button.js";

export default class Page extends Component {
  pageIndex;
  constructor(parentElement, className) {
    super(parentElement, className, "div");
    this.asyncPokemonCardsCreation();
    this.createNavegationBar();
    this.createNavegationButtons();
  }

  asyncPokemonCardsCreation() {
    (async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=15"
      );
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
        (pokemon) => new Card(this.element, pokemon.name, pokemon.image)
      );
    })();
  }

  createNavegationBar() {
    new NavegationBar(this.element);
  }

  // eslint-disable-next-line class-methods-use-this
  createNavegationButtons() {
    const navegationBarDom = document.querySelector(".navegation-bar");
    new Button(
      navegationBarDom,
      "option-container",
      "div",
      "Pokepets",
      "home",
      () => {}
    );
    new Button(
      navegationBarDom,
      "option-container",
      "div",
      "World",
      "globe",
      () => {}
    );
    new Button(
      navegationBarDom,
      "option-container",
      "div",
      "back",
      "chevron-right",
      () => {}
    );
    new Button(
      navegationBarDom,
      "option-container",
      "div",
      "Next",
      "chevron-right",
      () => {}
    );
  }
}
