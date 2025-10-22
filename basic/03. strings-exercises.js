// 1. Concatena dos cadenas de texto
const cadena1 = "Hola";
const cadena2 = "Mundo";
const resultado = cadena1 + " " + cadena2;

// 2. Muestra la longitud de una cadena de texto
const longitud = resultado.length;

// 3. Muestra el primer y último carácter de un string
const primerCaracter = resultado.charAt(0);
const ultimoCaracter = resultado.charAt(longitud - 1);

// 4. Convierte a mayúsculas y minúsculas un string
const enMayusculas = resultado.toUpperCase();
const enMinusculas = resultado.toLowerCase();

// 5. Crea una cadena de texto en varias líneas
const cadenaMultilinea = `Esta es una cadena de texto
que ocupa varias líneas`;

// 6. Interpola el valor de una variable en un string
const nombre = "Juan";
const saludo = `Hola, ${nombre}!`;

// 7. Reemplaza todos los espacios en blanco de un string por guiones
const conGuiones = resultado.replace(/ /g, "-");

// 8. Comprueba si una cadena de texto contiene una palabra concreta
const contieneHola = resultado.includes("Hola");

// 9. Comprueba si dos strings son iguales
const sonIguales = (cadena1 === cadena2);

// 10. Comprueba si dos strings tienen la misma longitud
const mismaLongitud = (cadena1.length === cadena2.length);