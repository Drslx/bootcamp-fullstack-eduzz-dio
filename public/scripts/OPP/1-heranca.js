"use strict";

// Herança  -> prototipos
function Animal(qtdPatas) {
  this.qtdPatas = 4;
}

const cachorro = new Animal();
console.log(cachorro.qtdPatas);

// Verificar de quem e  a estancia
console.log(cachorro instanceof Animal);

// Funcao construtora
function AnimaB(qtdPatas) {
  this.qtdPatas = qtdPatas;
}

function Cachorro(morde) {
  // body
  AnimaB.call(this, 4);
  this.morde = morde;
}

const pug = new Cachorro(false)
console.log(pug);

