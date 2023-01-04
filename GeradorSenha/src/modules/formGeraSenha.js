import geraSenha from "./geradores";

let container = document.querySelector(".container")
let resultado = document.querySelector(".resultado")
let tamanhoSenha = document.querySelector(".tamanhoSenha")
let numeros = document.querySelector(".numeros")
let letrasMaiusculas = document.querySelector(".letrasMaiusculas")
let letrasMinusculas = document.querySelector(".letrasMinusculas")
let simbolos = document.querySelector(".simbolos")
let btn_gerar = document.querySelector(".gerar")

export default () => {
    
    btn_gerar.addEventListener("click", () => {

        if (tamanhoSenha.value < 4) {
            alert("Tamanho é de 4 a 20")
            return resultado.innerHTML = "Tamanho Insulficiente"
        }
        if (tamanhoSenha.value > 20) return alert("Tamanho é de 4 a 20")
        resultado.innerHTML = gera()
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



