const { texto, arquivos, html } = require("./base");

// Ex: <.+>.+<\/.+>

console.log(html)
console.log(html.match(/<.+>.+<\/.+>/g)) // greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)) // non-greedy