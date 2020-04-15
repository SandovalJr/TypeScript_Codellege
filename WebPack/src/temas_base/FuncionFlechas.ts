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

1-ForEach
2-Map
3-Find
4-Filter
******/

let ArrayNumber: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Es lo mismo que poner un for y que se repita el numero de datos que tenga el array
// el for echa recorre el array y aplicarle alguna accion
// a cada elemento le aplica una accion
// ArrayNumber.forEach((elemento) =>
//   elemento % 2 == 0
//     ? console.log("par" + elemento)
//     : console.log("impar" + elemento)
// );

/*****
Map 
Es similar al forEach ya que por cada valor en el array se aplica una accion , la diferencia 
es que map nos crea un array nuevo y forEach
******/

let arrayNuevo: any = [];

arrayNuevo = ArrayNumber.map((elemento) =>
  elemento % 2 == 0 ? "par" : "impar"
);

//   if (elemento % 2 == 0) {
//     return elemento;
//   }else{
//       return 'impar-'
//   }

console.log(arrayNuevo);
