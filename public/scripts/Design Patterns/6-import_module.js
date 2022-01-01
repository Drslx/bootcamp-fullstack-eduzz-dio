// Import do arquivo module
const { getName, setName } = require("./5-module.js");

// Log pego default do modulo
console.log("1", getName());

// Log setado
console.log(setName("Douglas"));

// Log retorna o log setado
console.log("3", getName());
