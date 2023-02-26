const express = require("express")
const app = express() // por convenção é app que a variavel tem q se chamar

app.use(express.urlencoded({ extended: true })) // isso aqui faz com que o pegue o que foi enviado ao clicar em enviar e joga no requisicao.body caso não coloque isso ele vai ficar undefined

// EX
// Queries strings ? e &
// qualquersite/profiles/12345?campanha=googleads&nome_campanha=sla

app.get('/', (requisicao, resposta) => {
    resposta.send(`
    <form action="/" method="POST"> 
    
    Nome: <input type="text" placeholder="Digite seu Nome" name="nome"></input>
    Idade: <input type="number" placeholder="Digite sua Idade" name="idade"></input>
    <button>Enviar</button>

    </form>
    `) // caso o method for post vai ter q ser app.post para receber esses dados
})

app.post("/", (requisicao, resposta) => {

    resposta.send(`Dados recebidos, Nome: ${requisicao.body.nome} e Idade: ${requisicao.body.idade}`) // esse aqui vai mostrar o que foi pego no input com o name de nome e vai mostrar lá
    console.log(requisicao.body) // esse aqui mostra no console um objeto com os respectivos names no input

})

// queries strings http://localhost:3000/teste/?nome=Alex&sobrenome=DMC&idade=18
// e o de params /teste/:idUsuarios?/:parametro?

// e o body

// isso faz com que pegue as informações lançadas no campo da url , faz com que crie um objeto com a chave com o nome :<nome da chave> , se colocar ? no final ele faz com que esse parametro seja opcional , pois se não tiver ele vai dar um erro de GET pois não tem nenhum parametro

// app.get("/teste/:idUsuarios?/:parametro?", (requisicao, resposta) => {

    // console.log(requisicao.params)
    // console.log(requisicao.query) // esse aqui é para mostrar no console quando o usuario colocar parametros na url 
    // resposta.send(requisicao.params) // esse aqui é para mostrar na tela do navegador os parametros que são pedidos no get ali , se não tiver nada aqui e você ficar colocando parametros no query ali sem ter nada no params ele não vai mostrar
    // resposta.send(requisicao.query.idade) // esse aqui tem que ter o mesmo nome da variavel que colocou na url lá
    // resposta.send(requisicao.params.idUsuarios)

// })

        // porta        // um parametro para exibir algo
app.listen(3000 , () => {

    console.log("Acesse o servidor pelo: http://localhost:3000")
    console.log('Servidor Iniciado na Porta 3000')

})

// iniciar o servidor 
// node <arquivo>.js

// a cada mudança no server.js tem que dar ctrl + C para parar e iniciar novamente para atualizar o que foi adicionado/removido