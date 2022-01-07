// Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
// Exemplo bootcamp Eduzz
function init() {
  const exemplo = "text";

  return function () {
    console.log(`1 - ${exemplo}`);

    return function () {
      console.log(`2 - ${exemplo}`);

      return function () {
        console.log(`3 - ${exemplo}`);
      };
    };
  };
}

const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();

initFn3();

/* 
A função init() cria uma variável local chamada name, e depois define uma função chamada displayName(). displayName() é uma função aninhada (um closure) — ela é definida dentro da função init(), e está disponivel apenas dentro do corpo daquela função. Diferente de init(), displayName() não tem variáveis locais próprias, e ao invés disso reusa a variável name declarada na função pai.
*/
// Exemplo MDN - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures
function initB() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  displayName();
}
initB();
