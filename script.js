
const navegacion = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");


abrir.addEventListener('click', toggleDropdown);
window.addEventListener('click', closeDropdown);


function toggleDropdown() {
  navegacion.classList.toggle('visible');
}

function closeDropdown(event) {
    if (!event.target.matches('#boton') && !event.target.matches('#nav')) {
      navegacion.classList.remove('visible');
    }
}


const imgDog = document.querySelector(".seleccion__img--perro");
const urlDog = 'https://dog.ceo/api/breeds/image/random';
const imgCat = document.querySelector(".seleccion__img--gato");
const urlCat = 'https://api.thecatapi.com/v1/images/search';


fetch(urlDog)
  .then(response => response.json())
  .then(data => {
    
    console.log(data.message)

    imgDog.style.backgroundImage = "url(" + data.message + ")";
  });


  fetch(urlCat, {
    'x-api-key': 'live_md09ZrZbdYXuH9dJmeB4zrvhEGyzAgRbBJnRDbWJq4AlHG4FJOZGjaYFJp2t9mpc',
  })
  .then (response => response.json())
  .then(data => {
    
    console.log(data.message)

    imgCat.style.backgroundImage = "url(" + data[0].url + ")";
  });


  // Validacion formulario

  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");
  const form = document.getElementById("form");
  const parrafo = document.getElementById("warning");

  form.addEventListener("submit", e => {
    e.preventDefault()
    let warning = ""
    let entrar = false
    parrafo.innerHTML = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    if (nombre.value.length < 6) {
      warning += `El nombre no es valido (min 6 caracteres) <br>`
      entrar = true
    }

    console.log(regexEmail.test(email.value))
    if (!regexEmail.test(email.value)){
      warning += `El email no es valido <br>`
      entrar = true
    }

    if (mensaje.value.length < 10) {
      warning += `El mensaje no es valido (min 10 caracteres) <br>`
      entrar = true
    }

    if (entrar) {
      parrafo.innerHTML = warning
    } else {
      parrafo.innerHTML = "¡Enviado!"
    }
  })




