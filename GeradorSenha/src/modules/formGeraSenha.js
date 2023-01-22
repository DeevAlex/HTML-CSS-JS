import geraSenha from "./geradores";

let container = document.querySelector(".container")
let resultado = document.querySelector(".resultado")
let tamanhoSenha = document.querySelector(".tamanhoSenha")
let numeros = document.querySelector(".numeros")
let letrasMaiusculas = document.querySelector(".letrasMaiusculas")
let letrasMinusculas = document.querySelector(".letrasMinusculas")
let simbolos = document.querySelector(".simbolos")
let btn_gerar = document.querySelector(".gerar")
let senhas = document.querySelector(".senhas")

let limiteMinimo = 4
let limiteMaximo = 20

tamanhoSenha.focus()

export default () => {
    
    if (window.innerWidth > 320 && window.innerWidth < 480 ) {
        tamanhoSenha.setAttribute('max', `${limiteMaximo += 2}`)
    }
    
    if (window.innerWidth > 481 && window.innerWidth < 768 ) {
        tamanhoSenha.setAttribute('max', `${limiteMaximo += 4}`)
    }
    
    if (window.innerWidth > 769 && window.innerWidth < 1023 ) {
        tamanhoSenha.setAttribute('max', `${limiteMaximo += 7}`)
    }
    
    if (window.innerWidth > 1024 && window.innerWidth < 1200 ) {
        tamanhoSenha.setAttribute('max', `${limiteMaximo += 9}`)
    }
    
    if (window.innerWidth > 1201 ) {
        tamanhoSenha.setAttribute('max', `${limiteMaximo += 12}`)
    }

    window.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {

            if (tamanhoSenha.value < limiteMinimo || tamanhoSenha.value > limiteMaximo) return alert(`Tamanho é de ${limiteMinimo} a ${limiteMaximo}`)

            resultado.innerHTML = gera()
            senhas.innerHTML = armazena()

        }
    })

    tamanhoSenha.addEventListener('keypress', () => {
        if (tamanhoSenha.value > limiteMaximo) tamanhoSenha.value = limiteMaximo
    })

    btn_gerar.addEventListener("click", () => {

        if (tamanhoSenha.value < limiteMinimo || tamanhoSenha.value > limiteMaximo) return alert(`Tamanho é de ${limiteMinimo} a ${limiteMaximo}`)
            
        resultado.innerHTML = gera()
        senhas.innerHTML = armazena()

    })

}

function gera() {
    const senha = geraSenha(
        tamanhoSenha.value,
        numeros.checked,
        letrasMaiusculas.checked,
        letrasMinusculas.checked,
        simbolos.checked
        )

        return senha || "Nada Selecionado"
}

function armazena() {
    let senhasA = []
    senhasA.push(gera())
    senhasA.forEach(element => {
        let meusItens = []
        let item = localStorage.setItem('senhaSalva', element)
        let pegarItem = localStorage.getItem('senhaSalva')
        meusItens.push(item)
    })
    return senhasA
}

