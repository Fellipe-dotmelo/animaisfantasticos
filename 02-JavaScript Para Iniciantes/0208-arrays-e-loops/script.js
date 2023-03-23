//inicialização -- condição e incremento
for (let index = 1; index <= 5; index++) {
  console.log(`eu sou o número ${index}`)
}

var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

var videoGames = ['Switch', 'PS4', 'Xbox', '3Ds'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

let frutas = ['Banana', 'Pêra', 'Maçã', 'Abacaxi', 'Uva', 'Mamão']

frutas.forEach(function(fruta, index){
  console.log(fruta, index);
})
