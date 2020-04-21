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

 3.- Nombre del centro a la cual pertenece la carrera Nutricion [LISTO]

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

const getCentroEstudio = async (idCarrera: number) => {
  const SearchCE = CentroEstudios.find((ce) => ce.id == idCarrera);
  if (!SearchCE) {
    throw new Error("El centro de estudios no existe");
  } else {
    return SearchCE;
  }
};

// 2.- Nombre de la carrera en la cual estudia el alumno con id 2 [LISTO]
const getInformacion = async (id: number) => {
  const alumno = await getAlumno(id);
  const carrera = await getCarrera(alumno);
  //   const centro2 = await getCentroEstudios3(alumno.idCarrera);

  const cestudios = await getCentroEstudio(alumno.idCarrera);
  return `El alumno ${alumno.Nombre} estudia la carrera ${carrera.carrera} en el centro de estudios ${cestudios.Nombre} `;
};

// INVOCAMOS
getInformacion(4)
  .then((mensaje: string) => console.log(mensaje))
  .catch((err: Error) => console.error(err.message));

/*****
  PUNTO 3
  
  ******/
// unicamente punto 3
const getCentroEstudios3 = async (id: number) => {
  // debugger
  const CarreraCE = Carrera.find((carrera) => carrera.idCarrera == id);
  const CE = CentroEstudios.find(
    (centroE) => centroE.id == CarreraCE?.idCentroEstudios
  );

  if (!CE) {
    throw new Error("No existe ningun centro de estudio");
  } else {
    return CE;
  }
};
//  3.- Nombre del centro a la cual pertenece la carrera Nutricion [LISTO]
const getCEInvocacion = async (id: number) => {
  const centro = await getCentroEstudios3(id);
  return `La carrera de nutricion pertenece al centro de estudios de: ${centro.Nombre}`;
};

getCEInvocacion(3)
  .then((mensaje: string) => console.log(mensaje))
  .catch((error: Error) => console.error(error));
