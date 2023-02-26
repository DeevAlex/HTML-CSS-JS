const fs = require("fs").promises

// const path = require("path")
// const caminhoArquivo = path.resolve(__dirname, "..", "text.json") // esse aqui vai criar um arquivo .txt na pasta aula5 pois pedimos para voltar uma pasta do arquivo com o .. e o __dirname é a pasta atual

// fs.writeFile(caminhoArquivo, "Frase 1\n", {flag: "a" , encoding: "utf8"}) // não precisa mandar as opçoes {}, o W faz com que o arquivo seja limpo caso já exista e vai ser escrito Frase 1, o arquvi já vem no padrão UTF-8 porém se quiser colocar outro pode se não quiser pode apagar , se quiser fazer com que cada atualização no arquvi seja adicionado coloque "a" na flag e ele não vai quebrar a linha então para quebrar coloque \n no texto em que voce quer colocar

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: "w"})
}

