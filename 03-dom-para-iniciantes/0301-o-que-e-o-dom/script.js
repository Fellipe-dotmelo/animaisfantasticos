//window.alert('Olá mundo!');

const href = window.location.href;

console.log(href)

if(href === 'http://127.0.0.1:5500/03-dom-para-iniciantes/0301-o-que-e-o-dom/'){
  console.log('É igual.');
}else{
  console.log('Não é igual');
}

document.querySelector('h1');