const NumeroRandom = Math.floor(Math.random() * 10);
console.log(NumeroRandom);


// Condicionales
// if (NumeroRandom >= 6) {
//   alert("pasaste " + NumeroRandom);
// } else {
//   alert("no pasaste " + NumeroRandom);
// }


// ifTenirarios
NumeroRandom >= 6
  ? alert(`Pasaste con ${NumeroRandom}`)
  : alert("No pasaste " + NumeroRandom);
