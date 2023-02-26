// module.exports = (requisicao , resposta , next) => {
exports.meuMiddlewareGlobal = (requisicao , resposta , next) => {
    
    resposta.locals.umaVariavelLocal = "Este é o valor da variavel local" // aqui pode ser qualquer coisa, função , objeto , etc  e pode ser usada em qualquer lugar pois estamos criamos ela em um middleware sem rota 

    next()

}

exports.meuOutroMiddleware = (requisicao , resposta , next) => {
    
    next()
} 
