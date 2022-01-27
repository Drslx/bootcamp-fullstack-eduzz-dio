/* 
Exemplos de Fetch
1- Fetch - // Exemplo MDN - https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

2- then - permite definir o bloco executado mediante o cumprimento de uma promise retornando um objeto do tipo Response.
3- catch - permite definir o bloco executado mediante a rejeição de uma promise

A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. 
Ela também fornece o método global fetch() (en-US) que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.
Este tipo de funcionalidade era obtida anteriormente utilizando XMLHttpRequest.
Fetch fornece uma alternativa melhor que pode ser facilmente utilizada por outras tecnologias como Service Workers (en-US). 
Fetch também provê um lugar lógico único para definir outros conceitos relacionados ao protocolo HTTP como CORS e extensões ao HTTP.
*/

// Exemplo 1 fetch
const url = "https://dog.ceo/api/breeds/image/random";
const dogImg = document.querySelector('[data-js="dog-img"]');

fetch(url)
  .then((dogData) => {
    if (!dogData.ok) {
      throw new Error(`HTTP error, status ${dogData.status}`);
    }
    return dogData.json();
  })
  .then(({ message }) => {
    dogImg.setAttribute("src", message);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Exemplo 1 codigo refatorado
/* const url = "https://dog.ceo/api/breeds/image/random";
const dogImg = document.querySelector('[data-js="dog-img"]');

const validateHTTPStatus = (dogData) => {
  if (!dogData.ok) {
    throw new Error(`HTTP error, status ${dogData.status}`);
  }
  return dogData.json();
};

const setDogImg = ({ message: url }) => {
  dogImg.setAttribute("src", url);
};

const handleRequestError = (error) => {
  console.log(error.message);
};

fetch(url).then(validateHTTPStatus).then(setDogImg).catch(handleRequestError);
 */
