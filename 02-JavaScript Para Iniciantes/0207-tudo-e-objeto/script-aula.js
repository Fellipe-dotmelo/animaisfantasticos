var pessoa = {
  nome: 'Fellipe',
  idade: 21,
  profissao: 'Técnico em Informática',
  possuiFaculdade: false,
}

console.log(pessoa.nome, pessoa.idade, pessoa.profissao)

var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado;
  },
  perimetro: function(lado){
    return this.lados * lado
  },
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(3))


// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var eu = {
  nome: 'Fellipe',
  sobrenome: 'Melo',
  minhaIdade: 21,
  profissaoAtual: 'Téc Informática',
  nivelEscolaridade: 'Técnico e Cursando Superior',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
eu.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`
}
console.log(eu.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: '10 anos',
  latir(pessoa){
    if(pessoa === 'homem'){
      return 'Latir';
    }
    else{
      return 'Nada';
    }
  }
} 