// Seleccionar elementos

/*
document.getElementById("id"); -> Referencia a un elemento con id en especifico

document.querySelector("selector"); -> Referencia a la primera considencia en el selector CSS, editar selecciones css, etiqueta, id, clase css, etc.

document.querySelectorAll("selector"); -> Selección todos los elementos que cuente con esa etiqueta o id o clase, ejemplo: <p> serian todos los parrafos en vez del primero que lo hace con la función anterior
*/

let id = document.getElementById("features");
console.log(id);


//let h1 = document.querySelector("#features");
let h1 = document.querySelector(".feature")
console.log(h1)


document.querySelectorAll("p")

document.querySelectorAll('p').forEach((el=>console.log(el)));

// Modificar y obtener :
// Obtener enlace que esta en <a href>
console.log(document.querySelector('a').getAttribute('href'));
// Cambiar el dato
document.querySelector('a').setAttribute('href', 'https://www.youtube.com')

// Referirse a los estilos:
const mi=document.querySelector('#features');
mi.style.setProperty('color', 'lightgreen');
mi.style.setProperty('width', '20%');
const fondo=document.querySelector('body');
fondo.style.setProperty('background-color', '#212121');

// Agregar nodo de texto sencilla

const miclase = document.querySelector('.miclase');
let text=`
<p>
El dom modifico la clase
</p>
<p> Se puede acceder y modificar
`

//miclase.textContent=text; // Muestra el contenido con etiquetas en el html
miclase.innerHTML=text; // Inserta  html y muestra el contenido
console.log(miclase.innerHTML);

const img = document.createElement('img'); // Crear un nuevo elemento html

img.src ="https://images2.alphacoders.com/257/257822.jpg";
document.body.appendChild(img); // Agregar como etiqueta al html
const caja = document.createElement('div');
caja.innerHTML="<img src='/img/cj.jpg'>";
miclase.appendChild(caja)

// Remover elemento:
// div.remove();
