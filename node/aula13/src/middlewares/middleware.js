// module.exports = (requisicao , resposta , next) => {
exports.meuMiddlewareGlobal = (requisicao , resposta , next) => {
    
    // EX
    // if (requisicao.body.nome) {

    //     requisicao.body.nome = requisicao.body.nome.replace("UMNOME", "Não Use UMNOME")

    //     console.log()
    //     console.log(`Vi que você postou: ${requisicao.body.nome}`)
    //     console.log()
    // }

    next()

}

exports.meuOutroMiddleware = (requisicao , resposta , next) => {
    
    next()
} 

