// 1. Captura una excepción utilizando try-catch
try {
    // Código que puede lanzar una excepción
    throw new Error("Error genérico");
} catch (error) {
    console.error("Se capturó una excepción:", error.message);
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    throw new Error("Error genérico");
} catch (error) {
    console.error("Se capturó una excepción:", error.message);
} finally {
    console.log("Esto se ejecuta siempre");
}

// 3. Lanza una excepción genérica
function lanzarExcepcion() {
    throw new Error("Error genérico lanzado");
}
lanzarExcepcion();
// 4. Crea una excepción personalizada
class MiExcepcion extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "MiExcepcion";
    }
}
throw new MiExcepcion("Esta es una excepción personalizada");
// 5. Lanza una excepción personalizada
function lanzarExcepcionPersonalizada() {
    throw new MiExcepcion("Error personalizado lanzado");
}
lanzarExcepcionPersonalizada();
// 6. Lanza varias excepciones según una lógica definida
function lanzarExcepcionesSegunLogica(valor) {
    if (valor < 0) {
        throw new MiExcepcion("Valor negativo no permitido");
    } else if (valor === 0) {
        throw new Error("Error genérico para valor cero");
    }
}
try {
    lanzarExcepcionesSegunLogica(-1);
} catch (error) {
    console.error("Se capturó una excepción:", error.message);
}
try {
    lanzarExcepcionesSegunLogica(0);
} catch (error) {
    console.error("Se capturó una excepción:", error.message);
}
// 7. Captura varias excepciones en un mismo try-catch
try {
    lanzarExcepcionesSegunLogica(-1);
    lanzarExcepcionesSegunLogica(0);
} catch (error) {
    console.error("Se capturó una excepción:", error.message);
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const valores = ["10", "20", "30", "no es un número"];
for (const valor of valores) {
    try {
        const resultado = parseFloat(valor);
        if (isNaN(resultado)) {
            throw new Error("No se pudo convertir a float");
        }
        console.log(`El valor ${valor} es ${resultado}`);
    } catch (error) {
        console.error("Se capturó una excepción:", error.message);
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function verificarPropiedad(obj, prop) {
    if (!obj.hasOwnProperty(prop)) {
        throw new MiExcepcion(`La propiedad ${prop} no existe en el objeto`);
    }
}
const objeto = { nombre: "Juan", edad: 30 };
try {
    verificarPropiedad(objeto, "direccion");
} catch (error) {
    console.error("Se capturó una excepción:", error.message);
}
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function realizarOperacionConReintentos(operacion, maxReintentos = 10) {
    let intentos = 0;
    while (intentos < maxReintentos) {
        try {
            operacion();
            break; // Si la operación tiene éxito, salimos del bucle
        } catch (error) {
            console.error(`Error en intento ${intentos + 1}:`, error.message);
            intentos++;
        }
    }
    if (intentos === maxReintentos) {
        console.error("Se alcanzó el número máximo de reintentos");
    }
}