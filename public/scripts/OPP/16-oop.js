 
// Classe
class Animal {
  constructor(qtdPatas) {
    this.qtdPatas = 0;
  }
  movimentar() {}
}

class Cachorro extends Animal {
  constructor(morde) {
    super();
    this.qtdPatas = 4;
    this.morde = morde;
   
  }

  latir() {}
}
const sophia = new Cachorro(false);
const zig = new Cachorro(true);

Object.assign(sophia, {latir: "Au! au!"})
console.log(sophia);

// Modificadores de acesso  ! sem suporte

// Encapsulamento 
function Person(initialName) {
  let name = initialName;
  Object.defineProperty(this, "name", {
    get: function () {
      // body
      return name;
    },
    set: function (value) {
      name = value;
    },
  });
}
