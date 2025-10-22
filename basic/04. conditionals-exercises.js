// 1. Imprime por consola tu nombre si una variable toma su valor
const nombre = "Juan";
if (nombre) {
    console.log(nombre);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const contraseña = "1234";
if (nombre === "Juan" && contraseña === "1234") {
    console.log("Usuario y contraseña correctos");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
const numero = 5;
if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
const edad = 17;
if (edad >= 18) {
    console.log("La persona puede votar");
} else {
    const añosFaltantes = 18 - edad;
    console.log(`La persona no puede votar. Le faltan ${añosFaltantes} años.`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
const categoria = (edad >= 18) ? "adulto" : "menor";

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
const mes = 4;
if (mes >= 3 && mes <= 5) {
    console.log("Estamos en primavera");
} else if (mes >= 6 && mes <= 8) {
    console.log("Estamos en verano");
} else if (mes >= 9 && mes <= 11) {
    console.log("Estamos en otoño");
} else {
    console.log("Estamos en invierno");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Este mes tiene 31 días");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Este mes tiene 30 días");
        break;
    case 2:
        console.log("Este mes tiene 28 o 29 días");
        break;
    default:
        console.log("Mes inválido");
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
const idioma = "es";
switch (idioma) {
    case "es":
        console.log("Hola");
        break;
    case "en":
        console.log("Hello");
        break;
    case "fr":
        console.log("Bonjour");
        break;
    default:
        console.log("Idioma no soportado");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Estamos en primavera");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Estamos en verano");
        break;
    case 2:
        console.log("Estamos en otoño");
        break;
    default:
        console.log("Estamos en invierno");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Este mes tiene 31 días");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Este mes tiene 30 días");
        break;
    case 2:
        console.log("Este mes tiene 28 o 29 días");
        break;
    default:
        console.log("Mes inválido");
}