const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;
console.log(h2left);

const h2rect = primeiroh2.getBoundingClientRect();
console.log(h2rect)

if(h2rect.top < 0){
  console.log('Passou do elemento');
  //para saber se o scroll passou do h2 principal
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset,
);

const small = window.matchMedia(('max-width: 600px'));

if(small.matches){
  console.log('tela menor que 600px');
} else{
  console.log('tela maior que 600px');
}
