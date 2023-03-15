// g - global (encontre todas as ocorrencias)
// i - insentitive (encontrar letras I e i)
// () - para criar grupos, pode ter grupos dentro de grupos (()())
// | - ou

const { texto } = require("./base");

const regExp1 = /(maria|João|Alex)(, hoje sua esposa)/;
const found = regExp1.exec(texto)

console.log(found[0])
console.log(found[1])