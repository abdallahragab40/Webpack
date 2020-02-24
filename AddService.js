export default class AddService {
  constructor() {
    this.numbersContainer = document.getElementById("numbers");
  }
  addInput() {
    const newNumber = document.createElement("input");
    newNumber.setAttribute("class", "number");
    newNumber.setAttribute("type", "number");
    this.numbersContainer.append(newNumber);
  }
}
