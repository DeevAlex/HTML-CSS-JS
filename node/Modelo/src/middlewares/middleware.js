
exports.meuMiddlewareGlobal = (requisicao , resposta , next) => {
    
    resposta.locals.umaVariavelLocal = "Este é o valor da variavel local" 
    next()

}

exports.meuOutroMiddleware = (requisicao , resposta , next) => {
    
    next()

} 

exports.checkCSRFError = ( erro , requisicao , resposta , next ) => {
    if (erro && erro.code === "EBADCSRFTOKEN") {
        return resposta.render("404")
    }
}

exports.CSRFMiddleware = ( requisicao , resposta , next ) => {
    resposta.locals.csrfToken = requisicao.csrfToken() 
}