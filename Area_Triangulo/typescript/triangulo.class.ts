// El export es para que sea exportable
export class Triangulo {
  public base: number = 0;
  public altura: number = 0;
  public area: number = 0;

  constructor(base: number, altura: number) {
    this.altura = altura;
    this.base = base;
    this.area = (this.base * this.altura) / 2;
  }
}
