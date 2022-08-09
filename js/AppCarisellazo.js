// Carisellazo en javascript

let dinero, c=0, ds, juegostr, rep;
let cara = 1;
let sello = 2;
do{
    ds = parseInt(prompt("Decisión\n1)Cara \n2)Sello"));
    dinero = parseInt(prompt("Cuanto desea apostar?:"));
    // Establecer String para variable juego
    
    juego = parseInt(Math.floor(Math.random() * (sello - cara + 1) + 1));// Número aleatorio:
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
        c=c+(dinero*2);
        alert(`Usted tiene ${c}`);

    }
    else if (juego == 2 && juego == ds){
        alert(`Ganaste, callo Sello`);
        c = c + (dinero * 2);
        alert(`Usted tiene ${c}`);
    } else{
        alert(`Perdiste, callo ${juegostr}`);
        c = c - dinero;
        alert(`Usted tiene ${c}`);
    }
    
    rep = confirm("Deseas continuar?");
}while(rep==true);