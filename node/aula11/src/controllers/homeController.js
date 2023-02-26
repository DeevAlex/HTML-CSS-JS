exports.paginaInicial = (requisicao , resposta) => {

    resposta.render("index") // não precisa da extenção .ejs


}

exports.trataPost = (requisicao , resposta) => {

    resposta.send("Ei, sou sua nova rota de POST")
    
}