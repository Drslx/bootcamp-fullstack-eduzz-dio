/* 
Currying é o processo de transformar uma função que espera vários argumentos em uma função que espera um único argumento e retorna outra função curried. Por exemplo, uma função que recebe três argumentos, ao sofrer currying, resulta em uma função que recebe um argumento e retorna uma função que recebe um argumento, que por sua vez retorna uma função que recebe um argumento e retorna o resultado da função original.
*/

// Aplicação parcial de uma função corresponde a chamar a função passando menos argumentos do que a função recebe.
// Exemplo Eduzz
function soma(a) {
  return function (b) {
    return a + b;
  };
}

// A constante soma2 recebe a função soma com um parâmetro salvo
const soma2 = soma(2);
// Depois repassamos o segundo parâmetro a constante soma2
console.log(soma2(4));
