/*
Desarrolle un programa en el que el usuario ingrese una temperatura en grados y por
medio de dos listas desplegables seleccione, Vas a convertir de y Deseas convertir a. (Las
opciones son Fahrenheit, Celsius y Kelvin)
Mostrar el resultado de la conversión en una alerta.*/

function convertir(){
    let n = parseFloat(document.getElementById('n').value)
    let s1 = parseInt(document.getElementById('selector1').value);
    let s2 = parseInt(document.getElementById('selector2').value);

    if (s1==1&&s2==2){
        let r = (n-32)*5/9;
        alert(`Pasaste de ${n}°F a Celsius , lo cual equivale a ${r}`);
    }
    else if(s1==2&&s2==1){
        let r = (n*(9/5))+32;
        alert(`Pasaste de ${n}°C a Fahrenheit , lo cual equivale a ${r}`);
    }
    else if (s1==3&&s2==2){
        let r = (n - 273.15);
        alert(`Pasaste de ${n}K a Celsius , lo cual equivale a ${r}`);
    }
    else if (s1==1&&s2==3){
        let r = (n - 32)*5/9 + 273.15;
        alert(`Pasaste de ${n}°F a Kelvin , lo cual equivale a ${r}`);
    }
    else if (s1==3&&s2==1){
        let r = (n-273.15) * 9/5 + 32;
        alert(`Pasaste de ${n}K a Fahrenheit , lo cual equivale a ${r}`);
    }
    else if (s1==2&&s2==3){
        let r = n + 273.15;
        alert(`Pasaste de ${n}°C a Kelvin, lo cual equivale a ${r}`);
    }
    // Validamos si es el mismo.
    else if (s1==s2){
        alert("No se puede convertir en el mismo.")
    }
    else{
        alert("Debes elegir una opción.")
    }


}