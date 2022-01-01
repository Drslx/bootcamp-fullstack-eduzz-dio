// Filtar array

const users = ["Douglas", "Thaty", "Fred", "Krueger"];

const gender = {
  MAN: Symbol("M"),
  WOMAN: Symbol("W"),
  PET: Symbol("P"),
};

const persons = [
  {
    name: "Douglas",
    age: 34,
    gender: gender.MAN,
  },
  {
    name: "Thaty",
    age: 26,
    gender: gender.WOMAN,
  },
  {
    name: "Fred",
    age: 1,
    gender: gender.PET,
  },
  {
    name: "Krueger",
    age: 0.1,
    gender: gender.PET,
  },
];

// Retorna a quantidade de itens
console.log("Itens:", persons.length);

// Verificar se e array
console.log("persons e um array:", Array.isArray(persons));

// Iterar os itens do array
persons.forEach((person, index, arr) => {
  console.log(`Nome: ${person.name} index: ${index}`, arr);
});

// Filtrar array
const mens = persons.filter((person) => person.gender === gender.MAN);
console.log("\nNova lista com apenas homens:", mens);

// Retornar um novo array
const personWithCourse = persons.map((person) => {
  person.course = "Introducao ao JavaScript";
  return person;
});

console.log("\nPessoas com a adicao do course:", personWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);

console.log("\nSoma de idade das pessoas", totalAge);

// Juntando operacoes
const totalEvenAges = persons
  .filter((person) => person.age % 2 === 0)
  .reduce((age, person) => {
    age += person.age;
    return age;
  }, 0);

console.log(
  "\nSoma de idades das pessoas que possuem  idade par",
  totalEvenAges
);

