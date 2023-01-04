const aleatorio = (max, min) => Math.floor(Math.random() * (max - min) + min)

const geraNumeros = () => String.fromCharCode(aleatorio(58, 48))
const geraMaiusculas = () => String.fromCharCode(aleatorio(91, 65))
const geraMinusculas = () => String.fromCharCode(aleatorio(123, 97))
const geraSimbolo = () => simbolos[aleatorio(0, simbolos.length)]

const simbolos = ",.;~^[]{}!@#$%*()_+=-&"

export default function geraSenha(qtd, numeros, maiusculas, minusculas, simbolos) {

    // avaliação de curto circuito
    const senhaArray = []
    qtd = Number(qtd)

    for(let i = 0; i < qtd; i++) {
        numeros && senhaArray.push(geraNumeros())
        maiusculas && senhaArray.push(geraMaiusculas())
        minusculas && senhaArray.push(geraMinusculas())
        simbolos && senhaArray.push(geraSimbolo())
    }

    return senhaArray.join("").slice(0, qtd)
}