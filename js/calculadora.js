function calcular(){
    let num1=parseInt(document.getElementById('num1').value);
    let num2=parseInt(document.getElementById('num2').value);
    let op=parseInt(document.getElementById('operacion').value);

    if(op=='1'){
        let res=num1+num2;
        alert(`${num1} sumandole a ${num2} equivale a ${res}`);
    }
    else if(op=='2'){
        let res=num1-num2;
        alert(`${num1} restado con ${num2} equivale a ${res}`);
    }
    else if(op=='3'){
        let res=num1*num2;
        alert(`${num1} multiplicado con ${num2} equivale a ${res}`);
    }
    else if(op=='4'){
        let res=num1/num2;
        alert(`${num1} dividido con ${num2} equivale a ${res}`)
    }
    else{
        alert(`No se ha escogido una operación valida`)
    }
}