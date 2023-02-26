const express = require("express")
const app = express() // por convenção é app que a variavel tem q se chamar

// o express vai ajudar nas rotas da nossa aplicação

//           criar    ler  atualizar  apagar
// C.R.U.D - CREAT , READ , UPDATE , DELETE
//           POST    GET     PUT     DELETE

// rotas
// http://meusite.com/ < navegador faz o GET dai > Entregue a pagina /
// http://meusite.com/sobre < navegador faz o GET na pagina sobre dai > Entregue a pagina /sobre
// http://meusite.com/contato < navegador faz o GET na pagina contato dai > Entregue a pagina /contato

app.get('/', (requisicao, resposta) => {
    resposta.send(`
    <form action="/" method="POST"> 
    
    Nome: <input type="text" placeholder="Digite seu Nome" name="nome"></input>
    <button>Enviar</button>

    </form>
    `)
})

app.post("/", (requisicao, resposta) => {
    resposta.send(`Recebi seus dados`)
})

app.get('/contato', (requisicao, resposta) => {
    resposta.send("Obrigado por Entrar em Contato com a Gente!")
})

        // porta    // um parametro para exibir algo
app.listen(3000 , () => {
    console.log("Acesse o servidor pelo: http://localhost:3000")
    console.log('Servidor Iniciado na Porta 3000')
})

// iniciar o servidor 
// node <arquivo>.js

// a cada mudança no server.js tem que dar ctrl + C para parar e iniciar novamente para atualizar o que foi adicionado/removido