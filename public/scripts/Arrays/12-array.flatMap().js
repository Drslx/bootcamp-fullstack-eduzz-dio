// Primeiro executa o map depois o flat
const arr = [1, 2, 3, 4];

// Retorna um array dentro de um array
const newArr = arr.flatMap((value) => [[value * 2]]);

console.log(newArr);