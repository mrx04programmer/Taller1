// Carisellazo en javascript

let dinero_inicial, dinero, ds, juegostr, rep, v=0;
let cara = 1;
let sello = 2;

dinero_inicial = parseInt(prompt("Dinero inicial:"));
do{
    
    dinero = parseInt(prompt("Cuanto desea apostar?:"));
    ds = parseInt(prompt("Decisión\n1)Cara \n2)Sello"));
    // Establecer String para variable juego
    
    juego = parseInt(Math.floor(Math.random() * (sello - cara + 1) + 1));// Número aleatorio.
    console.log(juego);
    if (juego == 1){
        juegostr = "Cara";
    }
    else{
        juegostr = "Sello"
    }

    // Gano?
    
    if (juego == 1 && juego == ds){
        alert(`Ganaste , callo Cara`);
        // dinero_inicial=dinero_inicial+(dinero*2); 
        dinero_inicial=dinero_inicial+(dinero); 
        //alert(`Usted tiene ${dinero_inicial}`);

    }
    else if (juego == 2 && juego == ds){
        alert(`Ganaste, callo Sello`);
        dinero_inicial=dinero_inicial+(dinero); 
        //alert(`Usted tiene ${dinero_inicial}`);
    } else{
        alert(`Perdiste, callo ${juegostr}`);
        dinero_inicial = dinero_inicial - dinero;
        
    }
    // Si el dinero es menor a 0 , se quedara sin saldo, de lo contrario mostrara el dinero actual.
    if (dinero_inicial < 0){
        alert(`Lo siento pero te quedaste sin saldo.`)
    }
    else{
    alert(`Usted tiene ${dinero_inicial}`);
    }
    
    rep = confirm("Deseas continuar?");
    v = v+1
    
}while(rep==true);

alert(`Usted a repetido el programa ${v}`);