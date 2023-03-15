const { texto, arquivos, html, alfabeto, cpfs, ips, cpfs2, html2, lookahead } = require("./base");



console.log(lookahead)

// console.log(lookahead.match(/.+[^in]active$/gim))


// ?= - Positive lookahead (frases que tem active)
// console.log(lookahead.match(/.+(?=[^in]active)/gim))


// ?= - Positive lookahead (frases que tem inactive)
// console.log(lookahead.match(/.+(?=\s+inactive)/gim))


// ?! - Negative lookahead (frases que não tem active)
// console.log(lookahead.match(/^(?!.*[^in]active).+$/gim))


// ?! - Negative lookahead (frases que não tem inactive)
// console.log(lookahead.match(/^(?!.*inactive).+$/gim))


// Positive lookbehind (frases que começam com Online)
// console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim))


// Negative lookbehind (frases que não começam com Online)
// console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim))


const cpf = `
012.250.796-10
111.111.111-11
147.285.963-10
`

console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}/gm)) // não pega sequencia 


// https://en.wikipedia.org/wiki/List_of_Unicode_characters lista de caracteres unicode