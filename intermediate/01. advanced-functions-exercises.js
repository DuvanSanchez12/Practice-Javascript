
// 1. Crea una función que retorne a otra función
function greet(name) {
    console.log(`Hola, ${name}!`);
}

function primerafuncion(name, saludo) {
    saludo(name);
}
primerafuncion("Carlos", greet);
// 2. Implementa una función currificada que multiplique 3 números
function multiplicar(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}
const resultado = multiplicar(2)(3)(4);
console.log(resultado);

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function potencia(base, exponente) {
    if (exponente === 0) return 1;
    return base * potencia(base, exponente - 1);
}
console.log(potencia(2, 3));

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(inicial) {
    let contador = inicial;
    return {
        increment: function() {
            contador++;
        },
        decrement: function() {
            contador--;
        },
        getValue: function() {
            return contador;
        }
    };
}
const counter = createCounter(0);
counter.increment();
console.log(counter.getValue());

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers) {
    const suma = numbers.reduce((acc, num) => acc + num, 0);
    return suma * multiplier;
}
console.log(sumManyTimes(2, 1, 2, 3, 40));
// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function sumaConCallback(callback, ...numbers) {
    const suma = numbers.reduce((acc, num) => acc + num, 0);
    callback(suma);
}
sumaConCallback(function(resultado) {
    console.log("El resultado de la suma es:", resultado);
}, 1, 2, 3, 4, 5);

// 7. Desarrolla una función parcial
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}
const multiplicarPor2 = crearMultiplicador(2);
console.log(multiplicarPor2(5));

// 8. Implementa un ejemplo que haga uso de Spread
const numeros = [1, 2, 3, 4, 5];
console.log(sumManyTimes(2, ...numeros));

// 9. Implementa un retorno implícito
const sumar = (a, b) => a + b;
console.log(sumar(5, 10));

// 10. Haz uso del this léxico
const persona = {
    nombre: "Laura",
    saludar: function() {
        const mostrarNombre = () => {
            console.log(`Hola, mi nombre es ${this.nombre}`);
        };
        mostrarNombre();
    }
};
persona.saludar();