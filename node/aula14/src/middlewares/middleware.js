// module.exports = (requisicao , resposta , next) => {
exports.meuMiddlewareGlobal = (requisicao , resposta , next) => {
    
    // EX
    // if (requisicao.body.nome) {

    //     requisicao.body.nome = requisicao.body.nome.replace("CACERES", "Não Use Caceres")

    //     console.log()
    //     console.log(`Vi que você postou: ${requisicao.body.nome}`)
    //     console.log()
    // }

    next()

}

exports.meuOutroMiddleware = (requisicao , resposta , next) => {
    
    next()
} 

// mongodb+srv://AdM:<password>@cluster0.qmupsay.mongodb.net/?retryWrites=true&w=majority