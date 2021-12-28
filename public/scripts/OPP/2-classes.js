"use strict";

// Sintaxe de classes
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
    this.morde = 4;
  }
}

const pug = new Cachorro(false);
console.log(pug);
