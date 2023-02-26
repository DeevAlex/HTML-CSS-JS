
const path = require("path")
const caminhoArquivo = path.resolve(__dirname, ".", "text.json")
const escreve = require("./modules/escrever")
const ler = require("./modules/ler")

// esse aqui cria as informaçoes no text.json
// const pessoas = [
//     {nome: "João"},
//     {nome: "Maria"},
//     {nome: "Eduardo"},
//     {nome: "Luiza"},
// ]

// esse aqui faz o objeto pessoa ser um json
// const json = JSON.stringify(pessoas, "", 2)
// escreve(caminhoArquivo, json)

async function leArquivo(caminho) {
    const dados = await ler(caminho)
    renderizaDados(dados)
}

// a função renderizaDados faz a mesma coisa que essa dadosArquivo
// const dadosArquivo = leArquivo(caminhoArquivo).then(dados => console.log(dados))

function renderizaDados(dados) {
    dados = JSON.parse(dados)
    dados.forEach(valor => console.log(valor.nome));
}

leArquivo(caminhoArquivo)