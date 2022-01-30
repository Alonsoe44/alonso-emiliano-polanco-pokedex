import Component from "./Component.js";

export default class Button extends Component {
  text;
  icon;
  action;
  constructor(parentElement, className, htmlTag, text, icon, action) {
    super(parentElement, className, htmlTag);
    this.text = text;
    this.icon = icon;
    this.action = action;
    if (htmlTag === "div") {
      this.generateContent();
    }

    this.addListeners();
  }

  generateContent() {
    this.element.innerHTML = ` <a class="navegation-bar__icon"><i class="fas fa-${this.icon}"></i></a>
          <span class="navegation-bar__description">${this.text}</span>`;
  }

  addListeners() {
    this.element.addEventListener("click", this.action);
  }
}
