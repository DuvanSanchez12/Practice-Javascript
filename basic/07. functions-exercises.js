// 1. Crea una función que reciba dos números y devuelva su suma
function sumar(a, b) {
    return a + b;
}

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function encontrarMayor(arr) {
    return Math.max(...arr);
}

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(str) {
    const vocales = "aeiouAEIOU";
    let contador = 0;
    for (let char of str) {
        if (vocales.includes(char)) {
            contador++;
        }
    }
    return contador;
}

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function convertirAMayusculas(arr) {
    return arr.map(str => str.toUpperCase());
}

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function encontrarElementosComunes(arr1, arr2) {
    return arr1.filter(elemento => arr2.includes(elemento));
}

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumarNumerosPares(arr) {
    return arr.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevarAlCuadrado(arr) {
    return arr.map(num => num ** 2);
}

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirPalabras(str) {
    return str.split(" ").reverse().join(" ");
}

// 10. Crea una función que calcule el factorial de un número dado
function calcularFactorial(num) {
    if (num === 0) return 1;
    return num * calcularFactorial(num - 1);
}