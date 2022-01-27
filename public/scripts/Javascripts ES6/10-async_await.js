/*  
Exemplos de Async/Await
1- Async/ Await - // Exemplo MDN - https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Async_await
*/

const getPosts = async () => {
  const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
  const data = await response.json();
  console.log(data);
};

getPosts();
