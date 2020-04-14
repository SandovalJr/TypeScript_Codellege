let v1: number = 0;
// console.log(v1);
let v2: string = "hola mundo";
let v3: boolean = true;

let array1:Array<any> = [54565,"hola"];


function Numerica(x: number, y: number): number | null {
  let r: number = x + y;

  if (isNaN(r)) {
    return null;
  }
  return r;
}
console.log(Numerica(7, 8));

const btnIniciar: HTMLElement = document.getElementById("btnIniciar")!;

btnIniciar.addEventListener("click", CalcularEdadCasarse);

function CalcularEdadCasarse() {
  const edadUsuario: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("edadUsuario")
  );

  const EUsuario: number = Number(edadUsuario.value);
  let resultado: number = EUsuario + 20;

  const resAlerta: HTMLDivElement = <HTMLDivElement>(
    document.querySelector("#resultado")
  );

  resAlerta.innerText = `Te vas a casar cuando tengas ${resultado}`;
}
