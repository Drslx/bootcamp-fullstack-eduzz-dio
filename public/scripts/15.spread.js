// Spread Operator

let partes = ["ombro", "joelhos"];
let corpo = ["cabeça", ...partes, "e", "pes"];

console.log(corpo);

function fn(x, y, z) {}
let args = [0, 1, 2];
fn(...args);

console.log(args);
