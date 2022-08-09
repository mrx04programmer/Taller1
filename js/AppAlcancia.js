let dinero, choncho=0, numveces=0;
let resp = true;

while (resp == true) {
    dinero = parseInt(prompt("Ingrese la cantidad que desea guardar"));
    resp = confirm("Desea continuar");
    choncho=parseInt(choncho)+parseInt(dinero);
    numveces=parseInt(numveces)+1;

}

console.log(`Usted acumulo ${choncho} y ha ingresado dinero ${numveces} veces`);