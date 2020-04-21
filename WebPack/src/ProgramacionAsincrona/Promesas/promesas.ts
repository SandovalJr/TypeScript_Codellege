/*****
Promesas: Es un objeto el cual mandamos a pedir y puede o no tener un valor y represata si funciona o falla

La promesa tiene 3 estados:
-Pendiente: es el estado incial cuando se crea la promesa
-Cumplido: cuando se cumple la promesa
- Rechazado: cuando no se cumple con la promesa

******/

// resolve => promesa funcione
// reject cuando fracase

// let promesa = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("La operacion fue un exito");
//   } else {
//     reject("ocurrio un error");
//   }
// });

// promesa
//   .then((response) => {
//     console.log("reponse", response);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// let n1x: number = 10;

// const p2 = new Promise((res, rej) => {
//   if (n1x == 11) {
//     res(`El resultado de x es: ${n1x}`);
//   } else {
//     rej("Error X no es igual a " + n1x);
//   }
// });

// // Ejecutar la promesa
// p2.then((response) => {
//   console.log(response);
// }).catch((err) => {
//   console.log(err);
// });

// /*****
// EJEMPLO 3 PROMESAS
// ******/
// console.log("--------------------------------------------------");

let number1: number = 10;
// console.log("1. Proceso iniciado");

// setTimeout(() => {
//   number1 = number1 * 3 + 2;
//   console.log("2. Proceso terminado");
// }, 2000);

const p4 = new Promise((res, rej) => {
  console.log("1. Proceso iniciado");
  setTimeout(() => {
    number1 = number1 * 3 + 2;
    console.log("2. Proceso terminado");
    res(number1);
  }, 2000);
});

p4.then((res) => {
  console.log("3. El resultado es: " + number1);
});
