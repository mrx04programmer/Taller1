/* let movies = ['Turno de dia', 'El vengador fantasma II', 'Todo el dia y una noche', 'El exorcismo de Dios', 'Una vida en un año'];

console.log(movies[2]);
console.log(`Longitud: ${movies.length}\n`);
console.log(`Ultimo elemento ${movies[movies.length-1]}`);
// Agregar un elemento al final:
//movies.push('Angry Birds')

// Eliminar el ultimo elemento:
// movies.pop()

// Mostrar como objeto arreglo
console.log(movies)
// Mostrar elemento por elemento realizando una iteración.
movies.forEach(function (elemento, index, array) {
    console.log(`Posición ${index} elemento ${elemento}`);
}); */

let aprendices=[];
let seguir=true;
while(seguir==true){
    aprendices.push(prompt("Ingrese nombre aprendiz"))
    seguir = confirm("Desea ingresar otro valor");
}

console.log(aprendices);
aprendices.forEach(function (elemento, index, array) {
    console.log(`Posición ${index} pertenece al elemento ${elemento}`);
});
let aprendices2 = [
    { primernombre: "Jeniffer", primerapellido: "Fajardo" },
    { primernombre: "Sandra", primerapellido: "Rueda" }
]
let nombrecompleto = aprendices.map(function (el, index, ar) {
    return `${el.primernombre} ${el.primerapellido}`;
})