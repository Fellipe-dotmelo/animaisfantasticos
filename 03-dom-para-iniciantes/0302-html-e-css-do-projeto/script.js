// Retorne no console todas as imagens do site

const returnImg = document.querySelectorAll('img')
console.log(returnImg)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagemAnimais = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagemAnimais)

// Selecione todos os links internos (onde o href começa com #)

const hrefInterno = document.querySelectorAll('[href^="#"]');
console.log(hrefInterno);

// Selecione o primeiro h2 dentro de .animais-descricao

const h2Animais = document.querySelector('.animais-descricao h2')
console.log(h2Animais)

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1])