// Selección de elementos del DOM

let mainTitle = document.getElementById('main-title'); // Selecciona elementos por ID
console.log(mainTitle);

let  buttons = document.getElementsByTagName('button'); // Selecciona elementos por su etiqueta
console.log(buttons);

let circulo = document.getElementsByClassName('circle'); // Selecciona elementos por la clase CSS
console.log(circulo);

let circul = document.querySelector('.circle');   // Selecciona elementos mediante Query Selector, que es el mismo sistema de selectores que CSS, hay que incluirle el punto '.' igual que en CSS
console.log(circul);
let dinamicLink = document.querySelector('.dinamic-link');
let jumboItems = document.querySelectorAll('.jumbo li'); // Selecciona todas las coincidencias, en este caso los 'li' hijos de la clase jumbo.

// Manipulación de elementos DOM

mainTitle.innerHTML = 'Título cambiado';

buttons[1].disabled = true;




dinamicLink.setAttribute('href', 'http://google.com');

let options = ['Windows', 'MacOs', 'Linux'];

for (i = 0; i < options.length; i++) {
    jumboItems[i].innerHTML = options[i];
}

// Creación de elementos en el DOM

let item = document.createElement('li');

item.innerHTML = 'Android';

let jumboList = document.querySelector('.jumbo');

jumboList.appendChild(item); // Añade elemento hijo
jumboList.removeChild(jumboItems[1]); // Elimina elemento hijo

let item2 = document.createElement('li');
item2.innerHTML = 'iOS';
jumboList.replaceChild(item2, jumboItems[0]);  // Debemos indicar como primer argumento cual elemento vamos a añadir y separado por coma el elemento a eliminar

// Eventos en el DOM

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

function toggleModal() {
    if (modal.style.display === 'none') {
        modal.style.display = 'flex';
        overlay.style.display = 'block';
    } else {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }
}

let input = document.querySelector('input');

input.addEventListener('input', /* Recibe 2 parámetros, 1º el evento que queremos localizar */ () => {
    buttons[1].disabled = false;
})

// Manipulación de clases CSS

jumboList.addEventListener('click', () => {
    //jumboList.classList.add('marked'); // .remove hace justo lo contrario, remueve o quita la clase-CSS
    jumboList.classList.toggle('marked'); // No es compatible con IE
})