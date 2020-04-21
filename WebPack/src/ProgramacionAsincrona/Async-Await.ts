// const getNombre = (): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     // console.log("Me estoy resolviendo.........");
//     if (true) {
//       resolve("Elias Sandoval");
//     } else {
//       reject(new Error("No hay nombre  de usuario"));
//     }
//   });
// };

// /*****
// Async = la funcion la convierte en una promesa (resolve)

// Await = le digo a la promesa que se ejecute , no guarda toda la promesa unicamente el resolve o reject qeu se mande
// ******/

// async function saludos() {
//   console.log("Se esta ejecutando la funcion async ");

//   let nombreRespuesta: string | undefined = undefined;

//   //   getNombre().then((nombre: string) => {
//   //     nombreRespuesta = nombre;
//   //     console.log("apenas me resolvi");
//   //     // console.log(`Hola usuario: ${nombreRespuesta}`);
//   //   });

//   nombreRespuesta = await getNombre();

//   //   prubea();
//   if (nombreRespuesta == undefined) {
//     throw new Error("El nombre no existe");
//   }

//   return `Hola usuario: ${nombreRespuesta}`;
// }

// // function prubea() {
// //   let suma = 2 + 2;
// //   console.log(suma);
// // }

// // console.log("primero");

// saludos()
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((error: Error) => {
//     alert(error.message);
//   });
// console.log("segundo");

// todo lo que sea de sgeundo plano es asincrono

// IMPORTO INTERFAZ

import { Persona } from "../TareaCallBacks/InterfaceHW";
import { Salario } from "../TareaCallBacks/InterfaceHW";
let Personas: Array<Persona> = [
  {
    id: 1,
    nombre: "Jose Carlos",
    edad: 23,
    sexo: "M",
  },
  {
    id: 2,
    nombre: "Manuel Medina",
    edad: 26,
    sexo: "M",
  },
  {
    id: 3,
    nombre: "Alejandra Lopez",
    edad: 19,
    sexo: "F",
  },
  {
    id: 4,
    nombre: "Laura Rubalcava",
    edad: 25,
    sexo: "F",
  },
  {
    id: 5,
    nombre: "Maria Fernanda",
    edad: 23,
    sexo: "F",
  },
];

let Salario: Array<Salario> = [
  {
    id: 1,
    salario: 5000,
  },
  {
    id: 2,
    salario: 4000,
  },
  {
    id: 3,
    salario: 3000,
  },
  {
    id: 4,
    salario: 4000,
  },
];

const getSalario = async (id: number) => {
  const Empleado = Personas.find((persona) => persona.id == id);

  if (!Empleado) {
    throw new Error(`Empleado con id ${id} no existe en la base de datos`);
  } else {
    return Empleado;
  }
};

const getInformacion = async (id: number) => {
  const Empleado = await getSalario(id);
  console.log(Empleado);
  
};



getInformacion(3)
.then()
.catch((err:Error)=>  console.log(err.message));
