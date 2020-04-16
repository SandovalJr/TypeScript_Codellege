import { Persona } from "../temas_base/interface";
/*****
USO BASICO DE CALLBACKS
******/
// const arregloCallback1: Array<number> = [1, 2, 3, 4, 5, 6, 7];

// arregloCallback1.forEach((elemento) => {
//   console.log(elemento);
// });

// function main(callback: Function) {
//   alert("Primero ejecuto main y despues callback");
//   callback();
// }

// function callback() {
//   alert("hola callback");
// }

// main(callback);

/*****
EJERCICIO 2 CALLBACK
******/

function userName(SaludarUserName: Function) {
  let name = prompt("ingrese su nombre");
  SaludarUserName(name);
}

function SaludarUserName(nombre: string) {
  alert(`hola ${nombre}`);
}

// userName(SaludarUserName);

/*****
EJERCICIO 3 CALLBACKS
******/

function sumacallback(a: number, b: number, MostrarResultado: Function) {
  let r = a + b;
  MostrarResultado(r);
}

function MostrarResultado(res: number) {
  res > 6 ? alert(`Pasaste la materia ${res}`) : alert("no pasaste la materia");
}

// sumacallback(3, 5, MostrarResultado);

/*****
USO INTERMEDIO CALLBACKS
******/

let Personas: Array<Persona> = [
  {
    id: 1,
    nombre: "Elias",
    edad: 9,
    sexo: "M",
  },
  {
    id: 2,
    nombre: "Manuel ",
    edad: 26,
    sexo: "M",
  },
  {
    id: 3,
    nombre: "Daniela ",
    edad: 26,
    sexo: "F",
  },
  {
    id: 4,
    nombre: "Laura ",
    edad: 25,
    sexo: "F",
  },
  {
    id: 2,
    nombre: "Maria Fernanda ",
    edad: 27,
    sexo: "F",
  },
];
