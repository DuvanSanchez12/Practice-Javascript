// 1. Crea un array que almacene cinco animales
const animales = ["Perro", "Gato", "Elefante", "León", "Tigre"];

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("Jirafa");
animales.push("Zebra");

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1);

// 4. Crea un set que almacene cinco libros
const libros = new Set(["El Quijote", "1984", "El Hobbit", "Cien años de soledad", "Orgullo y prejuicio"]);

// 5. Añade dos más. Uno de ellos repetido
libros.add("El Principito");
libros.add("1984");

// 6. Elimina uno concreto a tu elección
libros.delete("1984");

// 7. Crea un mapa que asocie el número del mes a su nombre
const meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)) {
    console.log(meses.get(5));
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano", ["Junio", "Julio", "Agosto"]);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
const array = ["a", "b", "c", "a"];
const set = new Set(array);
const map = new Map();
map.set("letras", set);