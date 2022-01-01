// Exemplo de uma função factory

function FakeUSer() {
  return {
    name: "Douglas",
    lasName: "Ricardo",
  };
}

const user = FakeUSer();
console.log(user);
