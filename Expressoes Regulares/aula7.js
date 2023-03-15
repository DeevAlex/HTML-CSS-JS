const { texto, arquivos, html, alfabeto, cpfs, ips, cpfs2 } = require("./base");


// ^ - começa com
// $ - termina com
// m - multiline


const cpf = '254.224.877-45'
const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm
console.log(cpf.match(cpfRegExp))
console.log(cpfs2.match(cpfRegExp))



// https://en.wikipedia.org/wiki/List_of_Unicode_characters lista de caracteres unicode