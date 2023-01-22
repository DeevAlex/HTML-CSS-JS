
function criaHoraSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: "UTC"
    })
}

let h = document.querySelector(".horario")
const iniciar = document.querySelector(".btn-iniciar")
const pausar = document.querySelector(".btn-pausar")
const zerar = document.querySelector(".btn-zerar")
const relogio = document.querySelector(".timer")
let segundos = 0
let timer

function iniciaTimer() {

    timer = setInterval(function() {
        segundos++
        relogio.innerHTML = criaHoraSegundos(segundos)
    }, 1000)

    iniciar.classList.add('iniciado')
    iniciar.innerHTML = 'Iniciado'

}

iniciar.addEventListener('click', () => {

    clearInterval(timer)

    if (iniciar.classList.contains('iniciado')) {
        alert('O Cronômetro Já Está Iniciado')
    }

    if (pausar.innerHTML === 'Pausado') {
        pausar.classList.remove('pausado')
        pausar.innerHTML = 'Pausar'
        iniciar.classList.add('iniciado')
        iniciar.innerHTML = 'Iniciado'
    }

    iniciaTimer()
    
})

pausar.addEventListener('click', () => {

    clearInterval(timer)

    if (pausar.classList.contains('pausado')) {
        alert('O Cronômetro Já Está Pausado')
    }

    if (iniciar.classList.contains('iniciado')) {
        iniciar.classList.remove('iniciado')
        pausar.classList.add('pausado')
        iniciar.innerHTML = 'Continuar'
        pausar.innerHTML = 'Pausado'
        relogio.classList.add('timerPausado')
    }

})

zerar.addEventListener('click', () => {

    clearInterval(timer)
    segundos = 0
    relogio.innerHTML = '00:00:00'

    if (iniciar.innerHTML === 'Continuar' || iniciar.classList.contains('iniciado')) {
        iniciar.classList.remove('iniciado')
        pausar.classList.remove('pausado')
        iniciar.innerHTML = 'Iniciar'
        pausar.innerHTML = 'Pausar'
        relogio.classList.remove('timerPausado')
    }

})





