let o = document.getElementById('opciones');
let r = document.getElementById('respuesta');
o.addEventListener('click', (e)=>{
    e.preventDefault();
    if (e.target.id == 'opcion1'){
        r.innerHTML= `Opcion incorrecta`;
        r.classList.add('incorrecto'); // Agregar una clase de css 
        r.style.setProperty('background-color', 'black');
        r.style.setProperty('text-align', 'center');
        r.style.setProperty('border-radius', '20px');
        r.style.setProperty('visibility', 'visible');
        r.style.setProperty('padding', '10px');
        r.classList.remove('correcto') // Eliminar la clase contraria
    }
});

o.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id == 'opcion2') {
        r.innerHTML = `Opcion incorrecta`; 
        r.classList.add('incorrecto'); 
        r.style.setProperty('text-align', 'center');
        r.style.setProperty('background-color', 'black');
        r.style.setProperty('border-radius', '20px');
        r.style.setProperty('visibility', 'visible');
        r.style.setProperty('padding', '10px');
        r.classList.remove('correcto'); // Eliminar la clase contraria
    }
});

o.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id == 'opcion3') {
        r.innerHTML = `Opcion correcta`;
        r.classList.add('correcto'); 
        r.style.setProperty('padding', '10px');
        r.style.setProperty('text-align', 'center');
        r.style.setProperty('background-color', 'black');
        r.style.setProperty('border-radius', '20px');
        r.style.setProperty('visibility', 'visible');
        r.classList.remove('incorrecto') // Eliminar la clase contraria
    }
});

o.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id == 'opcion4') {
        r.innerHTML = `Opcion incorrecta`;
        r.classList.add('incorrecto');  
        r.style.setProperty('background-color', 'black');
        r.style.setProperty('visibility', 'visible');
        r.style.setProperty('border-radius', '20px');
        r.classList.remove('correcto') // Eliminar la clase contraria
    }
});