const getNombre = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    // console.log("Me estoy resolviendo.........");
    if (false) {
      resolve("Elias Sandoval");
    } else {
      reject(new Error("No hay nombre  de usuario"));
    }
  });
};

/*****
Async = la funcion la convierte en una promesa (resolve)

Await = le digo a la promesa que se ejecute , no guarda toda la promesa unicamente el resolve o reject qeu se mande
******/

async function saludos() {
  let nombreRespuesta: string | undefined = undefined;

  //   getNombre().then((nombre: string) => {
  //     nombreRespuesta = nombre;
  //     console.log("apenas me resolvi");
  //     // console.log(`Hola usuario: ${nombreRespuesta}`);
  //   });

  nombreRespuesta = await getNombre();

  prubea();
  if (nombreRespuesta == undefined) {
    throw new Error("El nombre no existe");
  }

  return `Hola usuario: ${nombreRespuesta}`;
}

function prubea() {
  let suma = 2 + 2;
  console.log(suma);
}

saludos()
  .then((valor) => {
    console.log(valor);
  })
  .catch((error: Error) => {
    alert(error.message);
  });

// todo lo que sea de sgeundo plano es asincrono
