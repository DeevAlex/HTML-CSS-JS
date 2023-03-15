const { texto } = require("./base");

const regExp1 = /João|Maria/gi

//   $1    $2    $3
// (...) (...) (...)

//   $1   $2      $3   $4
// (... (...) ) (... (...) )

console.log(texto)
console.log(texto.match(regExp1))
console.log(texto.replace(/(João|Maria)/gi, '"$1"')) // quando coloca $<numero> vai colocar o valor que está na expressão e voce pode colocar "$1" que ficaria "João" e "Maria" no texto
console.log(texto.replace(/(João|Maria)/gi, function(input){
    return input.toUpperCase()
}))