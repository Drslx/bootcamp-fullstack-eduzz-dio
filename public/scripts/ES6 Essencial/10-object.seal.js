const person = { name: "Douglas" };

Object.seal(person);

// Permite apenas alterar propriedades
person.name = "Thaty";
delete person.name;
person.age = 26;

console.log(person);
