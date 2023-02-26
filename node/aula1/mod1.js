// const nome = "Alex"
// const sobrenome = "de Oliveira Silva"

// const falaNomeCompleto = () => `${nome} ${sobrenome}`


// poderia ser assim porem mais facil é esse outro jeito
// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNomeCompleto = falaNomeCompleto

// jeito mais facil
// module.exports.nome = nome
// exports.sobrenome = sobrenome
// exports.falaNomeCompleto = falaNomeCompleto
// exports.falaNomeCompleto = falaNomeCompleto

// valor por referencia
// module.exports.nome = nome
// exports.nome = nome
// this.qualquerCoisa = "O que eu quiser exportar"

class Pessoa {

    constructor(nome) {
        this.nome = nome
    }

}

// exports.Pessoa = Pessoa

// sobreescrevendo objeto

const nome = "Pedro"
const sobrenome = "Qualquer Coisa"

module.exports = {
    nome, sobrenome, Pessoa
}

// não pode
exports = {
    // aqui só pode criar as chaves, não sobreescrever o objeto
}

// pode incluir outras coisas

exports.outraCoisa = "Outra coisa"