// Exemplo de module mo ES6
/* class Person {
  constructor(name) {
    this.name = name;
  }
}

// Faz o export
export default Person;

// Utilizar Person
import Person from "./models/person";
 */
// Exemplo bootcamp Eduzz
let name = "default";
function getName() {
  // body
  return name;
}

function setName(newName) {
  // body
  name = newName;
}
  // Exportar esse modulo
module.exports = {
    getName,
    setName
};
