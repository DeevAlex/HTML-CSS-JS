const express = require("express")
const app = express() 
const route = require("./routes") // aqui estamos importando todas as rotas exportadas no arquivo routes.js

// AQUI VAMOS USAR O PADRÃO FULL MVC (onde tem backend , frontend e tudo junto na mesma aplicação)

app.use(express.urlencoded({ extended: true })) 
app.use(route)

// aqui não precisa mais criar rotas pois estamos criando as notas no routes.js

// servidor criado na porta 3000 - pode ser qualquer uma e o que vai ser retornado quando for ligado
app.listen(3000 , () => {

    console.log("Acesse o servidor pelo: http://localhost:3000")
    console.log('Servidor Iniciado na Porta 3000')

})

