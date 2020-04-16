// La interfaz se usa para darle la estructura del documento
export interface Persona {
  id?: number;
  nombre: string;
  apellido?: string;
  edad: number;
  sexo?: string;
  estatura?: number;
}

//   const ObjetoPersonaInterface: Persona = {
//     nombre: "Elias",
//     apellido: "Sandoval",
//     edad: 9,
//     sexo: "Masculino",
//   };
