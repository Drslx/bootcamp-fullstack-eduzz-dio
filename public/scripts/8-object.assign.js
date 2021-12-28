const user = {
  name: "Douglas",
  lastName: "Ricardo",
};

// Mergear propriedades de objetos
Object.assign(user, { fullName: "Douglas Ricardo" });

console.log("\nAdiciona a propriedades fullName no objeto user", user);
console.log(
  "\nRetorna um novo objeto mergeaando dois ou mais objetos",
  Object.assign({}, user, { age: 26 })
);
