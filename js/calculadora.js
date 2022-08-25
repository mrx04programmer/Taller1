let calcular=()=> {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let op = parseInt(document.getElementById('operacion').value);

    if (op == '1') {
        let res = num1 + num2;
        alert(`${num1} sumandole a ${num2} equivale a ${res}`);
    }
    else if (op == '2') {
        let res = num1 - num2;
        alert(`${num1} restado con ${num2} equivale a ${res}`);
    }
    else if (op == '3') {
        let res = num1 * num2;
        alert(`${num1} multiplicado con ${num2} equivale a ${res}`);
    }
    else if (op == '4') {
        let res = num1 / num2;
        alert(`${num1} dividido con ${num2} equivale a ${res}`)
    }
    else {
        alert(`No se ha escogido una operación valida`)
    }
}

const btn = document.getElementById('button');
btn.addEventListener('click', calcular); // Oyente de eventos

const ops = document.getElementById('ops');
ops.addEventListener('click', (e)=>{
    e.preventDefault();
    //console.log(e.target.id); Mostrar id especifico de los elementos a escuchar, en este caso ops, target obtiene varias propiedades.
    id = e.target.id;
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    const rta = document.getElementById('respuesta');
    
    if  (id == 'suma'){
        //console.log(`Sumatoria : ${num1+num2}`);
        const img = `<i class="fa-solid fa-check"></i><p>La suma corresponde a ${num1+num2}</p>`;
        rta.innerHTML = img;
    }
    else if (id == 'resta'){
        //console.log(`Resta : ${num1-num2}`)
        const img = `<i class="fa-solid fa-xmark"></i><p>La resta corresponde a ${num1-num2}</p>`;
        rta.innerHTML = img;
        rta.style.setProperty('font-size', '3rem');
    }
})

