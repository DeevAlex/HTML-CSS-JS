const dados = []
let data = new Date()
let pagina = document.querySelector(".body")
let btnEstaciona = document.querySelector(".btn1")
let btnSaida = document.querySelector(".btn2")
let btnTabela = document.querySelector(".btn3")
let modelo = document.querySelector(".modelo")
let placa = document.querySelector(".placa")
let cor = document.querySelector(".cor")
let entrada = document.querySelector(".entrada") 
let saida = document.querySelector(".saida")

function criaBase() {

    let obj = {modelo: `${modelo.value}`, placa: `${placa.value}`, cor: `${cor.value}`, entrada: `${entrada.value}`, saida: `${saida.value}`}
    dados.push(obj)

}

function criaTabela() { 

    dados.forEach(function(elem, index) {
        const tabela =  document.querySelector(".tabela")
        const tr = document.createElement("tr")
        
        tr.innerHTML += `
    
        <tr>
            <td>${dados[index].modelo}</td>
            <td>${dados[index].placa}</td>
            <td style="background-color: ${dados[index].cor};"></td>
            <td>${dados[index].entrada}</td>
            <td>${dados[index].saida}</td>
        </tr>
        
        `

        tabela.appendChild(tr)
        dados.pop()
    });

}

btnTabela.addEventListener("click", (e) => {
    if (modelo.value.length < 3) {
        alert("Modelo Inválido")
        return
    } else if (placa.value.length < 7) {
        alert("Placa Inválida, Tamanho Requerido 7 Caracteres")
        return
    } else if (cor.value.length < 4) {
        alert("Cor Inválida")
        return
    } else if (entrada.value.length < 4) {
        alert("Horario de Entrada Inválido")
        return
    } else if (saida.value.length < 4) {
        alert("Horirio de Saida Inválido")
        return
    } 
    criaBase()
    criaTabela()
})

btnEstaciona.addEventListener("click", (e) => {
 
    let horario = `${data.getHours() < 10 ? "0" + data.getHours() : data.getHours()}:${data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes()}`
    let entrada = document.querySelector(".entrada").value = horario
})

btnSaida.addEventListener("click", (e) => {
    let horario = `${data.getHours() < 10 ? "0" + data.getHours() : data.getHours()}:${data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes()}`
    let entrada = document.querySelector(".saida").value = horario
})

