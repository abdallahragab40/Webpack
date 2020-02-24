export class Math {
  sum(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  mul(...numbers) {
    return numbers.reduce((sum, num) => sum * num, 1);
  }
}
