import AddService from "./AddService";
import Calculator from "./Calculator";

const addBtn = document.getElementById("addBtn");
const sumBtn = document.getElementById("sumBtn");
const mulBtn = document.getElementById("mulBtn");

const addService = new AddService();
const calculator = new Calculator();

addBtn.addEventListener("click", () => {
  addService.addInput();
});

sumBtn.addEventListener("click", () => {
  calculator.onSum();
});

mulBtn.addEventListener("click", () => {
  calculator.onMul();
});
