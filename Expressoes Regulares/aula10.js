const { texto, arquivos, html, alfabeto, cpfs, ips, cpfs2, html2, lookahead } = require("./base");

// encontra todas as palavras
const palavraRegEx = /[\wÁ-ú]+/gm


// Não numeros
const naoNumerosRegEx = /\D/


// valida IP
const ipRegEx = /((25[0-5]|2[0-4][0-9]|1[\d]{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1[\d]{2}|[1-9]\d|\d)/g


// checando algo que parece CPF
const cpfRegEx = /(?:\d{3}\.){2}\d{3}-\d{2}/g


// checando algo  que parece Celular / Telefone
const celularRegEx = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g 


// testando senha forte
const senhaRegEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\)]).{8,}\))/g


// checando algo que parece email
const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ 

// const emailRegEx = /[^\s]+@[^\s]+\.[^\s]+(\w+)*/g (Permissiva)
// const emailRegEx = /[^\s\.]+\.?[^\s\.]+@[^\s]+\.[^\s]+\w+/g 
// const emailRegEx = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

// https://en.wikipedia.org/wiki/List_of_Unicode_characters lista de caracteres unicode