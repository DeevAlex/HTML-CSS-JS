const express = require("express")
const route = express.Router() // aqui cria a rota,
const homeController = require("./src/controllers/homeController")
const contatoController = require("./src/controllers/contatoController")    

// EX - se caso tenha mt middlewares crie uma pasta chamada middlewares no src e dentro da middlewares coloque middlewares.js
// function meuMiddleware(requisicao , resposta , next) {

//     requisicao.session = {nome: "Alex" , sobrenome: "de Matos Caceres"}
//     console.log()
//     console.log("Passei no seu Middleware")
//     console.log()
//     next() // tem q colocar esse next para avançar nos parametros middlewares

// }

// rotas da home - "/"  -   Middlewares
route.get('/' , /*meuMiddleware ,*/ homeController.paginaInicial /*, (requisicao , resposta , next) => {

    console.log()
    console.log("Ainda estou aqui")
    // console.log(`'Ultimo Middleware' - Olha o que tem na requisicao.session.nome -> ${requisicao.session.nome}`)
    console.log()

}*/) // aqui os routers vão ser responsaveis por tratar as nossas rotas

route.post("/" , homeController.trataPost) // esses homeController. são as funções anonimas que estão sendo exportadas no homeController.js

// rotas de contato

route.get("/contato" , contatoController.paginaInicial)

module.exports = route // isso aqui são todas as rotas criadas estão sendo exportadas para server.js