import Component from "./Component.js";

export default class NavegationBar extends Component {
  constructor(parentElement) {
    super(parentElement, "navegation-bar", "nav");
    this.createSons();
  }

  createSons() {
    this.element.innerHTML = `<div class="option-container">
          <a class="navegation-bar__icon"><i class="fas fa-home"></i></a>
          <span class="navegation-bar__description">Pokepets</span>
        </div>
        <div class="option-container">
          <a><i class="fas fa-globe"></i></a>
          <span class="navegation-bar__description">World</span>
        </div>
        <div class="option-container">
          <a><i class="fas fa-chevron-right"></i></a>
          <span class="navegation-bar__description">Return</span>
        </div>
        <div class="option-container">
          <a><i class="fas fa-chevron-right"></i></a>
          <span class="navegation-bar__description">Next</span>
        </div>`;
  }
}
