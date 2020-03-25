"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triangulo_class_1 = require("./triangulo.class");
EventListener();
function EventListener() {
    document
        .getElementById("btnCalcular")
        .addEventListener("click", CalcularArea);
}
function CalcularArea() {
    var altura = Number(document.getElementById("altura").value);
    var base = Number(document.getElementById("base").value);
    var triangulo = new triangulo_class_1.Triangulo(altura, base);
    console.log(triangulo.area);
}
