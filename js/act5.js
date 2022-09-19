/*
Desarrolle un programa que muestre las cuatro figuras geométricas básicas (círculo,
triángulo, rectángulo, cuadrado) mediante cards con dos botones Perímetro y Área. Según la elección del usuario desplegar una ventana modal que permita ingresar los datos necesarios para calcular dicha operación, acorde a la figura seleccionada, esta debe incluir un botón Calcular que mostrará el resultado de la operación y un botón Cerrar que cierra la ventana modal.
*/ 

let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let c3 = document.querySelector(".c3");
let c4 = document.querySelector(".c4");
let c5 = document.querySelector(".c5");
let c6 = document.querySelector(".c6");
let c7 = document.querySelector(".c7");
let c8 = document.querySelector(".c8");

 dash.addEventListener("click", (e)=>{
    // Triangulo *********************************************************
    if(e.target.id=="tPerimetro"){
        let resp = document.querySelector(".respuestat");
        modal = document.getElementById("tPerimetroModal");
        modal.style.visibility="visible";
        let calcular = document.getElementById("calcular1");
        calcular.addEventListener("click", ()=>{
            let r = parseInt(document.getElementById("lado1t").value)+parseInt(document.getElementById("lado2t").value)+parseInt(document.getElementById("lado3t").value);
            resp.innerHTML=`Respuesta:${r}`;
        });
        c1.addEventListener("click", ()=>{
            modal.style.visibility="hidden";
        });
    }

    else if(e.target.id=="tArea"){
        let resp = document.querySelector(".respuestat2");
        modal = document.getElementById("tAreaModal");
        modal.style.visibility="visible";
        let calcular = document.getElementById("calcular2");
        calcular.addEventListener("click", ()=>{
            let r = parseFloat(document.getElementById("base").value)*parseFloat(document.getElementById("altura").value)/2;
            resp.innerHTML=`Respuesta:${r}`;
        });
        c2.addEventListener("click", ()=>{
            modal.style.visibility="hidden";
        });
    }
    // Cuadrado ************************************************************
    else if (e.target.id=="cuPerimetro"){
        let resp = document.querySelector(".respuestacu");
        modal = document.getElementById("cuPerimetroModal");
        modal.style.visibility="visible";
        let calcular = document.getElementById("calcular3");
        calcular.addEventListener("click", ()=>{
            let r = parseInt(document.getElementById("lado1c").value)+parseInt(document.getElementById("lado2c").value)+parseInt(document.getElementById("lado3c").value)+parseInt(document.getElementById("lado4c").value);
            resp.innerHTML=`Respuesta:${r}`;
        });
        c3.addEventListener("click", ()=>{
            modal.style.visibility="hidden";
        });
    }
    else if (e.target.id=="cuArea"){
        let resp = document.querySelector(".respuestacu2");
        modal = document.getElementById("cuAreaModal");
        modal.style.visibility="visible";
        let lado1 = parseInt(document.getElementById("lado1ca").value);
        let lado2 = parseInt(document.getElementById("lado2ca").value);
        let calcular = document.getElementById("calcular4");
        calcular.addEventListener("click",()=>{

            resp.innerHTML=`Respuesta:${parseInt(document.getElementById("lado1ca").value)*parseInt(document.getElementById("lado2ca").value)}`
            })
        c4.addEventListener("click", ()=>{
            modal.style.visibility="hidden";
        });
    }
    // Rectangulo ************************************************************
    else if (e.target.id=="rPerimetro"){
        let resp = document.querySelector(".respuestar");
        modal = document.getElementById("rPerimetroModal");
        modal.style.visibility="visible";
        let calcular = document.getElementById("calcular5");
        calcular.addEventListener("click",()=>{

            resp.innerHTML=`Respuesta: ${2*parseFloat(document.getElementById("longitud").value)+2*parseFloat(document.getElementById("ancho").value)}`;
            })
        c5.addEventListener("click", ()=>{
            modal.style.visibility="hidden";
        });
    }
    else if (e.target.id=="rArea"){
        let resp = document.querySelector(".respuestar2");
        modal = document.getElementById("rAreaModal");
        modal.style.visibility="visible";
        let calcular = document.getElementById("calcular6");
        calcular.addEventListener("click",()=>{

            resp.innerHTML=`Respuesta: ${parseFloat(document.getElementById("longitud2").value)*parseFloat(document.getElementById("ancho2").value)}`;
            })
        c6.addEventListener("click", ()=>{
            modal.style.visibility="hidden";
        });
    }
    else if (e.target.id=="ciPerimetro"){
        let resp = document.querySelector(".respuestaci");
        modal = document.getElementById("ciPerimetroModal");
        modal.style.visibility="visible";
        let calcular = document.getElementById("calcular7");
        calcular.addEventListener("click",()=>{

            resp.innerHTML=`Respuesta: ${2*3.1416*parseFloat(document.getElementById("diametro").value)}`;
            })
        c7.addEventListener("click", ()=>{
            modal.style.visibility="hidden";
        });
    }
    else if (e.target.id=="ciArea"){
        let resp = document.querySelector(".respuestaci2");
        modal = document.getElementById("ciAreaModal");
        modal.style.visibility="visible";
        let calcular = document.getElementById("calcular8");
        calcular.addEventListener("click",()=>{

            resp.innerHTML=`Respuesta: ${3.1416*(parseFloat(document.getElementById("diametro").value)^2)}`;
            })
        c8.addEventListener("click", ()=>{
            modal.style.visibility="hidden";
        });
    }

});
