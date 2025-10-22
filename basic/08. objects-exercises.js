// 1. Crea un objeto con 3 propiedades
let objeto = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

// 2. Accede y muestra su valor
console.log(objeto.nombre);
console.log(objeto.edad);
console.log(objeto.ciudad);

// 3. Agrega una nueva propiedad
objeto.pais = "España";

// 4. Elimina una de las 3 primeras propiedades
delete objeto.edad;

// 5. Agrega una función e invócala
objeto.saludar = function() {
    console.log("Hola, mi nombre es " + this.nombre);
};
objeto.saludar();

// 6. Itera las propiedades del objeto
for (let propiedad in objeto) {
    console.log(propiedad + ": " + objeto[propiedad]);
}

// 7. Crea un objeto anidado
objeto.direccion = {
    calle: "Gran Vía",
    numero: 28,
    ciudad: "Madrid"
};

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(objeto.direccion.calle);
console.log(objeto.direccion.numero);
console.log(objeto.direccion.ciudad);

// 9. Comprueba si los dos objetos creados son iguales
let objeto2 = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    pais: "España",
    direccion: {
        calle: "Gran Vía",
        numero: 28,
        ciudad: "Madrid"
    }
};




console.log(JSON.stringify(objeto) === JSON.stringify(objeto2));

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(objeto.nombre === objeto2.nombre);
console.log(objeto.direccion.calle === objeto2.direccion.calle);
