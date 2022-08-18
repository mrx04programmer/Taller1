// Creación del objeto animal
const animal={
    // Atributos:
    nombre:"Felix",
    tipo: "gato",
    edad: "4",
    // Métodos:
    comer(){
        console.log(`El gato está comiendo`);
        // Mostrar un atributo del objeto:
        console.log(`El nombre del gato es : ${animal.nombre}`);
        console.log(`La edad del gato es : ${animal.edad}`);
    }
}
// Mostrar objeto completo
console.log(animal);
// Ejecutar un método de un objeto:
animal.comer();
// DOM -> Estructura que genera un documento html 