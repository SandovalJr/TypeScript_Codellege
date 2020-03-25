"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Triangulo = (function () {
    function Triangulo(base, altura) {
        this.base = 0;
        this.altura = 0;
        this.area = 0;
        this.altura = altura;
        this.base = base;
        this.area = (this.base * this.altura) / 2;
    }
    return Triangulo;
}());
exports.Triangulo = Triangulo;
