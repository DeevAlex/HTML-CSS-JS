const mongoose = require("mongoose")

// Home é o nome do model
// Schema é a modelagem dos nossos dados

// o mongoDB não tem Schema por isso usamos mongoose.Schema para garantir que nossos dados vão estar na base de dados como a gente quer que eles estejam
const HomeSchema = new mongoose.Schema({ // aqui é a configuração dos dados que a gente quer , como , o titulo
    titulo: {type: String, required: true}, // aqui pode ter mais configurações fazer como uma validação , checar se é o valor maximo qtd de caracteres
    descricao: String
}) // se não tiver desse jeito vai ocorrer um erro   

// criar Model

const HomeModel = mongoose.model("Home", HomeSchema)

// mais comum usar class para validar os dados

class Home {

}

module.exports = Home