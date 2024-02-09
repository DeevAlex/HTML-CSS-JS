let input = document.querySelector(".campoTexto")
let quantidadeLetras = document.querySelector(".qtdLetters")

input.addEventListener("keypress", (e) => {
    quantidadeLetras.textContent = (input.value.length + 1) + "/200"
    if (input.value.length == 44) {
        quantidadeLetras.textContent += "\n"
    }
})