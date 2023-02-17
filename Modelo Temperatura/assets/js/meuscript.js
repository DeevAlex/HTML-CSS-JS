
class Conversor {

    constructor() {
        this.fahrenheit = document.querySelector('#fahrenheit')
        this.celsius = document.querySelector('#celsius')
        this.kelvin = document.querySelector('#kelvin')
        this.resultado = document.querySelector('.resultado')
    }

    iniciar() {
        this.eventos()
    }

    eventos() {

        this.fahrenheit.addEventListener('keyup', e => {
            this.celsius.value = `${((Number(this.fahrenheit.value) - 32) * 5 / 9).toFixed(4)} °C`
            this.kelvin.value = `${((Number(this.fahrenheit.value) - 32) * 5 / 9 + 273.15).toFixed(3)} °K`
        })

        this.celsius.addEventListener('keyup', e => {
            this.fahrenheit.value = `${(Number(this.celsius.value) * 9 / 5) + 32} °F`
            this.kelvin.value = `${(Number(this.celsius.value)) + 273.15} °K`
        })

        this.kelvin.addEventListener('keyup', e => {
            this.fahrenheit.value = `${Number(this.kelvin.value) - 273.15} °F`
            this.celsius.value = `${((Number(this.kelvin.value) - 273.15) * 9 / 5 + 32).toFixed(2)} °C`
        })

    }

}

const conversor = new Conversor()

conversor.iniciar()


