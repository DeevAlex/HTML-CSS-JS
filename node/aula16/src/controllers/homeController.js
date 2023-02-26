

exports.paginaInicial = (requisicao , resposta , next) => {

    resposta.render("index", {
        titulo: 'Este será o da Pagina',
        numeros: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    }) 


}

exports.trataPost = (requisicao , resposta) => {

    resposta.send(requisicao.body)
    
}