
const input = document.querySelector("#itarefa")
const btn = document.querySelector(".btn")
const tarefas = document.querySelector(".tarefas")

function criarLi() {

    const li = document.createElement("li") // aqui ele cria o elemento 
    return li

}

function limpaInput() {
    input.value = "" // aqui ele limpa o input
    input.focus() // aqui ele deixa o input selecionado quando adiciona uma nova tarefa
}

function  criaBotaoApagar(li) {

    const botaoApagar = document.createElement("button")
    botaoApagar.innerText = "Apagar"
    botaoApagar.setAttribute("class", "apagar") // aq ele cria um atributo "class" e dps o valor da class "apagar"
    botaoApagar.setAttribute("title", "Apagar está tarefa")
    li.appendChild(botaoApagar) // aqui adiciona o elemento button dentro da li dai fica <li>Conteudo</li> [button]

}


function criaTarefas(textoinput) {

    const li = criarLi() // aqui chama a função criadora de elemento li
    li.innerHTML = `${textoinput} ` // aqui ele cria um texto dentro do li com um espaço das letras e do botão
    tarefas.appendChild(li) // cria o elemento dentro da ul
    limpaInput() // aqui chama a função que ao clicar em adicionar tarefa ele limpa o conteudo do input e mantem o input selecionado após o envio
    criaBotaoApagar(li) 
    salvarTarefas()

}

function salvarTarefas() {

    const liTarefas = tarefas.querySelectorAll("li")
    const listaDeTarefas = []

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace("APAGAR", "").trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJson = JSON.stringify(listaDeTarefas)
    localStorage.setItem("tarefas", tarefasJson)

}

function addTarefasSalvas() {

    const tarefas = localStorage.getItem("tarefas")
    const listaDeTarefa = JSON.parse(tarefas) 

    for(let tarefa of listaDeTarefa) {
        criaTarefas(tarefa)
    }

}

addTarefasSalvas()


input.addEventListener("keypress", (e) => {
    if(e.keyCode == 13) { // aqui ele verifica se a tecla clicada(e) é o enter(13)
        if(!input.value) { // vê se tem algo no input se não houver ele vai deixar em branco
            alert('Campo Não Pode Estar Vazio!')
            return
        }
        if(input.value.length > 47) {
            alert('Limite de Caracteres no campo é de 47')
            return
        }
        criaTarefas(input.value) // aqui ele pega o valor q tá no input e adiciona na função que cria tarefa, e vai adicionando o conteudo dentro do elemento li
    }

})

btn.addEventListener("click", (e) => {
    if(!input.value) { // vê se tem algo no input se não houver ele vai deixar em branco
        alert('Campo Não Pode Estar Vazio!')
        return
    }
    if(input.value.length > 47) {
        alert('Limite de Caracteres no campo é de 47')
        return
    }
    criaTarefas(input.value) // aqui é a mesma coisa só que não é uma tecla precionada é o click do mouse que faz ativar
})


document.addEventListener("click", (e) => {
    const el = e.target
    
    if (el.classList.contains("apagar")) {
        el.parentElement.remove()
        salvarTarefas()
    }

})

// l.parentElement esse fala o pai do elemento 