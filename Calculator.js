import { getNumbers } from "./getNumbers";
const x = require("./Math");

export default class Calculator {
  constructor() {
    this.result = document.getElementById("result");
    this.math = new x.Math();
  }

  onSum() {
    const numbers = getNumbers();
    this.result.innerHTML = this.math.sum(...numbers);
  }

  onMul() {
    const numbers = getNumbers();
    this.result.innerHTML = this.math.mul(...numbers);
  }
}
