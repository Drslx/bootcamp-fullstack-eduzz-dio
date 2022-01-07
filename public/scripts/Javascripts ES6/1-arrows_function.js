/* 
Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).
*/
() => {};

// Exemplo MDN - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
const arr = materials.map((material) => material.length);
console.log(arr);
console.log(arr.sort());

// Sintaxe básica
let myArrow = (a, b) => a * b;
console.log(myArrow(2, 2));

// Exemplo comparando função anonima vs arrow
helloA = function () {
  // body
  return "Hello";
};

console.log(helloA());

helloB = () => {
  return "Hello World!";
};

console.log(helloB());

// Podemos deixar mais curto se a função tiver apenas uma instrução e a instrução retornar um valor, você pode remover os colchetes e a return palavra-chave
helloC = () => "World";
console.log(helloC());
