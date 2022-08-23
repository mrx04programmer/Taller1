// Función de declaración: no tiene parametros función que se pueda ejecutar en cualquier parte del código , inclusive antes de ser creada.
// (No se usa tanto -> Javascript primero buscara funciones de declaración y luego procesará lo demas del código)
/*
function nombredelafuncion(){
    // Instrucciones
}

// Invocar función
nombredelafuncion();
*/



// Funciones de retorno: Funciones que devuelven un valor
/*
function nombredelafuncion(parametro1, parametro2){
    // Instrucciones
}

// Invocar función
nombredelafuncion();
*/



/*console.log("Lanza monedas")
function lanzarmoneda() {
    let moneda = Math.floor(Math.random() * 2) + 1;
    return moneda;
}

console.log(`El lanzamiento de la moneda fue ${lanzarmoneda()}`);
let lanzamoneda = lanzarmoneda();
console.log(`El lanzamiento de la moneda fue ${lanzamoneda}`);
*/
// Función con parametros:
function ganar(saldo, apuesta){
    saldo=saldo+(apuesta);
    return saldo;
}
let perder = (saldo, apuesta) => {
    saldo = saldo - apuesta;
    return saldo;
}
// Invocar la función y enviar argumentos según corresponda
ganar(10000, 1000);
perder(10000, 1000);

// Función Anónima:
/*
let ganar=function(saldo, apuesta){
    saldo=saldo+(apuesta);
    return saldo;
}
*/





// Función por expresión:

let lanzarmoneda=function lanzarmoneda(){
    let moneda = Math.floor(Math.random() * 2) + 1;
    return moneda;
}

let lanzamoneda  = lanzarmoneda();

let s = true;
let saldo=0;
let nombre = prompt("Ingresa el nombre del jugador:");
saldo = parseInt(prompt("Cuando deseas recargar para apostar"));

while(s==true){
    let elec = prompt(`${nombre} Elige 1. Cara 2. Sello`);
    let apuesta=parseInt(prompt(`De tu saldo actual ${saldo} ¿Cuanto deseas apostar?`));
    if(lanzamoneda==1 && elec==1){
        saldo=ganar(saldo, apuesta);
        console.log(`El lanzamiento de la moneda fue Cara , tu ganas!! Tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamoneda==2 && elec==2){
        saldo=ganar(saldo, apuesta);
        console.log(`El lanzamiento de la moneda fue Sello, tu ganas!! Tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamoneda==1 && elec==2){
        saldo=perder(saldo, apuesta);
        console.log(`El lanzamiento de la moneda fue Cara y escogiste Sello, Perdiste. Tu nuevo saldo es ${saldo}`);
    }
    else if (lanzamoneda == 2 && elec == 1) {
        saldo = perder(saldo, apuesta);
        console.log(`El lanzamiento de la moneda fue Sello y escogiste Cara, Perdiste. Tu nuevo saldo es ${saldo}`);
    }

    s = confirm(`¿Desea continuar?`);
}



// Función flecha: La flecha creada con => hace referencia a la palabra reservada function
/*
let perder=(saldo, apuesta)=>{
    saldo = saldo-apuesta;
    return saldo;
}
*/

//////////////////////////////////////////////// 2da PARTE DE FUNCIONES ////////////////////////////////////////////////////

