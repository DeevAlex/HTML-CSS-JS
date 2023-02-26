const fs = require("fs").promises // se usar promises aqui vai ter usar async e await para tratar os dados 

// esse aqui faz com que leia as coisas do arquivo
module.exports = (caminho) => fs.readFile(caminho, "utf8")
