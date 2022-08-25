/*
Recopile los nombres y apellidos de los instructores del trimestre, así como la actividad
que orienta cada uno. Desarrolle un programa que le permita comprobar ¿cómo se llama
el instructor y qué orienta?
Permítale a un usuario seleccionar un elemento de una lista de nombres, otra lista de
apellidos y una más de actividades. Si la selección del nombre, apellido y actividad es
correcta, muéstrele un mensaje que diga La respuesta es correcta, de lo contrario La
respuesta es incorrecta.
*/ 


const btn = document.querySelector('button');
const div = document.getElementById('divasa');
btn.addEventListener('click', (e)=>{
    e.preventDefault(); // Trabajar en vivo.
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const materias = document.getElementById('materias').value;
    let nombre = document.getElementById('nombres');
    let apellido = document.getElementById('apellidos');
    let materia = document.getElementById('materias');
    const nombrecompleto = nombre.options[nombre.selectedIndex].text + ' ' + apellido.options[apellido.selectedIndex].text;
    if (nombres==apellidos && nombres==materias && apellidos==materias){
        div.innerHTML = ` <i class="fa-solid fa-check" style="font-size: 5em"></i>
        <h2 class="text-success">Nombre correcto :)</h2><br>
        <p>Nombre: ${nombrecompleto}</p><br>
        <p>Materia: ${materia.options[materia.selectedIndex].text}</p>`;
    }
    else{
        div.innerHTML = `<i class="fa-solid fa-xmark"></i>
        <h2 class="text-danger">Instructor no corresponde a la materia! </h2><br>
        <p>Nombre ${nombrecompleto}</p>
        <p>Materia: ${materia.options[materia.selectedIndex].text}`;
    }
})

