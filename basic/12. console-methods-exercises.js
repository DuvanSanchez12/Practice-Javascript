// 1. Crea un función que utilice error correctamente
function mostrarError() {
    console.error("Este es un mensaje de error");
}
mostrarError();
// 2. Crea una función que utilice warn correctamente
function mostrarAdvertencia() {
    console.warn("Este es un mensaje de advertencia");
}
mostrarAdvertencia();
// 3. Crea una función que utilice info correctamente
function mostrarInformacion() {
    console.info("Este es un mensaje de información");
}
mostrarInformacion();
// 4. Utiliza table
function mostrarTabla() {
    const datos = [
        { nombre: "Juan", edad: 30 },
        { nombre: "Ana", edad: 25 },
        { nombre: "Luis", edad: 28 }
    ];
    console.table(datos);
}
mostrarTabla();

// 5. Utiliza group
function mostrarGrupo() {
    console.group("Grupo de Datos");
    console.log("Este es un mensaje dentro del grupo");
    console.groupEnd();
}
mostrarGrupo();

// 6. Utiliza time
function mostrarTiempo() {
    console.time("Tiempo de ejecución");
    for (let i = 0; i < 1000000; i++) {}
    console.timeEnd("Tiempo de ejecución");
}
mostrarTiempo();

// 7. Valida con assert si un número es positivo
function validarNumeroPositivo(num) {
    console.assert(num > 0, "El número no es positivo");
}
validarNumeroPositivo(-5);
validarNumeroPositivo(10);
// 8. Utiliza count
function contarLlamadas(funcion) {
    console.count(`Llamada a la función ${funcion.name}`);
}
contarLlamadas(mostrarError);
contarLlamadas(mostrarAdvertencia);

// 9. Utiliza trace
function mostrarTraza() {
    console.trace("Traza de la función");
}
mostrarTraza();

// 10. Utiliza clear
function limpiarConsola() {
    console.clear();
}