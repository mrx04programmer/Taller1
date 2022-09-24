// Validaciones
// Nombres y apellidos ^[a-zA-ZÂ-ý\s]{1, 40}
// Números 7 min, 10 max: ^\d{7, 10}$
// Correo: ^[a-zA-Z0-9_-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]+$
// Password: ^(?=.+\d)(?=.*[#$@%&!])(?=+[a-z])(?=+[A-Z]).{8,}$

// Reglas: nombre de regla: /regla/
const reglas = {
    textos: /^[a-zA-ZÁ-ÿ\s]{1,40}$/, //SOLO LETRAS
    numeros: /^[0-9]{7,10}$/, //SOLO NÚMEROS
    correo: /^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //CORREOS
    password: /^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ //PASSWORD
}
const inputs = {
    nodoc: false,
    nombre: false,
    apellido: false,
    correo: false,
    telefono: false,
    password1: false,
    password2: false
}

let form = document.getElementById("forms");
let campos = document.querySelectorAll("#forms input");


form.addEventListener('submit', e=>{
    e.preventDefault();
    //alert("Se envio formulario");
    
    

    });
const validaContraseña=()=>{
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    if (password1==password2){
        document.querySelector(`#e-password2`).classList.remove("error");
        document.querySelector(`#e-password2`).classList.add("success");
        document.querySelector(`#e-password2 i`).classList.remove("fa-circle-exclamation");
        document.querySelector(`#e-password2 i`).classList.add("fa-circle-check");
        document.querySelector(`#e-password2 .msn-error`).classList.remove("msn-error-visible");
    }
    else{
        document.querySelector(`#e-password2`).classList.remove("success");
        document.querySelector(`#e-password2`).classList.add("error");
        
    }
}

const validarInput=(regla, input, grupo)=>{
    if(regla.test(input.value)){
        document.querySelector(`#e-${grupo}`).classList.remove("error");
        document.querySelector(`#e-${grupo}`).classList.add("success");
        document.querySelector(`#e-${grupo} i`).classList.remove("fa-circle-exclamation");
        document.querySelector(`#e-${grupo} i`).classList.add("fa-circle-check");
        document.querySelector(`#e-${grupo} .msn-error`).classList.remove("msn-error-visible");
    }
    else {
        document.querySelector(`#e-${grupo}`).classList.remove("success");
        document.querySelector(`#e-${grupo}`).classList.add("error");
        document.querySelector(`#e-${grupo} i`).classList.remove("fa-circle-check");
        document.querySelector(`#e-${grupo} i`).classList.add("fa-circle-exclamation");
        document.querySelector(`#e-${grupo} .msn-error`).classList.add("msn-error-visible");
    }
}
const validarCampos=(e)=>{
    console.log(`Se genero un evento sobre el input ${e.target.name}`);
    switch (e.target.name) {
        case "nodoc":
            validarInput(reglas.numeros, e.target, e.target.name);
        break;
        case "nombre":
            validarInput(reglas.textos, e.target, e.target.name);
            break;
        case "apellido":
            validarInput(reglas.textos, e.target, e.target.name);
            break;
        case "correo":
            validarInput(reglas.correo, e.target, e.target.name);
            break;
        case "telefono":
            validarInput(reglas.numeros, e.target, e.target.name);
            break;
        case "password":
            validarInput(reglas.numeros, e.target, e.target.name);
            break;
        case "password2":
            validarInput(reglas.numeros, e.target, e.target.name);
            validaContraseña();
            break;
}
}

campos.forEach((campo)=>{
    campo.addEventListener("keyup", validarCampos); // Evento al presionar una tecla
    campo.addEventListener("blur", validarCampos); // Evento 
});