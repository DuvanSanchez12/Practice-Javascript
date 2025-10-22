// 1. Exporta una función
export function sumar(a, b) {
    return a + b;
}

// 2. Exporta una constante
export const PI = 3.14159;

// 3. Exporta una clase
export class Circulo {
    constructor(radio) {
        this.radio = radio;
    }
    area() {
        return PI * this.radio * this.radio;
    }
}

// 4. Importa una función
import { sumar } from './path/to/module.js';

// 5. Importa una constante
import { PI } from './path/to/module.js';

// 6. Importa una clase
import { Circulo } from './path/to/module.js';

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function restar(a, b) {
    return a - b;
}

export const E = 2.71828;

export class Cuadrado {
    constructor(lado) {
        this.lado = lado;
    }
    area() {
        return this.lado * this.lado;
    }
}
// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
import restar, { E, Cuadrado } from './path/to/module.js';

// 9. Exporta una función, una constante y una clase desde una carpeta
export function multiplicar(a, b) {
    return a * b;
}

export const GRAVEDAD = 9.81;

export class Triangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    area() {
        return (this.base * this.altura) / 2;
    }
}

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
function fib(n) {
    if (n == 1) return 1;
    if (n == 0) return 0

    return fib(n-1) + fib(n-2)
}

console.log(fib(43));