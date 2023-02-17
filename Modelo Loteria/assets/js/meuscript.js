
class Loteria {

    constructor() {
        this.form = document.querySelector('.form')
        this.gerarNumeros = document.querySelector('.btn')
        this.resultado = document.querySelector('.resultado')
        this.copy = document.querySelector('.copy')
        this.btn = document.querySelector('.btn')
        this.copiado = document.querySelector('.copiado')
    }

    iniciar() {
        this.eventos()
    }

    eventos() {

        let catchItem = localStorage.getItem('historico')

        if (localStorage.getItem('lastResult')) {
            catchItem = localStorage.getItem('lastResult')
            this.resultado.innerHTML = `${catchItem.replace(/[^a-zA-Z0-9 ]/g, ' ')}`;
        }

        this.form.addEventListener('submit', e => {

            e.preventDefault()

            let result = []

            for(let i = 1; i <= 13; i++) {
                
                let random = Math.floor(Math.random() * (100 - 1) + 1)

                if (random < 10) {
                    result.push("0" + random)
                } else {
                    result.push(random)
                }

                console.log(random == random)

            }
            let item = localStorage.setItem('lastResult', result)
            this.resultado.innerHTML = result.join(' ')

        })

        this.copy.addEventListener('click', e => {
            setTimeout(() => {
                this.btn.innerHTML = 'SORTEAR'
            }, 600);
            setTimeout(() => {
                this.btn.innerHTML = 'COPIADO!'
            }, 50);
            navigator.clipboard?.writeText && navigator.clipboard.writeText(this.resultado.innerHTML)
        })

    }

}

const loteria = new Loteria()

loteria.iniciar()

