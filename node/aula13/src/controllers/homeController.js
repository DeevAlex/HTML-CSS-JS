exports.paginaInicial = (requisicao , resposta , next) => {

    // console.log("Respondendo o Cliente...")
    // console.log(`'Pagina Inicial' - Olha o que tem na requisicao.session.nome -> ${requisicao.session.nome}`)
    resposta.render("index") // não precisa da extenção .ejs
    // next()

}

exports.trataPost = (requisicao , resposta) => {

    resposta.send(requisicao.body)
    
}