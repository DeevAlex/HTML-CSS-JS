const { texto, arquivos, html, alfabeto, cpfs, ips, cpfs2, html2 } = require("./base");


// $1 $2 $3 - retrovisores, para referenciar: \1

// ?: - Ele não conta como + no grupo

console.log(html2)
// console.log(html2.match(/<(\w+)([\s\S]*?)>[\s\S]*?<\/\1>/g))

//                                1             3        4  
console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1  $3 $4'))



// https://en.wikipedia.org/wiki/List_of_Unicode_characters lista de caracteres unicode