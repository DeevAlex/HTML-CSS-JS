const { texto, arquivos, html, alfabeto } = require("./base");

// [] - conjunto [^qualquerCoisa] -> negacão
// [0-9] - range, do menor ao maior
// [min-maxQualquerCoisa] - range, do menor ao maior

// console.log(alfabeto)

// console.log(alfabeto.match(/[^abc123]/g)) // não mostra esses, Negação

// console.log(alfabeto.match(/[0-9]+/g))

// console.log(alfabeto.match(/[a-z]/g))

// console.log(alfabeto.match(/[A-Z]/g))

// console.log(alfabeto.match(/[^a-zA-Z0-9]+/g))

// console.log(alfabeto.match(/[a-zA-Z0-9çã]+/g))

// console.log(alfabeto.match(/[\w]+/g))

// console.log(alfabeto.match(/[\W]+/g)) negação de w

// console.log(alfabeto.match(/[\D]+/g)) negação de d

// console.log(alfabeto.match(/[\d]+/g))

// console.log(alfabeto.match(/[\s]+/g)) // para mostrar os espaços 

// console.log(alfabeto.match(/[\S]+/g)) // para não mostrar os espaços 

// console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)) // Unicode


// https://en.wikipedia.org/wiki/List_of_Unicode_characters lista de caracteres unicode