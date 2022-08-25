/*
Desarrolle un programa en el que el usuario pueda ingresar el valor de los tres lados de un
triángulo y le determine qué tipo de triángulo es (equilátero, isósceles, escaleno). Mostrar
el resultado en una alerta.
*/ 

function vTriangulo(){ // Verificar Triangulo
    let l1 = document.getElementById('lado1').value;
    let l2 = document.getElementById('lado2').value;
    let l3 = document.getElementById('lado3').value;
    
    if (l1 == l2 && l2 != l3){
        alert("El triángulo es Isósceles");
    }
    else if(l1 == l3 && l2 !=l1){
        alert("El triángulo es Isósceles");
    }
    else if (l1 == l2 && l2 == l3){
        alert("El triángulo es Equilatero");
    }
    else if (l1 != l2 && l2 != l3){
        alert("El triángulo es Escaleno")
    }
} 