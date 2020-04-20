// Importamos las interfaces
import { Alumnos } from "../TareaCallBacks/InterfaceHW";
import { Carrera } from "../TareaCallBacks/InterfaceHW";
import { CentroEstudios } from "../TareaCallBacks/InterfaceHW";

const Alumnos: Array<Alumnos> = [
  {
    id: 1,
    Nombre: "Alicia Villareal",
    idCarrera: 3,
  },
  {
    id: 2,
    Nombre: "Blanca Díaz",
    idCarrera: 2,
  },
  {
    id: 3,
    Nombre: "Daniel Palacios",
    idCarrera: 4,
  },
  {
    id: 4,
    Nombre: "Victor Lemus",
    idCarrera: 1,
  },
  {
    id: 5,
    Nombre: "Karen Sanchez",
    idCarrera: 5,
  },
];

const Carrera: Array<Carrera> = [
  {
    idCarrera: 1,
    carrera: "Mercadotecnia",
    idCentroEstudios: 1,
  },
  {
    idCarrera: 2,
    carrera: "Historia",
    idCentroEstudios: 3,
  },
  {
    idCarrera: 3,
    carrera: "Nutricion",
    idCentroEstudios: 2,
  },
  {
    idCarrera: 4,
    carrera: "Tics",
    idCentroEstudios: 1,
  },
];

const CentroEstudios: Array<CentroEstudios> = [
  {
    id: 1,
    Nombre: "Ciencias y tecnologias",
  },
  {
    id: 2,
    Nombre: "Salud",
  },
];

/********Problemas**********
 1.-Aplicar Interfaces a cada Arreglo [LISTO]

 2.- Nombre de la carrera en la cual estudia el alumno con id 2 [LISTO]

 3.- Nombre del centro a la cual pertenece la carrera Nutricion

 4.- Nombre del centro al cual pertenece la carrera del alumno Victor Lemus.


 Nota: cree las funciones necesarias, implementado callbacks como en el ejemplo del salario.
        Aunque en los problemas maneje un  dato objetivo, tiene que tener validación para
        los casos en el que el dato no exista

******************/

let getAlumno = (id: number, callback: Function) => {
  // debugger
  let alumnodb = Alumnos.find((alum) => alum.id === id);

  if (!alumnodb) {
    callback(`El alumno con el id: ${id}`);
  } else {
    callback(null, alumnodb);
    // console.log(alumnodb);
  }
};

let getCarrera = (alumno: Alumnos, callback: Function) => {
  let carreraDB = Carrera.find((carrera) => carrera.idCarrera == alumno.id);
  // console.log(carreraDB);
  if (!carreraDB) {
    console.error(`No se encontro carrera de el alumno ${alumno.Nombre}`);
  } else {
    //   console.log("si entro");
    callback(null, {
      Nombre: alumno.Nombre,
      carrera: carreraDB.carrera,
    });
  }
};

let getCentroEstudios = (idcarrera: number, callback: Function) => {
  let carreraNutricion = Carrera.find(
    (carrera) => carrera.idCarrera === idcarrera
  );

  let centroEstudioDB = CentroEstudios.find(
    (Nombre) => Nombre.id == carreraNutricion?.idCentroEstudios );
  console.log(carreraNutricion);
  console.log(centroEstudioDB);
 
  
  
};

// INVOCACION DE FUNCIONES
//  2.- Nombre de la carrera en la cual estudia el alumno con id 2 [LISTO]
getAlumno(2, (err: null | string, alumno: Alumnos) => {
  //   debugger;
  if (err) {
    return console.error("No existe el alumno");
  }

  getCarrera(alumno, (err: null | string, resp: any) => {
    if (err) {
      console.log(err);
      return;
    }
    console.info(`El alumno ${resp.Nombre} estudia la carrera ${resp.carrera}`);
  });
});


// 3.- Nombre del centro a la cual pertenece la carrera Nutricion
getCentroEstudios(3, (err: null | string, centroestdio: CentroEstudios) => {
});
