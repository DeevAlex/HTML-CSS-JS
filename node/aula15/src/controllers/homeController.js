

exports.paginaInicial = (requisicao , resposta , next) => {

    // requisicao.flash("info", "Olá Mundo") isso cria as mensagens que serão mostradas e quando carregar a pagina denovo vai ser apagadas
    // requisicao.flash("error", "Erro")
    // requisicao.flash("success", "Olá Mundo")
    console.log(requisicao.flash("info"), requisicao.flash("error") , requisicao.flash("success")) // isso
    // requisicao.session.usuario  // isso mostra na session o usuario e se esta logado
    resposta.render("index") 


}

exports.trataPost = (requisicao , resposta) => {

    resposta.send(requisicao.body)
    
}