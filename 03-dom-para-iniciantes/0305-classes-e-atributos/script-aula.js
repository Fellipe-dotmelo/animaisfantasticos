const itensMenu = document.querySelector('.menu a');

itensMenu.forEach(item => {
  item.classList.add('ativo');
});

console.log(itensMenu);

//remove a classe ativo de todos os itens do menu e manter apenas no primeiro
itensMenu.forEach(item => {
  item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');

//verifique as imagens que posssum o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  const possuiAtributo = imgs.hasAttribute('alt');
  console.log(img, possuiAtributo);
})

//modifique o href do link externo do menu
const link = document.querySelector('a[href^=http]');
link.setAttribute('href', 'https://www.google.com');