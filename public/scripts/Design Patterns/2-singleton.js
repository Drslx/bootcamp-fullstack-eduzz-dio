// Pode ser uma variável global
var SETTINGS = {
  api: "http://localhost",
  trackJsToken: "12345",
};


// Exemplo de uma função singleton
function MyApp() {
  if (!MyApp.instance) {
    MyApp.instance = this;
  }

  return MyApp.instance;
}


