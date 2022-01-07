// Default functions args exemplo bootcamp Eduzz
function soma(a, b = 1) {
  return a + b;
}

console.log(soma(2));

// Lazy evaluation = uma funcao e invocada com outra e invocada sem parâmetro
function randomNumber() {
  console.log("Gera números aleatórios...");
  return Math.random()* 1;
}

// Receive function randomNumber
function multiply(a, b = randomNumber()) {
  return a * b;
}

console.log(multiply(5));

// Mais informações MDN - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters