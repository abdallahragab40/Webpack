export function getNumbers() {
  const numberInputs = document.getElementsByClassName("number");
  const numbersArray = Array.from(numberInputs);
  return numbersArray.map(input => +input.value);
}
