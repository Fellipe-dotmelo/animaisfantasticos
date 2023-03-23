//verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector("img");
const imgTop = img.offsetTop;

console.log(imgTop);

//retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll("img");
  console.log(imagens);
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

//verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo (48px/48px de acordo com o google).
const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;

  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "possui boa acessibilidade");
  } else {
    console.log(link, "não possui boa acessibilidade");
  }
});

console.log(links);

//se o browser for menor que 720px, add a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if (browserSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
