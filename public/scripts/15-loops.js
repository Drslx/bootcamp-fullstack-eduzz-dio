// For
const array = ["1", "2 ", "3"];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

//  While so comeca a executar se a condicao for true
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}

console.log(x, `${n}`);

// Do While executa uma vez depois verifica
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);


