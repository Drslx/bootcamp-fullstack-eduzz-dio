// Exemplo de decorator sem a sintaxe
let logged = false;
function callIfAuthenticated(fn) {
  // body
  return !!logged && fn();
}

function sum(a, b) {
  return a + b;
}

console.log(callIfAuthenticated(() => sum(2, 3)));

logged = true;
console.log(callIfAuthenticated(() => sum(2, 3)));
