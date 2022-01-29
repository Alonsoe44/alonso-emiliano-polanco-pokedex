import Component from "./Component.js";

export default class Card extends Component {
  title;
  objectData;
  imageSrc;
  constructor(parentElement, title, imageSrc, objectData) {
    super(parentElement, "pokemon-card", "div");
    this.title = title;
    this.imageSrc = imageSrc;
    this.objectData = objectData;
    this.generateContent();
    this.addListeners();
  }

  generateContent() {
    this.element.innerHTML = `<h4 class="pokemon-card__pokemon-name">${this.title}</h4>
      <dl class="pokemon-card__pokemon-stats"></dl>
      <img class="pokemon-card__pokemon-image" src=${this.imageSrc} alt="${this.title} picture"/>`;
  }

  addListeners() {
    this.element.addEventListener("click", () => {});
  }
}
