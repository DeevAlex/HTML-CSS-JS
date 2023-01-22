
function criaHoraSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: "UTC"
    })
}

let h = document.querySelector(".horario")
const iniciar = document.querySelector(".iniciar")
const pausar = document.querySelector(".pausar")
const zerar = document.querySelector(".zerar")
const relogio = document.querySelector(".timer")
let segundos = 0
let timer

function iniciaTimer() {
    timer = setInterval(function() {
        segundos++
        relogio.innerHTML = criaHoraSegundos(segundos)
    }, 1000)

    iniciar.className = "iniciado"
    iniciar.innerHTML= "Iniciado"
    relogio.className = "timer"
    pausar.classList.remove("pausado")

}

iniciar.addEventListener('click', function(event) {
    clearInterval(timer)
    iniciar.innerHTML = "Iniciar"
    pausar.innerHTML = "Pausar"
    iniciaTimer()
})
pausar.addEventListener('click', function(event) {
    clearInterval(timer)
    relogio.className = "timerPausado"
    iniciar.className = "reativarButton"
    iniciar.innerHTML = "Continuar"
    pausar.innerHTML = "Pausado"
    pausar.className = "pausado"
})
zerar.addEventListener('click', function(event) {
    clearInterval(timer)
    segundos = 0
    relogio.innerHTML = "00:00:00"
    relogio.className = "timer"
    pausar.classList.remove("pausado")
    iniciar.innerHTML = "Iniciar"
    pausar.innerHTML = "Pausar"
    iniciar.className = "button"
})





