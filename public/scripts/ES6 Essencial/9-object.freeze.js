const newObj = {
  foo: "bar",
};

// Previne alterar
Object.freeze(newObj);

// Alterar
newObj.foo = "changes";

// Deletar
delete newObj.foo;

// Adiconar
newObj.bar = "foo";
console.log("\nVariavel newObj apos as alteracoes:", newObj);
