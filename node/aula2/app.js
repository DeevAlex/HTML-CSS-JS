// const multiplicacao = require("./mod")

// console.log(multiplicacao(5, 5))


// o . representa a pasta que já estamos. para dentro é ./
// const Cachorro = require("../")

// const c = new Cachorro("Lucio")

// c.latir()


// const Cachorro = require("./Z/mod2")

// const c1 = new Cachorro("Dog")
// c1.latir()

// console.log(Cachorro)

// const path = require("path")
// // esse path ele cria um caminho correto 
// //                 pasta onde está  voltar voltar  entra       entra
// console.log(path.resolve(__dirname, "..", "..", "arquivos", "imagens"))

// console.log(__filename) // o caminho da pasta e do arquivo 
// console.log(__dirname) // o caminho da pasta

const Cachorro = require("./Z/mod2")

const c1 = new Cachorro("Dog")

c1.latir()