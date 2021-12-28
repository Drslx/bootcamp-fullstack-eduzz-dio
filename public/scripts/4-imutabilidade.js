/* 
Dados nunca mudam !

*/

const user = {
  name: "Douglas",
  lastName: "Ricardo",
};

function getUserWithFullName(user) {
  return {
    ...user,
    fullName: `${user.name} ${user.lastName}`,
  };
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName)
console.log(typeof(userWithFullName))


