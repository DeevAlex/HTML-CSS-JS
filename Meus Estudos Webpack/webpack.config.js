const path = require("path") // CommonJS sistema de modulos, padrão do node

// configuraçãp do webpack
module.exports = {
    mode: "development", // development, production
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public", "assets", "JS"), // aqui é o diretorio que vai ser colocado o bundle
        filename: "bundle.js" // aqui pode ser qualquer nome, porém normalmente é bundle
    },
    module: {
        rules: [{
                exclude: /node_modules/, // aqui é uma expressão regular para fazer que o webpack não analise essa pasta
                test: /\.js$/, // qual o arquivo que vai analisar, para formar o bundle, o $ indica para a expressão que o arquivo termina com .js
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env"]
                    },
                }
            }]
    },
    devtool: "source-map" // aqui é para caso aconteça algum erro será possivel saber qual linha do bundle está errada
}