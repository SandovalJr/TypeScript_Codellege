const NumeroRandom = Math.floor(Math.random() * 10);
console.log(NumeroRandom);

// Condicionales
// if (NumeroRandom >= 6) {
//   alert("pasaste " + NumeroRandom);
// } else {
//   alert("no pasaste " + NumeroRandom);
// }

// ifTenirarios
// NumeroRandom >= 6
//   ? alert(`Pasaste con ${NumeroRandom}`)
//   : alert("No pasaste " + NumeroRandom);

const n1: number = 11;

let numeroObtenido =
  n1 == 5 ? "Cinco" : n1 == 7 ? "Siete" : n1 == 1 ? "Once" : "Es otro numero";
console.log(numeroObtenido);



// operadores restrictivos comparan que el tipo de dato y el contenido sean iguales
let x: any = 7;
let y: any = "7";


x===y ? alert('es igual'): alert('no es igual')