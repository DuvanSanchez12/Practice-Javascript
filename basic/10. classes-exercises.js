
// 1. Crea una clase que reciba dos propiedades
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
// 2. Añade un método a la clase que utilice las propiedades
const persona1 = new Persona("Ana", 25);
persona1.saludar();

// 3. Muestra los valores de las propiedades e invoca a la función
console.log(persona1.nombre);
console.log(persona1.edad);
persona1.saludar();

// 4. Añade un método estático a la primera clase
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }   

    static crearDesdeObjeto(obj) {
        return new Persona(obj.nombre, obj.edad);
    }
}

// 5. Haz uso del método estático
const persona2 = Persona.crearDesdeObjeto({ nombre: "Luis", edad: 30 });
persona2.saludar();

// 6. Crea una clase que haga uso de herencia
class Empleado extends Persona {
    constructor(nombre, edad, puesto) {
        super(nombre, edad);
        this.puesto = puesto;
    }

    saludar() {
        super.saludar();
        console.log(`Soy ${this.puesto}.`);
    }
}

// 7. Crea una clase que haga uso de getters y setters
class Producto {
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }
}

// 9. Utiliza los get y set y muestra sus valores
const producto1 = new Producto("Laptop", 1500);
console.log(producto1.nombre);
console.log(producto1.precio);
producto1.nombre = "Laptop Gaming";
producto1.precio = 2000;
console.log(producto1.nombre);
console.log(producto1.precio);
// 10. Sobrescribe un método de una clase que utilice herencia
const empleado1 = new Empleado("Pedro", 28, "Desarrollador");
empleado1.saludar();