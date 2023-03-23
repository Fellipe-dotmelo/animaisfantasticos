// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

let pentaMundial = ['1959', '1962', '1970', '1994', '2002'];
for(i = 0; i < pentaMundial.length; i++){
  console.log(`O brasil ganhou a copa de ${pentaMundial[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera

var fruta = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(var i = 0; i < frutas.length; i++){
  console.log(fruta[i]); 
    if(fruta[i] === 'Pera'){
      break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta =  frutas[frutas.length - 1];