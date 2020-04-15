/*****
 Caracteristicas de los parametros de las funciones

 Explicaremos las caracteristicas que tienen los parametros de las funciones

 1- Paramtros obligatorios
 2- Parametros opcionales
 3- Parametros default

Notas:
El primer parametro no puede ser opcional 

******/

// paramtros obligatorios

function suma(x: number) {
  let suma = x;
  console.log(suma);
}

suma(10);

//Paramtros opcionales
function opcionales(x: number, y?: boolean, ultimo: number = 10) {
  let suma = x + ultimo;
  y != undefined ? console.log(suma) : console.log("no se tuvo a y: " + suma);
  //   console.log(suma);
}

opcionales(10, true);
