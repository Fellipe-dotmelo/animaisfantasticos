const img = document.querySelector('img');

function callback(event){
  console.log(event);
}

//img.addEventListener('click', callback)


//selecionando a lista de imagem dos animais
const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event){
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
  
}

animaisLista.addEventListener('click', callbackLista);

//lidando com o link externo
const linkExterno = document.querySelector('a[href^="http"');

function handleLinkExterno(){
  event.preventDefault();
  console.log(event)
}

linkExterno.addEventListener('click', handleLinkExterno)