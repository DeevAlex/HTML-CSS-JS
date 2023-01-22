
class BuscaPreenchedorDeCep {

    constructor() {
        this.form = document.querySelector('form')
        this.buscaCep = document.querySelector('#cep')
        this.rua = document.querySelector('#rua')
        this.bairro = document.querySelector('#bairro')
        this.cidade = document.querySelector('#cidade')
        this.estado = document.querySelector('#estado')
        this.botao = document.querySelector('.enviar')
    }

    iniciar() {
        this.envia()
    }

    envia() {
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            if (this.buscaCep.value.length > 9) {
                alert("O campo caracteres deve conter apenas 8 ou 9 caracteres")
                return;
            }
            fetch(`https://viacep.com.br/ws/${this.buscaCep.value}/json`)
                .then(response => response.json())
                .then(resposta => {
                    this.rua.value = resposta.logradouro
                    this.cidade.value = resposta.localidade
                    this.bairro.value = resposta.bairro
                    this.estado.value = resposta.uf
                    alert('Campos Preenchidos automaticamente!')
                })
                .catch(e => console.log(e))
        })
    }

}

const b = new BuscaPreenchedorDeCep()

b.iniciar()
