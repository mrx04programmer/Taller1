/*Consulte el siguiente apartado del objeto String en JavaScript.Utilizando funciones de
JavaScript desarrolle un programa en el que el usuario ingrese una palabra, pueda elegir
entre las siguientes opciones:
La longitud de la palabra
La palabra convertida en mayúsculas
La palabra convertida en minúsculas
El primer carácter de la palabra*/


function act1(){
    let palabra = document.getElementById('palabra').value;
    let selector = parseInt(document.getElementById('selector').value);
    if (selector == 1){
        alert(`Palabra : ${palabra}\n tiene una longitud de ${palabra.length}`);
    }
    else if (selector == 2){
        alert(`palabra en mayúscula: ${palabra.toUpperCase()}`);
    }
    else if (selector == 3){
        alert(`palabra en minuscula: ${palabra.toLowerCase()}`);
    }
    else if (selector == 4){
        alert(`Primer caracter de ${palabra} es ${palabra.charAt(0)}`);
    }

}