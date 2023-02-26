const express = require("express")
const route = express.Router() // aqui cria a rota,
const homeController = require("./controllers/homeController")
const contatoController = require("./controllers/contatoController")

// rotas da home - "/"
route.get('/' , homeController.paginaInicial) // aqui os routers vão ser responsaveis por tratar as nossas rotas
route.post("/" , homeController.trataPost) // esses homeController. são as funções anonimas que estão sendo exportadas no homeController.js

// rotas de contato

route.get("/contato" , contatoController.paginaInicial)

module.exports = route // isso aqui são todas as rotas criadas estão sendo exportadas para server.js