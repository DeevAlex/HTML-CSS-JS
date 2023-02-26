// importar o HomeModel

// const HomeModel = require("../models/HomeModel")

// HomeModel.find().then(dados => console.log(dados)).catch(e => console.log(e)) // isso dai procura na base de dados todos os dados, porém tem como filtrar

// ISSO VAI ESTAR NO HOMEMODEL
// HomeModel.create({ // isso dai vai criar um documento com essas informaçoes e vai gerar uma promise e para capturar precisa usar .then
//     titulo: "Outra coisa Qualquer",
//     descricao: "Outra descrição"
// }).then(dados => console.log(dados)).catch(e => console.log(e))

// não executar primeiro com nodemon pois caso altere algo vai ficar adicionando um dado na base de dados 

exports.paginaInicial = (requisicao , resposta , next) => {

    // console.log("Respondendo o Cliente...")
    // console.log(`'Pagina Inicial' - Olha o que tem na requisicao.session.nome -> ${requisicao.session.nome}`)
    resposta.render("index") // não precisa da extenção .ejs
    // next()

}

exports.trataPost = (requisicao , resposta) => {

    resposta.send(requisicao.body)
    
}