// Exemplo Callbacks e Promises
/* 
1- Callbacks - // Exemplo MDN - https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function
2- Promises - // Exemplo MDN - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises
3- Async
4- Await
5- Fetch
6- EventEmitters
*/

/* 
Basicamente, callback é um tipo de função que só é executada após o processamento de outra função. 
Na linguagem JavaScript, quando uma função é passada como um argumento de outra, ela é, então, chamada de callback.
Isso é importante porque uma característica dessa linguagem é não esperar o término de cada evento para a execução do próximo.
Portanto, ela contribui para controlar melhor o fluxo de processamento assíncrono. Para ilustrar a explicação, imagine o seguinte bloco de código:
*/

// Exemplo 1 Callbacks
function firstBlock() {
  // wait 5 seconds
  setTimeout(function () {
    console.log("This is the first block");
  }, 1000);
}

// Funcao lastBlock sera executada primeiro.
function lastBlock() {
  console.log("This is second block");
}

firstBlock();
lastBlock();

// Exemplo 2 Callbacks
function display(num) {
  console.log("Result:" + num);
}

function soma(a, b, callback) {
  let operator = a + b;
  callback(operator);
}

function multi(a, b, cb) {
  let operator = a * b;
  cb(operator);
}
// Chamar a Funcao;
soma(2, 2, display);
multi(2, 4, display);

/* 
Essencialmente, uma promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função.
Por exemplo, em vez de uma função old-style que espera dois callbacks, e chama um deles em uma eventual conclusão ou falha:
*/

// Exemplo 1 Promises

