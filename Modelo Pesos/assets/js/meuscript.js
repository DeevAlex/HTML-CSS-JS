
class Conversor {

    constructor() {
        this.tonelada = document.querySelector('#tonelada')
        this.quilo = document.querySelector('#quilo')
        this.gramas = document.querySelector('#gramas')
        this.miligramas = document.querySelector('#miligramas')
        this.microgramas = document.querySelector('#microgramas')
        this.resultado = document.querySelector('.resultado')
    }

    iniciar() {
        this.eventos()
    }

    eventos() {

        this.tonelada.addEventListener('keyup', e => {
            this.quilo.value = Number(this.tonelada.value) * 1000
            this.gramas.value = Number(this.tonelada.value) * 1e+6
            this.miligramas.value = Number(this.tonelada.value) * 1e+9
            this.microgramas.value = Number(this.tonelada.value) * 1e+12
        })

        this.quilo.addEventListener('keyup', e => {
            this.tonelada.value = Number(this.quilo.value) / 1000
            this.gramas.value = Number(this.quilo.value) * 1e+6
            this.miligramas.value = Number(this.quilo.value) * 1e+9
            this.microgramas.value = Number(this.quilo.value) * 1e+12
        })

        this.gramas.addEventListener('keyup', e => {
            this.tonelada.value = Number(this.gramas.value) / 1e+6
            this.quilo.value = Number(this.gramas.value) / 1000
            this.miligramas.value = Number(this.gramas.value) * 1000
            this.microgramas.value = Number(this.gramas.value) * 1e+6
        })

        this.miligramas.addEventListener('keyup', e => {
            this.tonelada.value = Number(this.miligramas.value) / 1e+9
            this.quilo.value = Number(this.miligramas.value) / 1e+6
            this.gramas.value = Number(this.miligramas.value) / 1000
            this.microgramas.value = Number(this.miligramas.value) * 1000
        })

        this.microgramas.addEventListener('keyup', e => {
            this.tonelada.value = Number(this.microgramas.value) / 1e+12
            this.quilo.value = Number(this.microgramas.value) / 1e+9
            this.gramas.value = Number(this.microgramas.value) / 1e+6
            this.miligramas.value = Number(this.microgramas.value) / 1000    
        })

    }

}

const conversor = new Conversor()

conversor.iniciar()


