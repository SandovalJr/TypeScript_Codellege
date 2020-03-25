// Importar la clase triangulo
import {Triangulo} from "./triangulo.class";

EventListener();

function EventListener() {
  document
    .getElementById("btnCalcular")!
    .addEventListener("click", CalcularArea);
}

function CalcularArea() {
  const altura: number = Number(
    (<HTMLInputElement>document.getElementById("altura")).value
  );
  const base: number = Number(
    (<HTMLInputElement>document.getElementById("base")).value
  );

  const triangulo = new Triangulo(altura, base);
  console.log(triangulo.area);
}
