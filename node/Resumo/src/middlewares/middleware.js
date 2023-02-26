
exports.meuMiddlewareGlobal = (requisicao , resposta , next) => {
    
    resposta.locals.umaVariavelLocal = "Este é o valor da variavel local" 
    next()

}

exports.meuOutroMiddleware = (requisicao , resposta , next) => {
    
    next()

} 

exports.checkCSRFError = ( erro , requisicao , resposta , next ) => {
    if (erro && erro.code === "EBADCSRFTOKEN") {
        return resposta.render("404") // aqui poderia renderizar uma pagina 404 se quiser
    }
}

exports.CSRFMiddleware = ( requisicao , resposta , next ) => {
    resposta.locals.csrfToken = requisicao.csrfToken() // a variavel locals.csrfToken pode ser qualquer nome mais fica mais facil de compreender , todo formulario que for criado nos sites devem ter esse csrfToken() e precisa colocar na pagina .ejs input:hidden com o name de _csrf e value <% = csrfToken%>
    next()
}