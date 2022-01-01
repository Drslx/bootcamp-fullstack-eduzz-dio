// Exemplos - vue, rxjs

class Observable {
  constructor() {
    //Responsável por manter uma lista
    this.observables = [];
  }

  subscribe(fn) {
    // Responsável por adicionar  novos itens na lista de obs
    this.observables.push(fn);
  }

  notify(data) {
    // Notificar que recebe um dado
    this.observables.forEach((fn) => fn(data));
  }

  unsubscribe(fn) {
    this.observables = this.observables.filter((obs) => obs !== fn);
  }
}

// Instanciar
const o = new Observable();

// Declarar os subs
const logData1 = (data) => console.log(`Subs 1: ${data}`);
const logData2 = (data) => console.log(`Subs 2: ${data}`);
const logData3 = (data) => console.log(`Subs 3: ${data}`);

// Chamar a funcao subs registrando eles
o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

// Chama a funcao  notify passando algo
o.notify("notified 1");

// Remover da lista o log2
o.unsubscribe(logData2);
// Chamar novamente o log1 e 3
o.notify("notified 2");
