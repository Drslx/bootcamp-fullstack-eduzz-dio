// Desctructuring Assingnment usando em arrays
/* 
A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.
*/
// Exemplo antes do ES6
let arr = ["apple", "banana", "orange", ""];
let apple = arr[0];
let banana = arr[1];
let orange = arr[2];

// Exemplo ES6
let [apple2, banana2, orange2] = ["apple", "banana", "orange"];
console.log(apple2, banana2, orange);

// Teste com Spread retorna apenas os tres primeiros
let [apple3, banana3, orange3] = [...arr];
console.log(apple3, banana3, orange3);

// Exemplo de swap padrão
var a = 1;
var b = 2;
var swap = console.log(`Swap ${(swap = a)}, A ${(a = b)}, B ${(b = swap)}`);

// Exemplo de swap desctructuring
let a2 = 3;
let b2 = 4;
[a2, b2] = [b2, a2];
console.log("A2", +a2);
console.log("B2", +b2);

// Exemplo com objetos
let obj = {
  name: "Douglas",
  idade: 34,
};

let { name, idade } = obj;
console.log(name, idade);

// Exemplo destruindo propriedades
let objB = {
  name: "Douglas",
};

let { name: name2 } = obj;
console.log(name2);

// Mais informações MDN - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
