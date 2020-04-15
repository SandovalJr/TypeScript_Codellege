/*****
 Caracteristicas de los parametros de las funciones

 Explicaremos las caracteristicas que tienen los parametros de las funciones

 1- Paramtros obligatorios
 2- Parametros opcionales
 3- Parametros default

Notas:
El primer parametro no puede ser opcional 
Los parametros opcionales deben escribirse al final 
******/

// paramtros obligatorios

// function suma(x: number) {
//   let suma = x;
//   console.log(suma);
// }

// suma(10);

// //Paramtros opcionales
// function opcionales(x: number, ultimo: number = 10, y?: boolean) {
//   let suma = x + ultimo;
//   y != undefined ? console.log(suma) : console.log("no se tuvo a y: " + suma);
//   //   console.log(suma);
// }

// opcionales(10, 20);

/*****
Funcion de flechas
******/

const ArrowFunction = (x: number, y: number) => {
  return x + y;
};

console.log(ArrowFunction(10, 5));

/*****
Metodos array funcion de flecha
******/
