//  Temos que informar um inicio e fim onde ele ira fatiar
const arrA = [1, 2, 3, 4, 5];

// Retorna a posição fatiada [1, 2]
console.log(arrA.slice(0, 2))
// Pega a partir da posição 2 incluindo ela e remove
console.log(arrA.slice(2));

// Pega a posição final e retorna a posição [5] 
console.log(arrA.slice(-1));
