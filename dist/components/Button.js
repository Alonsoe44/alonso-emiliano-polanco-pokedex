import Component from "./Component.js";

export default class Button extends Component {
  text;
  action;
  constructor(parentElement, className, text, action) {
    super(parentElement, className, "button");
    this.text = text;
    this.action = action;
    this.generateContent();
    this.addListeners();
  }

  generateContent() {
    this.element.textContent = this.text;
  }

  addListeners() {
    this.element.addEventListener("click", this.action);
  }
}
