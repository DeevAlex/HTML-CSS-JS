
class Formulario {

    constructor() {
        this.form = document.querySelector('.form')
        this.email = document.querySelector('.email')
        this.senha = document.querySelector('.senha')
        this.entrar = document.querySelector('.btn')
        this.mostraEsconde = document.querySelector('.mostraEsconde')
        this.bordaEmail = document.querySelector('.wrapperEmail')
        this.divErro = document.querySelector('.divErro')
        this.aberto = document.querySelector('.aberto')
        this.fechado = document.querySelector('.fechado')
        this.senhaStatus = document.querySelector('.progresso')
        this.emails =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm
    }

    iniciar() {
        this.fechado.style.display = "block"
        this.aberto.style.display = "none"
        this.eventos()
        this.valida()
    }

    valida() {

        this.senha.addEventListener('keyup', e => {
        
            let barStatus = 0
            this.sendForm = false

            if (e.key === 'Shift') {
                return
            }

            if (this.senha.value.length >= 6) {
                document.querySelector('.quantidadeLetras').classList.add('success')
                barStatus += 20
            } else if (this.senha.value.length < 7) {
                barStatus -= 0
                this.senhaStatus.classList.remove('success')
                document.querySelector('.quantidadeLetras').classList.remove('success')
            }    

            if (this.senha.value.match(/([A-Z])/)) {
                document.querySelector('.maiuscula').classList.add('success')
                barStatus += 20
            } else {
                barStatus -= 0
                document.querySelector('.maiuscula').classList.remove('success')
            }
            
            if (this.senha.value.match(/[a-z]/g) ) {
                document.querySelector('.minuscula').classList.add('success')
                barStatus += 20
            } else {
                barStatus -= 0
                document.querySelector('.minuscula').classList.remove('success')
            }

            if (this.senha.value.match(/[0-9]/g)) {
                document.querySelector('.numero').classList.add('success')
                barStatus += 20
            } else {
                barStatus -= 0
                document.querySelector('.numero').classList.remove('success')
            }

            if (this.senha.value.match(/[!"#$%&'()*+,./:;<=>?@\\^_`{|}~]/g)) {
                document.querySelector('.especial').classList.add('success')
                barStatus += 20
            } else {
                barStatus -= 0
                document.querySelector('.especial').classList.remove('success')
            }

            
            if (barStatus <= 0) {
                this.senhaStatus.classList.remove('failBar')
                this.senhaStatus.classList.remove('successBar')
                this.senhaStatus.classList.remove('halfBar')
                this.senhaStatus.style.width = `0%` 
            } else if (barStatus >= 20 && barStatus <= 49) {
                this.senhaStatus.classList.add('failBar')
                this.senhaStatus.style.width = `20%` 
                this.senhaStatus.classList.remove('successBar')
                this.senhaStatus.classList.remove('halfBar')
            } else if (barStatus >= 50 && barStatus <= 99) {
                this.senhaStatus.classList.add('halfBar')
                this.senhaStatus.style.width = `50%` 
                this.senhaStatus.classList.remove('failBar')
                this.senhaStatus.classList.remove('successBar')
            } else if (barStatus === 100) {
                this.sendForm = true
                this.senhaStatus.classList.add('successBar')
                this.senhaStatus.style.width = `100%` 
                this.senhaStatus.classList.remove('halfBar')
                this.senhaStatus.classList.remove('failBar')
            }
            
        })

    }

    eventos() {

        this.mostraEsconde.addEventListener('click', () => {
            if (this.senha.type === "password") {
                this.senha.type = "text"
                this.aberto.style.display = "block"
                this.fechado.style.display = "none"
            } else {
                this.senha.type = "password"
                this.fechado.style.display = "block"
                this.aberto.style.display = "none"
            }
        })

        this.form.addEventListener('submit', e => {

            this.email.focus()
            e.preventDefault()
            
            if (!this.sendForm) {
                return
            }

            if (!this.email.value.length && !this.senha.value.length) {
                alert("Email ou Senha Inválidos")
                return
            }

            if (!this.email.value.match(this.emails)) {
                this.divErro.style.display = 'flex'
                this.bordaEmail.classList.add('bordaErro')
                return
            } else {
                this.bordaEmail.classList.remove('bordaErro')
                this.divErro.style.display = 'none'
            }

            this.valida()
            console.log('Enviado')
            
        })

    }

}

const formulario = new Formulario()

formulario.iniciar()

// #F03637 - danger
// #F3BB1B  - warning
// #3DC03C - success