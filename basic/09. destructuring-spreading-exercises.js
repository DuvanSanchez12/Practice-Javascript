const persona = {
    nombre: "Juan",
    edad: 30,
    direccion: {
        ciudad: "Madrid",
        pais: "España"
    }
};
// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
const array = [1, 2, 3, 4, 5];
const [primero, segundo] = array;
console.log(primero, segundo);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
const numeros = [1];
const [a, b = 2] = numeros;
console.log(a, b);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
const { nombres, edad } = persona;
console.log(nombres, edad);

// 4. Usa desestrsucturación para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
const { nombre: nombrePersona, edad: edadPersona } = persona;
console.log(nombrePersona, edadPersona);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
const { nombre, direccion: { ciudad } } = persona;
console.log(nombre, ciudad);

// 6. Usa propagación para combinar dos arrays en uno nuevo
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinados = [...array1, ...array2];
console.log(combinados);

// 7. Usa propagación para crear una copia de un array
const original = [1, 2, 3];
const copia = [...original];
console.log(copia);

// 8. Usa propagación para combinar dos objetos en uno nuevo
const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };
const combinado = { ...objeto1, ...objeto2 };
console.log(combinado);

// 9. Usa propagación para crear una copia de un objeto
const copiaObjeto = { ...objeto1 };
console.log(copiaObjeto);

// 10. Combina desestructuración y propagación
const { direccion, ...resto } = persona;
const nuevaPersona = { ...resto, direccion: { ...direccion, ciudad: "Barcelona" } };
console.log(nuevaPersona);