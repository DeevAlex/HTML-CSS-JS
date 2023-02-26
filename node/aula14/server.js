// dotenv

require("dotenv").config()


const express = require("express")
const app = express() 

// conexão com a base de dados

const mongoose = require("mongoose")
mongoose.set('strictQuery', true)

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Conectei na base de dados") // não precisa desse console.log
    app.emit("pronto") // a conexão só vai ocorrer quando o app.emit emitir esse sinal "Pronto"
}).catch(e => {
    console.log(e)
})

const route = require("./routes") 
const path = require("path")

const { meuMiddlewareGlobal , meuOutroMiddleware } = require("./src/middlewares/middleware") 

app.use(express.urlencoded({ extended: true })) 

app.use(express.static(path.resolve(__dirname , "public")))
  
app.set("views" , path.resolve(__dirname , "src" , "views")) 
app.set("view engine" , "ejs") 

app.use(meuMiddlewareGlobal) 
app.use(meuOutroMiddleware)
app.use(route)

app.on("pronto", () => { // quando o app.emit enviar o sinal "pronto" ele vem para cá e inicia o servidor
    app.listen(3000 , () => {

        console.log("Acesse o servidor pelo: http://localhost:3000")
        console.log('Servidor Iniciado na Porta 3000')
    
    })
})


// instalar o dotenv : npm i dotenv , para gerenciar um modo de "esconder" os dados na hora de publicar ou compartilhar o codigo não vai compartilhar os dados pessoais como senhas etc (dependencia do projeto)
// e instalar o mongoose: npm i mongoose , para ficar responsavel por tratar e validar os dados no banco de dados e ele faz a conexão com a base de dados (dependencia do projeto)