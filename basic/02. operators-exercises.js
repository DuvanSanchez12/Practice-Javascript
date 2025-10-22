// 1. Crea una variable para cada operación aritmética
let suma = 5 + 3
let resta = 5 - 3
let multiplicacion = 5 * 3
let division = 5 / 3
let modulo = 5 % 3
let exponente = 5 ** 3
let incremento = 5
incremento++
let decremento = 5
decremento--

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let asignacionSuma = suma
let asignacionResta = resta
let asignacionMultiplicacion = multiplicacion
let asignacionDivision = division
let asignacionModulo = modulo
let asignacionExponente = exponente
let asignacionIncremento = incremento
let asignacionDecremento = decremento

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 == "5")          // Igualdad
console.log(5 === 5)           // Igualdad estricta
console.log(5 != 3)            // Desigualdad
console.log(5 !== "5")         // Desigualdad estricta
console.log(5 > 3)             // Mayor que

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 === "5")         // Igualdad estricta
console.log(5 != 5)            // Desigualdad
console.log(5 !== 5)           // Desigualdad estricta
console.log(5 < 3)             // Menor que
console.log(5 >= 6)            // Mayor o igual que

// 5. Utiliza el operador lógico and
console.log(true && true)      // true

// 6. Utiliza el operador lógico or
console.log(true || false)     // true

// 7. Combina ambos operadores lógicos
console.log((5 > 3) && (3 < 1) || (2 === 2)) // true

// 8. Añade alguna negación
console.log(!(5 > 3))          // false

// 9. Utiliza el operador ternario
let resultado = (5 > 3) ? "5 es mayor que 3" : "5 no es mayor que 3"

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(((5 + 3) > 7) && ((10 / 2) === 5)) // true