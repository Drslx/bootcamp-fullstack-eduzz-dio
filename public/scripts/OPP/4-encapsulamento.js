// Ocultar detalhes internos

function Person() {}
Person.walk = function () {
  console.log("Walking");
};

console.log(Person.walk());

// ES6
class PersonB {
  static walk() {
    console.log("Walking...");
  }
}

console.log(PersonB.walk());
