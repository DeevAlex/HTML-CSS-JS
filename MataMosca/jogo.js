/*

// 1º definindo o tamanho da tela

let altura = 0
let largura = 0

function ajustaTamanho() {
    let altura = window.innerHeight
    let largura = window.innerWidth

    console.log(altura, largura)    
}

ajustaTamanho()

// 2º criando posições randomicas

function posicaoRandomica() {
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX  
    posicaoY = posicaoY < 0 ? 0 : posicaoY  

    console.log(posicaoX, posicaoY) 

    // criar o elemento html

    let mosca = document.createElement("img")

    mosca.src = "imagens/mosca.png"
    mosca.className = tamanhoAleatorio()
    mosca.style.left = posicaoX + "px"
    mosca.style.top = posicaoY + "px"
    mosca.style.position = "absolute"

    document.body.appendChild(mosca)

    tamanhoAleatorio()
}


function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

// 3º Fazendo a mosca olhando para algum dos lados A ou B

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

// 4º criando e removendo as mocas a cada ciclo de tempo

if (document.getElementById("mosca")) {
        document.getElementById("mosca").remove()
    }

// 5º criando o cenario



// 6º controlando os pontos de vida

if (document.getElementById("mosca")) {
    document.getElementById("mosca").remove()

    if (vidas > 5) {
        
    } else {
        document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png"

        vidas++
    }
}

// 7º Game over


// 8º Cronometro



*/

// 1º definindo o tamanho da tela



let altura = 0
let largura = 0
let vidas = 1
let tempo = 20

// recuperando

let tempodeCriarMoscas = 1500

let nivel = window.location.search
nivel = nivel.replace("?", "")

if (nivel === "normal") {
    // 1500 tempo

    tempodeCriarMoscas = 1500



} else if (nivel === "mediano") {
    // 1000 tempo

    tempodeCriarMoscas = 1000



} else if (nivel === "dificil") {
    // 750 tempo

    tempodeCriarMoscas = 750
    


}

function ajustaTamanho() {

    let altura = window.innerHeight
    let largura = window.innerWidth

    console.log(largura, altura)    
}

ajustaTamanho()

let cronometro = setInterval(function () {

    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = "ganhou.html"
    } else {
        document.getElementById("cronometro").innerHTML = tempo
    }

}, 1000)

// 2º criando posições randomicas

function posicaoRandomica() {

    let altura = window.innerHeight
    let largura = window.innerWidth

    // 3º remover a mosca caso exista 

    if (document.getElementById("mosca")) {
        document.getElementById("mosca").remove()

        // 6º controlando os pontos de vida

        if (vidas > 5) {
            window.location.href = ("perdeu.html")
        } else {
            document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png"

            vidas++
        }
    }

    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX  
    posicaoY = posicaoY < 0 ? 0 : posicaoY  

    console.log(posicaoX, posicaoY) 

    // 4º criar o elemento html

    let mosca = document.createElement("img")

    mosca.src = "imagens/mosca.png"
    mosca.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosca.style.left = posicaoX + "px"
    mosca.style.top = posicaoY + "px"
    mosca.style.position = "absolute"
    mosca.id = "mosca"
    mosca.onclick = function() {
        // document.getElementById("mosca").remove()
        this.remove()
    }

    document.body.appendChild(mosca)



}


function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

// 3º Fazendo a mosca olhando para algum dos lados A ou B

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
