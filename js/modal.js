//Acceder al botón de abrir modal:

let btn_modal = document.getElementById("abrirModal");

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