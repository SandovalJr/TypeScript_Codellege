// para importar la interfaz de persona
import { Persona } from "./interface";

/*****
 * SPREAD ARRAY
Operador de propagacion 

permite que una iterable como una expresión de matriz o una cadena se expanda en lugares donde se esperan cero o más argumentos

******/

const arreglo1: Array<number> = [1, 2, 3, 4, 5, 6, 7];
const arreglo2: Array<number> = [8, 9, 10];
const arreglo3 = [...arreglo1, ...arreglo2];

const arreglo4 = [...arreglo3, "Hola Mundo"];

// console.log(arreglo3);
// console.log(arreglo4);

/*****
SPREAD OBJECTS

con ? damos a entender que el dato que se enviara es opcional 
******/

const ObjetoPersona1: Persona = {
  nombre: "Elias",
  apellido: "Sandoval",
  edad: 9,
  sexo: "Masculino",
};
console.log(ObjetoPersona1);

const ObjetoPersona2 = {
  ...ObjetoPersona1,
  edad: 25,
};

console.log(ObjetoPersona2);

// se pone ? para dar a entender que es posible que ese valor no llegue
function SumarValores(x?: number, y?: number, z?: number) {
  // se pone ! para dar a entender que es posible que ese valor no llegue
  let suma = x! + y! + z!;

  console.log(suma);
}

// SumarValores(arreglo1[1], arreglo2[3], arreglo3[9]);

SumarValores(...arreglo1);
