const app = require('./app');

function openModal01() {  
    const menu = document.querySelector('#modal01');
  
    if (!menu.style.display || menu.style.display === 'none') {
      menu.style.display = 'flex';
  } else {
      menu.style.display = 'none';
  }};


/* function login(){
    window.location.href = './View/html/pokedexcards'
  } */

/* function register () {
    const password = document.querySelector('#password');
    const check = document.querySelector('#check-password');
  
    if (password == check ) {
      alert('Sucesso');
  } else {
      alert('Senhas não coincidem!');
  }}; */
    

  
  /* function enter () {  
      const usuario = document.querySelector('#email');
      const password = document.querySelector('#password');
  
    
      if (usuario == 'Bella' ) {
        console.log ('Bella');
    } else {
        console.log (usuario.value);
    }}; */