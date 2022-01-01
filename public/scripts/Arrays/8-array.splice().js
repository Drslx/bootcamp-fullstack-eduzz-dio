// O Retorno de slice e sempre os itens removidos
const arrA = [1, 2, 3, 4];

// Remove a partir da posição 2 [3, 4, 5] e retorna [1, 2]
/* arrA.splice(2);
console.log(arrA);
 */
// Na primeira posição do array nao remove,  e na segunda a quantidade que deseja remover e no terceiro oque vai ser add a partir da primeira
/* console.log(arrA.splice(1, 0, "first"));
console.log(arrA) */

// Removendo a partir da posição 2 remove 1 item e adiciona Add no lugar
arrA.splice(2, 1, "Add");
console.log(arrA);
