const { texto, arquivos } = require("./base");

// quantificadores
// * (opcionais) - 1 ou n (vezes) - {0,}
// + (obrigatorio) - 1 ou n (vezes) - {1,}
// ? (opcionais) 0 ou 1 - {0,1}
// \ - é caractere de escape
// {n, m} - minimo e maximo
// {10,} - no minimo n
// {,10} - de 0 a 10
// {5,10} - de 5 a 10
// {1} - quantificador especifico

// console.log(texto)
// const regExp1 = /Jo+ão+/gi

// console.log(texto.match(regExp1))


// const regExp2 = /\.jpe?g/gi // ou (jpg|jpeg)
// const regExp2 = /\.jpe{0,}g/gi // ou (jpg|jpeg)
const regExp2 = /\.(jp|JP)(e|E)+(g|G)/g // ou (jpg|jpeg)

for (const arquivo of arquivos) {

    const valido = arquivo.match(regExp2)
    // if (!valido) continue

    console.log(arquivo, valido)
}