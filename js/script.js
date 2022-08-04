//console.log("Hello World");
let numero=25;
// Primera manera para mostrar texto en consola con concatenación
console.log('El numero es :',numero);
// Segunda manera con plantilla literalcon tildes invertidas (Alt+96) Interpolando cadenas
console.log(`El numero es : ${numero}`);

let nombre="Juanito";
console.log(`El nombre es ${nombre}`);

let miestado=true;
console.log(`Mi estado es ${miestado}`);

let vacia;
console.log(`Variable nueva: ${vacia}`);

/* let res=numero+5;
console.log(`El resultado es :${res}`); */

//window.alert('Ha iniciado la purga');
/* let estado=window.confirm("Usted es gay?");
console.log(`La ventana arrojo ${estado}`);
 */
/*  let dato=prompt("Ingresa un numero");
let res=dato+2;
console.log(`El resultado de prompt es ${dato} y su resultado del nuemro más 2 es: ${res}`); */

// Captura de 2 numeros y sumarlos
/* let num1=parseInt(prompt("Ingrese el primer número"));
let num2=parseInt(prompt("Ingrese el segundo número"));
let result=parseInt(num1)+parseInt(num2);
window.alert(`El resultado de la suma es ${result}`);

// Condicionales
if (num1>num2){
    window.alert(`El número ${num1} es mayor`);
} else if(num1==num2){
    window.alert(`Los números son iguales`);
} else{
    window.alert(`El número ${num2} es mayor`);
}

// Operador ternario: Condición: (Condicion) ?Si se cumple :Si no se cumple -> (condicion, ?, :);
let nummayor=(num1>num2)
?`El número mayor es ${num1}`: `El número mayor es ${num2}`
console.log(nummayor);

// Condicionales con condición compuesta: && , ||, !
let user=prompt("Ingrese su usuario:");
let password=prompt("Ingrese su contraseña:");
if (user=='jfajardo' && password=='qwerty'){
    window.alert("Bienvendio");
} else if (user=='jfajardo' && password!='qwerty'){
    window.alert("Verifique su contraseña");
} else if (user!='jfajardo' && password=='qwerty'){
    window.alert("Verifique su usuario");
} else{
    window.alert("Credenciales de acceso incorrectas");
} */

// Condicional múltiple
num1 = parseInt(prompt('Ingrese el primer número:'));
num2 = parseInt(prompt('Ingrese el segundo número:'));
accion = prompt('Accion a tomar :\na: sumar\nb: restar\n c:  multiplicar\n d: dividir\n e: raíz\n f: potencia\n')
switch (accion){
    case "a": // Suma
        
        alert(`El resultado es : ${num1 + num2}`);
    break;
    case "b":
        alert(`El resultado es : ${num1 - num2}`);
    break;
    case "c":
        alert(`El resultado es : ${num1 * num2}`);
    break;
    case "d":
        alert(`El resultado es : ${num1 / num2}.toFixed(2)`);
    break;
    case "e":
        alert(`La raíz cuadrada de ${num1} es : ${Math.sqrt(num1).toFixed(2)}`);
    break;
    case "f":
        alert(`La potencia de ${num1}^${num2} es : ${Math.pow(num1, num2).toFixed(2)}`);
    break;
    default:
        alert(`Accion invalida`);
    break;
}
