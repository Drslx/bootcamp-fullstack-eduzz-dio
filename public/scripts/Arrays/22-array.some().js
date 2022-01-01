// Verifica sem tem um valor
const arr = [1, 3, 3, 3, 4, "Douglas"];
var hasSomeEvenNumber = arr.some((value) => value == "Douglas");
console.log(hasSomeEvenNumber);

arr.unshift(1);
// Verifica qual e o valor
console.log((hasSomeEvenNumber = arr.find((value) => value == "Douglas")));

// Verifica a posição
console.log((hasSomeEvenNumber = arr.findIndex((value) => value == "Douglas")));
