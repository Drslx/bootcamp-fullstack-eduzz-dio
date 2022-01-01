// Retornar um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade.
const arr = [1, 2, [3, 4, 5, 6], 7];
console.log(arr);

// Padrão de especificado de array e 1
console.log(arr.flat());

const arrB = [1, 2, [3, 4, [5, 6]]];
console.log(arrB);

console.log(arrB.flat());
console.log(arrB.flat(2));