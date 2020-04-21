// Importamos las interfaces
import { Alumnos } from "./InterfaceHW";
import { Carrera } from "./InterfaceHW";
import { CentroEstudios } from "./InterfaceHW";

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

/*****
2.- Nombre de la carrera en la cual estudia el alumno con id 2 [LISTO]

 3.- Nombre del centro a la cual pertenece la carrera Nutricion []

 4.- Nombre del centro al cual pertenece la carrera del alumno Victor Lemus. 
******/

const getAlumno = async (id: number) => {
  const alumno = Alumnos.find((alum) => alum.id == id);

  if (!alumno) {
    throw new Error(`No existe el alumno con el id: ${id}`);
  } else {
    return alumno;
  }
};

const getCarrera = async (alumno: Alumnos) => {
  const carreraAlumno = Carrera.find(
    (car) => car.idCarrera == alumno.idCarrera
  );
  if (!carreraAlumno) {
    throw new Error(`El alumno ${alumno.Nombre} no se le asigno una carrera`);
  } else {
    return {
      alumno: alumno.Nombre,
      carrera: carreraAlumno.carrera,
    };
  }
};



// 2.- Nombre de la carrera en la cual estudia el alumno con id 2 [LISTO]

const getInformacion = async (id: number) => {
  const alumno = await getAlumno(id);
  const carrera = await getCarrera(alumno);
  return `El alumno ${alumno.Nombre} estudia la carrera ${carrera.carrera}`;
};

// INVOCAMOS
getInformacion(2)
  .then((mensaje: string) => console.log(mensaje))
  .catch((err: Error) => console.error(err.message));
