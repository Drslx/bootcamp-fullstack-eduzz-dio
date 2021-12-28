function init() {
  const exemplo = "text";

  return function () {
    console.log(`1 - ${exemplo}`);

    return function () {
      console.log(`2 - ${exemplo}`);

      return function () {
        console.log(`3 - ${exemplo}`);
      };
    };
  };
}

const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();

initFn3();


/* 
Evitar usar 
*/