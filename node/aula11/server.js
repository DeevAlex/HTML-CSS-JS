const express = require("express")
const app = express() 
const route = require("./routes") // aqui estamos importando todas as rotas exportadas no arquivo routes.js
const path = require("path")

// AQUI VAMOS USAR O PADRÃO FULL MVC (onde tem backend , frontend e tudo junto na mesma aplicação)

app.use(express.urlencoded({ extended: true })) 

app.use(express.static(path.resolve(__dirname , "public")))

// o que vai ser usado, nome da pasta, dai entra na pasta src e entra na pasta views      
app.set("views" , path.resolve(__dirname , "src" , "views")) // caminho absoluto: path.resolve(__dirname , "src" , "views"  ) e caminho relativo "./src/views/"
app.set("view engine" , "ejs") // a engine que vai ser usada e o ejs é o que mais se aproxima do html , npm i ejs para instalar o ejs e o arquivo tem q ter .ejs , como index.ejs invés de .html

app.use(route)

// aqui não precisa mais criar rotas pois estamos criando as notas no routes.js

// servidor criado na porta 3000 - pode ser qualquer uma e o que vai ser retornado quando for ligado
app.listen(3000 , () => {

    console.log("Acesse o servidor pelo: http://localhost:3000")
    console.log('Servidor Iniciado na Porta 3000')

})

