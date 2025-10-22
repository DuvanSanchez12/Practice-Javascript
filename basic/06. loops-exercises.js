// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(suma);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const nombres = ["Ana", "Luis", "Pedro", "Maria"];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const texto = "Hola Mundo";
let contadorVocales = 0;
for (let i = 0; i < texto.length; i++) {
    const letra = texto[i].toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        contadorVocales++;
    }
}
console.log(contadorVocales);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const numeros = [1, 2, 3, 4, 5];
let producto = 1;
for (let i = 0; i < numeros.length; i++) {
    producto *= numeros[i];
}
console.log(producto);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto
const cadena = "Hola";
let cadenaInvertida = "";
for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
}
console.log(cadenaInvertida);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0;
let b = 1;
let fibonacci = [a, b];
for (let i = 2; i < 10; i++) {
    let siguiente = a + b;
    fibonacci.push(siguiente);
    a = b;
    b = siguiente;
}
console.log(fibonacci);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const numeross = [5, 12, 8, 20, 3];
const mayoresA10 = [];
for (let i = 0; i < numeross.length; i++) {
    if (numeross[i] > 10) {
        mayoresA10.push(numeross[i]);
    }
}
console.log(mayoresA10);