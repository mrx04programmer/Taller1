let nombre = prompt('Digite su nombre:');
let apellido = prompt('Digite su apellido:')
alert(`Nombre en mayúsculas: ${nombre.toLocaleUpperCase()}\n Su longitud es de ${nombre.length}\n Apellido en minuscula: ${apellido.toLowerCase()}\n Primera letra del nombre:${nombre.charAt(0)}\n Unión: ${nombre.charAt(0)}${apellido}`);