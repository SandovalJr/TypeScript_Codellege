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
    id: 5,
    nombre: "Maria Fernanda ",
    edad: 27,
    sexo: "F",
  },
];

// const button = document.querySelector("#btnEjecutar");
// button?.addEventListener("click", EliminarUsuarios);

function EliminarUsuarios(Nombre: string, callback: Function) {
  console.log(callback);

  let longitudInicial = Personas.length;

  let PersonasNuevas = Personas.filter(
    (persona) => persona.nombre.toLocaleLowerCase() != Nombre
  );

  if (longitudInicial == Personas.length) {
    callback(true, Nombre);
  } else {
    callback(null, Nombre);
  }

  console.log(PersonasNuevas);
}

function MostrarUsuarios(err: string | null, respuesta: boolean) {
  if (err) {
    console.error(`el usuario ${respuesta}, no existe`);
    return;
  }

  const tbody = document.querySelector("#tbody");
  Personas.forEach((Persona) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${Persona.id}</td>
    <td> ${Persona.nombre}</td>
    <td>  ${Persona.edad}</td>
    <td>    ${Persona.sexo}</td>
    `;

    tbody?.appendChild(tr);
  });
}

let Salario: Array<any> = [
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
    salario: 3456,
  },
  {
    id: 4,
    salario: 6645,
  },
];

let getEmpleado = (id: number, callback: Function) => {
  // debugger
  let empleadodb = Personas.find((persona) => persona.id === id);
  // false or undefined
  if (!empleadodb) {
    callback("no existe un empleado con id " + id);
  } else {
    callback(null, empleadodb);
  }
};

let getSalario = (empleado: Persona, callback: Function) => {
  let salarioDB = Salario.find((salario) => salario.id === empleado.id);

  // console.log(salarioDB);

  if (!salarioDB) {
    callback(
      `no se encontro ningun salario para el usuario: ${empleado.nombre}`
    );
  } else {
    callback(null, {
      nombre: empleado.nombre,
      salario: salarioDB.salario,
    });
  }
};

// INVOCACION DE FUNCIONES
getEmpleado(3, (err: null | string, empleado: Persona) => {
  if (err) {
    return console.error("no existe");
  }

  getSalario(empleado, (err: null | string, resp: any) => {
    if (err) {
      console.log(err);
      return;
    }
    console.info(`El salario de ${resp.nombre} es de ${resp.salario}`);
  });

  // console.info(empleado);
});
