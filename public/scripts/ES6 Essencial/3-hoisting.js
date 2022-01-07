/* 
Hoisting (içamento, em português) é um termo que você não encontrará usado em nenhuma prosa de especificação normativa antes da especificação de idioma do ECMAScript® 2015. Hoisting foi pensado como uma maneira geral de pensar sobre como os contextos de execução (especificamente as fases de criação e execução) funcionam em JavaScript. No entanto, o conceito pode ser um pouco confuso a princípio.

Conceitualmente, por exemplo, uma definição estrita de elevação sugere que as declarações de variáveis e funções são fisicamente movidas para o topo do seu código, mas isso não é realmente o que acontece. Em vez disso, as declarações de variável e função são colocadas na memória durante a fase de compilação, mas permanecem exatamente onde você as digitou no seu código.
*/
// Exemplo 1
function fnA() {
  log("Hoisting de função");

  function log(value) {
    console.log(value);
  }
}

fnA();

/* // Exemplo 2     
function fn() {
  function log(value) {
    console.log(value);
  }
  log("Hoisting da função");
}

fn();
 */
