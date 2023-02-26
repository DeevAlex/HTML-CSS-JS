exports.paginaInicial = (requisicao , resposta) => {

    resposta.send(`
        <form action="/" method="POST"> 
        
        Nome: <input type="text" placeholder="Digite seu Nome" name="nome"></input>
        Idade: <input type="number" placeholder="Digite sua Idade" name="idade"></input>
        <button>Enviar</button>

        </form>
    `) 


}

exports.trataPost = (requisicao , resposta) => {

    resposta.send("Ei, sou sua nova rota de POST")
    
}