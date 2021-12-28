// Sem suporte ao browser

//Exemplo
/* 
function Person(initialName) {
  let name = initialName;
  this.getName = function () {
    return name;
  };
  this.setName = function (newName) {
    name = newName;
  };
}

const p = new Person("Douglas");
 */
// # = modificador

class Person {
  #name = "";
  constructor(initialName) {
    this.name = initialName;
  }
  setName(name) {
    this.#name = name;
  }
  getName() {
    return this.#name;
  }
}
e.log(p.getName());
