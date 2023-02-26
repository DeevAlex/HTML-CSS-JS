const fs = require("fs").promises // scaneia as pastas / arquivos 
const path = require("path") // tratar dos caminhos

// esse aqui lê os arquivos / pastas e joga o nome das pastas em um array , o __dirname faz com que pegue apenas os arquivos que estão nessa pasta
// fs.readdir(path.resolve(__dirname)).then(files => console.log(files)).catch(e => console.log(e))

// para não precisar colocar o __dirname faz desse jeito 
async function readdir(caminhoRaiz) {

    caminhoRaiz = caminhoRaiz || path.resolve(__dirname) // se o caminhoRaiz n for enviado ele vai path
    const files = await fs.readdir(caminhoRaiz) // aqui é listando os arquivos e os diretórios

    // esse percorre os arquivos com o for of lá em baixo
    walk(files, caminhoRaiz)

}

async function walk(files, caminhoRaiz) {

    for(let file of files) {
        const fileFullPath = path.resolve(caminhoRaiz, file)
        const stats = await fs.stat(fileFullPath) // esse pega se o arquvio é um diretório e esse vai me retornar uma promise então coloque await

        if (/\.git/g.test(fileFullPath)) continue // a espressão regular ali faz com que caso nesse teste tenha uma pasta com o nome de .git não seja listada
        if (/node_modules/g.test(fileFullPath)) continue // a espressão regular ali faz com que caso nesse teste tenha uma pasta com o nome de node_modules não seja listada

        if (stats.isDirectory()) {
            readdir(fileFullPath) // se for um diretorio liste todos os arquivos que constem nesse diretorio
            continue
        }

        if (!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)) continue // esse aqui busca todos os arquivos que são .css e .html

        // stats.isDirectory() para retornar true ou false se é ou não um diretório
        console.log(fileFullPath)
    }

}

// ali no caminho pose colocar espaço para identificar a pasta como JavaScript Puro que vai funcionar

// aqui caso tenha o caminho ele jogar no caminho raiz e vai listar pelo for of , caso n tenha ele vai fazer pelo __dirname e vai mostrar apenas o arquivo ou pasta que consta nessa pasta

readdir("C:/Users/alexd/Desktop/JavaScript/JavaScript Puro")