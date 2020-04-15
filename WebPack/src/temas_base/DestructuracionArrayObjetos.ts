// Las propiedades deben llarmarse igual

const objetosValores = {
  perrito: 2,
  b: 3,
  c: 4,
  d: 5,
};

// console.log(objetosValores.c);

const { perrito, b, c } = objetosValores;

console.log(perrito, b, c);

const arreglo: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const [v, w, z] = arreglo;
console.log(w, z, v);
