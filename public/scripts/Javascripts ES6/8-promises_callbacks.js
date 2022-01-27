/* 
Exemplo Callbacks e Promises
1- Callbacks - // Exemplo MDN - https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function
2- Promises - // Exemplo MDN - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises

Basicamente, callback é um tipo de função que só é executada após o processamento de outra função. 
Na linguagem JavaScript, quando uma função é passada como um argumento de outra, ela é, então, chamada de callback.
Isso é importante porque uma característica dessa linguagem é não esperar o término de cada evento para a execução do próximo.
Portanto, ela contribui para controlar melhor o fluxo de processamento assíncrono. Para ilustrar a explicação, imagine o seguinte bloco de código:
! Usar  promises no lugar de  callbacks
*/

// Exemplo 1 Callbacks
function firstBlock() {
  // wait 5 seconds
  setTimeout(function () {
    console.log("This is the first block");
  }, 1000);
}

// Funcao lastBlock será executada primeiro.
function lastBlock() {
  console.log("This is second block");
}

// function first ira ter atraso de retorno
firstBlock();
lastBlock();

// Exemplo 2 Callbacks
function display(num) {
  // funcao que ira receber o callback de soma e multi
  console.log("Result:" + num);
}

function soma(a, b, callback) {
  // Parametro callback recebe variavel operator
  let operator = a + b;
  callback(operator);
}

function multi(a, b, callback) {
  // Parametro callback recebe variavel operator
  let operator = a * b;
  callback(operator);
}
// Chamar a Funcao -> recebe paramentro e a funcao display;
soma(2, 2, display);
multi(2, 4, display);

/* 
Essencialmente, uma promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função.
Por exemplo, em vez de uma função old-style que espera dois callbacks, e chama um deles em uma eventual conclusão ou falha:
*/
// Exemplo 1 Promises com a funcao construtora Promise
function getReq(resolver = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!resolve) {
        reject("Deu erro");
      }
      resolve("Promises Resolvida");

      // nao chamar console.log(getReq());
    }, 1000);
  });
}

getReq().then((resolver) => {
  //setTimeout(() => {
  console.log(resolver);
  //  }, 1000);
});

// Exemplo 2 Promises com a funcao construtora Promise
const myPromise = new Promise((resolve, reject) => {
  const nome = "Douglas";

  if (nome == "Douglas") {
    resolve(`Usuario ${nome} encontrado`);
  } else {
    reject("Usuario nao encontrado");
  }
});

myPromise.then((data) => {
  console.log(data);
});

// Exemplo 3 Promises com a funcao construtora Promise
const getData = () => {
  return new Promise((resolve, reject) => {
    resolve("Dados aqui");
    reject("Error aqui");
  });
};

// console.log(getData());
getData()
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

// Exemplo 4 Promises com a funcao construtora Promise
const aPromise = new Promise((resolve, reject) => {
  const aNumber = 37;
  resolve(aNumber);
});

aPromise.then((value) => {
  console.log(value);
});
