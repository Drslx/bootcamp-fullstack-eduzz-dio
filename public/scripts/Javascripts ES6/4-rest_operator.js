// Rest Operator a sintaxe de rest parameter (parâmetros rest)  nos permite representar um número indefinido de argumentos como um array.

// Exemplo antes da ES6
function suma(a, b) {
  var value = 0;

  for (let i = 0; i < arguments.length; i++) {
    value += arguments[i];
  }

  return value;
}

console.log(suma(5, 5, 5, 2, 3));

// Exemplo ES6 rest Operator
function somaB(...args) {
  return args.reduce((acc, value) => acc + value, 0);
}

console.log(somaB(5, 5, 5, 2));

// Outro exemplo ES6
const somaC = (a, b, ...args) => {
  console.log(a, b, rest);
};

// Exemplo de Spread Operator em strings
const st = "Douglas Ricardo";

function LogArgs(...args) {
  console.log(args);
}

LogArgs(...st);

//  Exemplo de Spread Operator em array
const arr = [1, 2, 3, 4];

function logArr(a, b, c, d) {
  console.log(a, b, c);
}

logArr(...arr);

//  Exemplo com objetos iterais que so podem ser usado para construir novos objetos
const obj = {
  test: 123,
};
// ! A ordem que fazemos o spread e importante
const obj2 = {
  ...obj,
  teste2: "hello",
};

console.log(obj2);

// Exemplos mergeando objetos
const obj3 = {
  t: 333,
};

const obj4 = {
  t: 444,
};

const objMerge = {
  ...obj3,
  ...obj4, 
};
// Retorna o obj4
console.log(objMerge);


// Mais informações MDN - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters
