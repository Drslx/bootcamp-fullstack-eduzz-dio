//  Symbol e um identificador único

const uniqId = Symbol();
console.log(uniqId);

// Exemplo de props 'privadas'
const obj = {
  [uniqId]: "Hello",
};

// Verificar o conteúdo dentro do objeto
console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));

// Exemplo de well known symbols
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3];
const it = arr[Symbol.iterator]();
console.log(it.next());
