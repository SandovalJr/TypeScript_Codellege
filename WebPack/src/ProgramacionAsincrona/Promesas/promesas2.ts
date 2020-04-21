let usuarios: Array<any> = [
  {
    id: 1,
    nombre: "Marcos",
  },
  {
    id: 2,
    nombre: "Lena",
  },
];

let telefonos: Array<any> = [
  {
    id: 1,
    tel: 12345,
  },
  {
    id: 2,
    tel: 45458485,
  },
];
// CREAMOS PROMESAS

const ObtenerUsuario = (id: number): Promise<any> => {
  return new Promise((res, rej) => {
    if (usuarios.find((usuario) => usuario.id === id)) {
      console.log("El usuario existe");
      res(ObtenerTelefono(id));
    } else {
      rej("El usuario no existe");
    }
  });
};

const ObtenerTelefono = (id: number): Promise<any> => {
  return new Promise((res, rej) => {
    if (telefonos.find((tel) => tel.id === id)) {
      let telefonoExiste = telefonos.find((tel2) => tel2.tel);
      res(`El telefono existe y es ${telefonoExiste.tel}`);
    } else {
      rej("El tel no existe y es ");
    }
  });
  
};

// INVOCAMOS OBTENER USUARIO
ObtenerUsuario(2)
  .then((res) => {
    return res;
  })
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((err) => {
    console.log(err);
  });
