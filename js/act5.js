/*
Desarrolle un programa que muestre las cuatro figuras geométricas básicas (círculo,
triángulo, rectángulo, cuadrado) mediante cards con dos botones Perímetro y Área. Según la elección del usuario desplegar una ventana modal que permita ingresar los datos necesarios para calcular dicha operación, acorde a la figura seleccionada, esta debe incluir un botón Calcular que mostrará el resultado de la operación y un botón Cerrar que cierra la ventana modal.
*/ 
//Acceder al botón de abrir modal:

let btn_modal = document.querySelectorAll("abrirModal");

// Acceder a la ventana modal
let modal = document.getElementById("ventanaModal");

// Acceder al botón de cerrar ventana modal:
let btn_cerrarmodal = document.querySelector(".cerrarModal");

btn_modal.addEventListener("click", ()=>{
    modal.style.display="block";
});

// Cerrar con el botón
btn_cerrarmodal.addEventListener("click", ()=>{
    modal.style.display="none";
})

// Cerrar oprimiendo afuera de la ventana.
modal.addEventListener("click", ()=>{
    if (e.target == modal){
        modal.style.display="none";
    }
})