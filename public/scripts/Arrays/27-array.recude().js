//
const arr = [1, 2];

// Argumento 1 = oque vai retornar
// Argumento 2 = o valor do item do array
const arrB = arr.reduce((total, value) => (total += value), 0);
console.log(arrB);

const arrC = arr.reduce((total, value) => (total += value), "");
console.log(arrC);

console.log(arrB + arrC);
