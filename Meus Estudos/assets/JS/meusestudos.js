/* 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Ele pega um elemento q tem o id e altera o valor q tem dentro

document.getElementById('nome').value = 'Campo de Texto'

// String

var texto = "texto"

// numero 

var numeroInteiro = -7
var numeroFracionado = 1150.75 float/double

//boolean

var teste = true

// escreve algo no documento hmtl
document.write()

// Usado para debuggar
console.log("Ta funfando")


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// CONCATENAÇÂO

var nome = "Kleber"

document.write("<h1>Olá " + nome + ", tudo bem?</h1>")

// input do dialog(alert)

prompt("texto")


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// null

var teste = null

// undefined

var teste2 = undefined


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// EXERCICIO

var a = 10
var b = 20
var c = null 

var c = b
var b = a
var a = c

document.write("<br>" + a + "<br>")
document.write("<br>" + b + "<br>")
document.write("<br>" + c + "<br>")


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Operadores de comparação (condicionais)

igual (==)
identico (===)
Diferente (!=)
Não identico (!==)
Menor (<)
Maior (>)
Menor igual (<=)
Maior igual (>=)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// IF e ELSE

if (2 != '2') {
    document.write("<br><br>Bloco if (verdadeiro)")
} else {
    document.write("<br><br>Bloco else (false)")
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Casting de dados (alterando valor de tipos de variavel, string para number e vise versa)

var variavel1 = prompt("Digite um numero: ")
var variavel2 = prompt("Digite um outro numero: ")

// inteiro
variavel1 = parseInt(variavel1) //
variavel2 = parseInt(variavel2) //

// Fração
variavel1 = parseFloat(variavel1)
variavel2 = parseFloat(variavel2)

// String
var variavel1 = 10
var variavel2 = 20

document.write(variavel1.toString() + variavel2.toString())

document.write(variavel1 + variavel2)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Operadores Logicos

E (&&)
OU (||)
Negação (!)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// OPERADOR TERNARIO - Assim

var nota = prompt("Digite a nota do aluno: ")
var faltas = prompt("Digite a quantidade de faltas do aluno: ")

var media = 6
var faltas_maximas = 15

if (nota >= media && faltas <= faltas_maximas) {
    document.write("Aluno Aprovado")
} else {
    document.write("Aluno Reprovado")
}

var resultado = <condição> ? <verdadeiro> : <falso> 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// OPERADOR TERNARIO - Ou Assim

var nota = prompt("Digite a nota do aluno: ")
var faltas = prompt("Digite a quantidade de faltas do aluno: ")

var media = 6
var faltas_maximas = 15

var resultado = (nota >= media && faltas <= faltas_maximas) ? "Aprovado" : "Reprovado"


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// EXERCICIO 2 

var idade = prompt("Digite sua idade, para ser verificada ")

if (idade >= 0 && idade <= 15) {
    document.write("Criança")
} else if (idade >= 16 && idade <= 30) {
    document.write("Jovem")
} else if (idade >= 31 && idade <= 59) {
    document.write("Adulto")
} else {
    document.write("Idoso")
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// SWITCH - Pode ter varios switch's

var opcao = 2

switch (opcao, pode ser 'string', 2 inteiro, ou calculo matematico 2 + 2,) {
    case 1:
        // trecho de codigo do caso que será executado
        break
    case 2:
        // trecho de codigo do caso que será executado
        break
    default:
        // trecho de codigo do caso que será executado
        break

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Switch na pratica

var parametro = 2

switch (parametro) {
    case 1: 
    document.write("<h1 class='color'>Parametro 1</h1>")
        break
    case 2:
        document.write("<h1 class='color'>Parametro 2</h1>")
        break
    default:
        document.write("<h1 class='color'>Default</h1>")
        break
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// OPERADORES ARITMETICOS

Adição - (+)
Subtração - (-)
Multiplicação - (*)
Divisão - (/)
Modulo - (%) // usado para ver o resto na divisão
Incremento - (++)
Decremento - (--)

// Operadores Bitwise - OPERA NO BINARIO (NAQUELA TABELA VERDADE E NA TABELA DE BINARIO/DECIMAL)

AND - (&)
OR - (|)
OR EXCLUSIVO (^) - SO RETORNA 1 QUANDO TIVER 1
DESLOCA PARA ESQUERDA - (<<)
DESLOCA PARA DIREITA - (>>)

let n1 = 30
let resp = n1 >> 1 -> esse desloca 1 bit para direita
console.log(resp)
resultado = 15


// Apenas o + que precisa usar o parseInt, pois o javascript consegue difenrenciar os demais, só o de soma que não


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// OPERADORES ARITMETICOS - PRATICA (Para resolver algo primeiro é para colocar em pareteses)
Na frente ++ ou -- só vai reduzir no proximo elemento que for colocado

var num1 = 9
var num2 = 2

document.write("A calculo foi resultado de: " + (num1 + num2))

var num1 = 9
var num2 = 2

document.write("<br>")
document.write("<br>")
document.write("A Soma entre " + num1 + " e " + num2 + " resultou em:" + (num1 + num2))
document.write("<br>")
document.write("A Subtração entre " + num1 + " e " + num2 + " resultou em:" + (num1 - num2))
document.write("<br>")
document.write("A Multiplicação entre " + num1 + " e " + num2 + " resultou em:" + (num1 * num2))
document.write("<br>")
document.write("A Divisão entre " + num1 + " e " + num2 + " resultou em:" + (num1 / num2))
document.write("<br>")
document.write("O Modulo entre " + num1 + " e " + num2 + " resultou em:" + (num1 % num2))
document.write("<br>")
document.write("O Incremento de " + num1 + " resultou em:" + (++num1))
document.write("<br>")
document.write("O Decremento de " + num1 + " resultou em:" + (--num1))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// DICA OPERADORES ARITMETICOS

// assim
// variavel = variavel + 5
// variavel = "Ola, "

// ou assim
// variavel += 5
// variavel -= 5
// variavel *= 5
// variavel /= 5
// variavel %= 5
// variavel += "Jorge"


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// PRECEDENCIA DE EXECUÇÃO OPERADORES ARITMETICOS

document.write(11 + 5 - 5 * 2 / 2)

// () - aplicar precedencia

// 1º multiplicação e subtração
// 2º soma e subtração


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// EXERCICIO - Calculador de IMC


var nome = prompt("Digite seu nome: ")
var altura = prompt("Digite sua altura (em centimetros): ")
var peso = prompt("Digite seu peso: ")

var classificacao1 = "<strong>Baixo peso muito grave"
var classificacao2 = "<strong>Baixo peso grave"
var classificacao3 = "<strong>Baixo peso"
var classificacao4 = "<strong>Peso normal"
var classificacao5 = "<strong>Sbrepeso"
var classificacao6 = "<strong>Obesidade grau I"
var classificacao7 = "<strong>Obesidade grau II"
var classificacao8 = "<strong>Obesidade grau III"

altura = parseFloat(altura)
peso = parseFloat(peso)

altura = altura / 100 

var massa = peso / altura**2

if (massa >= 0 && massa < 15) {
    document.write("<strong>" + nome + "</strong> possui índice de massa corporal igual a <strong>" + massa + "</strong>, sendo classificado como: " + classificacao1)
} else if (massa >= 16 && massa <= 16.99) {
    document.write("<strong>" + nome + "</strong> possui índice de massa corporal igual a <strong>" + massa + "</strong>, sendo classificado como: " + classificacao2)
} else if (massa >= 17 && massa <= 18.49) {
    document.write("<strong>" + nome + "</strong> possui índice de massa corporal igual a <strong>" + massa + "</strong>, sendo classificado como: " + classificacao3)
} else if (massa >= 18,50 && massa <= 24.99) {
    document.write("<strong>" + nome + "</strong> possui índice de massa corporal igual a <strong>" + massa + "</strong>, sendo classificado como: " + classificacao4)
} else if (massa >= 25 && massa <= 29.99) {
    document.write("<strong>" + nome + "</strong> possui índice de massa corporal igual a <strong>" + massa + "</strong>, sendo classificado como: " + classificacao5)
} else if (massa >= 30 && massa <= 34.99) {
    document.write("<strong>" + nome + "</strong> possui índice de massa corporal igual a <strong>" + massa + "</strong>, sendo classificado como: " + classificacao6)
} else if (massa >= 35 && massa <= 39.99) {
    document.write("<strong>" + nome + "</strong> possui índice de massa corporal igual a <strong>" + massa + "</strong>, sendo classificado como: " + classificacao7)
} else {
    document.write("<strong>" + nome + "</strong> possui índice de massa corporal igual a <strong>" + massa + "</strong>, sendo classificado como: " + classificacao8)
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Funções

function calcularAreaTerreno(variavel, variavel) {

    // logica

}

chamar a função 
<nome da função>(valor da variavel, valor da variavel)

// void - realiza algum tipo de processamento e elas não fornecem nenhum tipo de retorno pra quem fez a chamada - execução
// retorno - retorna algum parametro que pode ser reutilizado dentro do script - retorno

// ela funciona mesmo em cima ou em baixo dos codigos
// O retorno pode ser "string", booleano, variavel, number.

// EXEMPLO 

function calcularAreaTerreno(largura, comprimento) {

    // logica
    var area = largura * comprimento

    return area

}

var largura = prompt("Digite uma largura para terreno:")
var comprimento = prompt("Digite um comprimento para terreno:")

var area = calcularAreaTerreno(largura, comprimento)

// document.write("O terreno possui: <u>" + area + "</u> m² de area")
// document.write("O terreno possui: <u>" + calcularAreaTerreno(25, 75) + "</u> m² de area")


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// FLEXIBILIDADE DE PARAMETROS

// function soma(a, b, c, d) {
function soma(a, b) {
    // return a + b + c + d

    b = b === undefined ? 0 : b // para colocar 0 na variavel undefined

    return a + b
}

// document.write(soma())
// document.write(soma(?))
// document.write(soma(7))
// document.write(soma(7, 7, 15, 9)) // disconsidera os parametros adicionais


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ESCOPO DE VARIAVEIS

// 3 escopos: global, função e bloco

// os escopos de função e de bloco visualisam as variaveis do escopo global mas não o contrario

// escopo global

var serie = "Friends"

// escopo de bloco

if (true) {
    var serie2 = "Game of Thrones"
    document.write(serie)
}

document.write(serie2)
document.write("<br>")

// escopo função // esse escopo só vai poder pegar as variaveis externas, se uma externa pegar não vai funcionar

function x() {
    var serie3 = "Breaking Bad"
    document.write(serie)
    document.write(serie2)
}

x() // chamando a função

document.write("<br>")
document.write(serie3)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Funções anonimas e como combinar funções anonimas com a tecnica de wrapper

var exibirSaudacao = function(nome) {
    document.write("Olá " + nome + ", Tudo bem?")
}

exibirSaudacao("Kleber")


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funções de callback

function exibirArtigo(id, callbackSucesso, callbackErro) {
    // logica: recuperar id via requisição http
    if (true) {
        callbackSucesso("Funções de callback em JS", "Funções de callback são muito utilizadas...")
    } else {
        callbackErro("Erro ao recuperar os dados")
    }
}

var callbackSucesso = function(titulo, descricao) {
    document.write("<h1>" + titulo + "</h1>")
    document.write("<hr></hr>")
    document.write("<p>" + descricao + "</p>")
}
var callbackErro = function() {
    document.write("<p> <b>Erro:</b>" + erro + "</p>")
}

exibirArtigo(1, callbackSucesso, callbackErro) // aq e só função!


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Funções nativas para manipular strings

// propriedade length // ele diferencia as letras Minusculas e Maiusculas

var nome = " Jorge Sant Ana "

// document.write("jorge sant ana".length) // conta as letras/espaços
// document.write("jorge sant ana".charAt(7)) // esse metodo pega uma letra dentro da string e fala a letra
// document.write(nome.indexOf("g")) // esse voce coloca a letra e ele pega a posição da letra na frase e ele pega o primeira letra que ta na frase
// document.write(nome.replace("Sant Ana", "da Silva")) // esse pega a frase e recoloca a frase que voce colocou após a virgula
// document.write(nome.substr(6, 4)) // esse você seleciona uma parte da frase e consegue recuperar o resto colocando o quantos caracteres você quer na sequencia
// document.write(nome.toLowerCase(<não precisa de parametro>)) // esse serve para converter todos os caracteres para minuscula
// document.write(nome.toUpperCase(<não precisa de parametro>)) // esse serve para converter todos os caracteres para maiuscula  
// document.write(nome.trim()) // remove os espaços em branco na string (no final e no começo) 
document.write("-" + nome.trim() + "-") 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Funções nativas para tarefas matematicas

// var x = Math.ceil(10.380) // esse metodo faz com que aredonde o numero caso for fração
// var x = Math.floor(10.380) // esse metodo considera somente a parte inteira, que nesse caso é o 10
// var x = Math.round(10.580) // esse metodo considera se deve aredondar para cima ou para baixo, se for até 4 aredonda para baixo e se for 5 ou acima ele aredonda para cima
// var x = Math.random() // esse metodo fornece um numero aleatorio entre 0 e 1  

document.write(x)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Funções nativas para manipular datas

var data = new Date() // esse metodo pega o horario do SO do usuario

// document.write(data.getMilliseconds()) // Milisegundos
// document.write(data.getSeconds()) // Segundos
// document.write(data.getMinutes()) // Minutos
// document.write(data.getHours()) // Hora
// document.write(data.getDate()) // Dia
// document.write(data.getMonth()) // Mes ele considera de 0 a 11
// document.write(data.getFullYear()) // Ano inteiro

document.write("Hora: " + data.getHours() + ":" + data.getMinutes())
document.write("<br>")
document.write("Data: " + data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear())


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// PRATICANDO MAIS SOBRE DATA

var data = new Date()

// Adiciona / Remove dias
document.write(data.toString())

data.setDate(data.getDate() + 1)

document.write("<hr>")

document.write(data.toString())

// Adiciona / remove Meses

document.write(data.toString())

data.setMonth(data.getMonth() - 5)

document.write("<hr>")

document.write(data.toString())

// Adiciona / remove Anos

document.write(data.toString())

data.setFullYear(data.getFullYear() - 5)

document.write("<hr>")

document.write(data.toString())

var data = new Date(2022, 7, 21)


var data2 = new Date(2023, 7, 21)

document.write(data.toString())
document.write("<br>")
document.write(data2.toString())

// converter datas para algo que possa calcular

document.write("<br>")
document.write("<br>")

// document.write(data.getTime()) // pega os milisegundos de 1 de janeiro de 1970 desse modo conseguimos fazer calculos de uma data e outra
document.write(data.getTime()) 
document.write("<br>")
document.write(data2.getTime())

// encontrar a quantidade de milisegundos entre data 1 e data 2

var milisegundos_entre_datas = Math.abs(data.getTime() - data2.getTime())
document.write("<br>")
document.write(milisegundos_entre_datas)

// 1 dia - 24H - 60M - 60S - 1000 Milisegundos, então quantos milisegundos tem em um dia?

document.write("<br>")
document.write("<br>")

var milisegundos_por_dia = (1*24*60*60*1000)
document.write("1d possui: " + milisegundos_por_dia + " milisegundos")

document.write("<br>")
document.write("<br>")

document.write("A diferença entre data e data2 é de: " + Math.ceil(milisegundos_entre_datas / milisegundos_por_dia) + " dia(s)")


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// EXERCICIO 

var num1 = prompt("Digite um numero: ") 
var soma_subtracao = prompt("Soma ou Subtração? (+) ou (-)")
var num2 = prompt("Digite um novo numero: ")

function somarousubtrarir() {

    num1 = parseInt(num1)
    num2 = parseInt(num2)
    var resultado = 0

    if (soma_subtracao == '+') {
        var resultado = (num1 + num2)
    } else if (soma_subtracao == '-') {
        var resultado = (num1 - num2)
    }

    return resultado

}

document.write("resultado: " + somarousubtrarir())


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// EVENTOS - Mouse, teclado, formulario e teclado

// Mouse

onclick, ondblclick (duas vezes), onmouseup (quando solta o click de cima do elemento), onmouseover (sobrepoem o elemento), onmouseout (sai do elemento)

<div style="background-color: blue; height: 150px; width: 150px;" onmouseout="acao2()" onclick="acao()"></div>

function acao() {
    alert("evento clicado!")
}

function acao2() {
    alert("evento tirar o mouse!")
}

// Teclado

onkeydown (pode ser caracter ou nao), onkeypress (somente teclas com caracter)  e onkeyup (pode ser caracter ou nao)

<input onkeypress="acao()" type="text">

// janela 

onresize e onscroll

<body onresize="console.log('Evento Disparado!')" onscroll="console.log('Evento Disparado - Scroll')">

// Formularios 

onfocus (quando clica), onblur(quando apertamos o tab ou em outro elemento) e onchange (comum em elementos select)

<input type="text" onfocus="console.log('evento focus - Disparado!')" onblur="console.log('evento blur - Disparado!')">

    <select onchange="console.log('evento change - Disparado!')">
        <option value="Selecione">1</option>
        <option value="Selecione1">2</option>
        <option value="Selecione2">3</option>
        <option value="Selecione3">4</option>
        <option value="Selecione4">5</option>
    </select>


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// DOM - Document Object Model

// Selecionando elementos da pagina 

getElementById()
getElementsByTagName()
getElementsByClassName()
getElementsByName()

// console.log(document.getElementById('nome_usuario')) // Id
// console.log(document.getElementsByTagName('input')) // tag
// console.log(document.getElementsByClassName('campo_texto')) // class
// console.log(document.getElementsByName('nome')) // name

// Manipulando valores de inputs (text)

    <input type="text" placeholder="Digite um caractere aqui!" id="entrada" onkeyup="distribuirCaracter()">

    <label for="letras">Letras:</label>
    <input type="text" name="letras" id="letras" disabled>
    <br>
    <label for="numeros">Numeros:</label>
    <input type="number" name="numeros" id="numeros" disabled>

function distribuirCaracter() {

    // seleciona o valor digitado
    var caracteres = document.getElementById("entrada").value

    // limpar o campo de digitação
    document.getElementById("entrada").value = ''

    // limpar caracteres em branco

    caracteres.trim()
     
    switch(caracteres) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            // adiciona o caracter no campo referente a numeros
            document.getElementById('numeros').value += caracteres
            break;
        default:
            // adiciona o caracter no campo referente a letras
            document.getElementById('letras').value += caracteres
    }


}

// Manipulando estilos de elemento

<h2>Manipulando Estilo</h2>

    <button onclick="modificandoEstilo('#FF0000', '400px', '400px')">Vermelho</button>
    <button onclick="modificandoEstilo('#00FF00', '800px', '800px')">Verde</button>
    <button onclick="modificandoEstilo('#0000FF', '1100px', '1100px')">Azul</button>

<div style="border: 1px solid black; height: 150px; width: 150px;" id="quadrado"></div>

function modificandoEstilo(cor, l, a) {
    document.getElementById('quadrado').style.background = cor
    document.getElementById('quadrado').style.height = l
    document.getElementById('quadrado').style.width = a
}

.estilo1 {
    background-color: red;
    color: #fff;
}

.estilo2 {
    background-color: blue;
    padding: 2vh;
    text-align: center;
    color: #fff;
}

<div class="estilo1" id="mensagem">Modificando Classe</div>
    
<hr>

<button onclick="modificandoClasse('')">Aplicar Classe</button>

function modificandoClasse() {
    document.getElementById('mensagem').className = 'estilo2'
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// EXERCICIO 

<input onfocus="focarInput('yellow')" onblur="desfocarInput()" onkeyup="verdeVermelho()" type="number" value="0" id="texto">

function focarInput(cor) {
    document.getElementById('texto').style.background = cor

}

function desfocarInput() {
    document.getElementById('texto').style.background = 'white'
}

function verdeVermelho() {

    var caracteres = document.getElementById('texto').value

    caracteres = parseInt(caracteres)

    if (caracteres < 3){
        document.getElementById('texto').style.background = 'red'
    } else {
        document.getElementById('texto').style.background = 'green'
    }

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ARRAY

var lista_frutas = Array()
var lista_frutas = []

lista_frutas = "Banana"
lista_frutas = 200
lista_frutas = "Maça"
lista_frutas = true

var lista_frutas = Array("Maça", "Morango", "Uva")
var lista_frutas = ["Maça", "Morango", "Uva"]

console.log(lista_frutas[1])


// ARRAY MULTDIMENSIONAL

var lista_coisas = Array()

lista_coisas["Frutas"] = Array("Banana", "Maça", "Goiaba", "Manga")
lista_coisas["Pessoas"] = Array("Kleber", "Joao", "Marina", "Juliana")

console.log(lista_coisas)

// INCLUSÂO E EXCLUSÂO em arrays

var lista_coisas = Array()

lista_coisas["frutas"] = Array()
lista_coisas["pessoas"] = Array()

lista_coisas["frutas"].push("Banana")

// lista_frutas[0] = "Pera" 
// lista_frutas[0] = "Uva" 

// incluir elemento no final do array
// lista_frutas.push("Goiaba")

// incluir elemento no inicio do array
// lista_frutas.unshift("Mexirica")

// para excluir elemento do final do array
// lista_frutas.pop("Mexirica")

// para excluir elemento do inicio do array
// lista_frutas.shift("Mexirica")

// ARRAY - Metodo de Pesquisa

var lista_frutas = Array()

// tem q estar igual aqui, se a letra está Maiuscula ou Minuscula

lista_frutas[0] = "Banana"
lista_frutas[1] = "Maça"
lista_frutas[2] = "Morango"
lista_frutas[3] = "Uva"

var auxiliar = lista_frutas.indexOf("Morango")

// if (lista_frutas.indexOf("Morango") == -1) {
if (auxiliar == -1) {
    console.log("Elemento não existe")
} else {
    console.log("Elemento existe e está na posição: " + auxiliar)
}

// ARRAY - Ordenação de elementos

var lista_frutas = Array()

lista_frutas[0] = "Banana"
lista_frutas[1] = "Maça"
lista_frutas[2] = "Uva"
lista_frutas[3] = "Morango"

var lista_numeros = Array()

lista_numeros[0] = 12
lista_numeros[1] = 40
lista_numeros[2] = 3
lista_numeros[3] = 7
lista_numeros[4] = 19
lista_numeros[5] = 1

// Para color em reordenação

// console.log(lista_numeros.sort())
console.log(lista_numeros.sort(ordenaNumeros))

function ordenaNumeros(a, b) {
    return a - b

    // < 0 = a ordenado antes de b
    // > 0 = b ordenado antes de a
    // == a ordem é mantida

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ARRAY - EXERCICIO

    <input type="text" id="ordenar_adicionar">
    <button onclick="funcaoAdicionar()">Adicionar</button>
    <button onclick="funcaoOrdenar()">Ordenar</button>

 var objetos = Array('Cadeira', 'Impressora', 'Garfo')

 function funcaoAdicionar() {

    //recupera o valor inserido no campo id objeto
    var objeto = document.getElementById('ordenar_adicionar').value

    //caso possua algum valor preenchido entra no if
    if(objeto != '') {

    //verifica se o valor já não foi inserido anteriormente
    //se sim, informa que valor já existe, se não insere novo valor
    if( objetos.indexOf(objeto) !== -1) {
    alert('Objeto já foi adicionado')
    } else {
    objetos.push(objeto)
    console.log(objetos)

    document.getElementById('ordenar_adicionar').value = ''
 }

 } else {
 alert('Informe um objeto válido')

 }
 
 }

 function funcaoOrdenar() {

 objetos.sort()
 console.log(objetos)

 }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// WHILE , FOR , DO WHILE - Estruturas de Repetição

// variavel fora

// sintaxe
while(<condição>) {
    // codigo
}

var x = 1

while(x <= 100) {
    document.write("aa" + "<br>")
    x++
}

var x = 1

while(x <= 100) {

    x++
    if (x === 5) { // nesse caso com o continue ele pula para o proximo ent tem q colocar o x++ antes do if para não deixar o loop infinito
        continue
    }

    document.write("aa" + "<br>")
    
}

// DO WHILE

do {
    // comandos

    // Break
    // Continue podem ser usados igualmente como no while

} while (<condição>) {

}

// FOR

for (variavel; condicao; controle) {
    
}

for (var x = 10; x >= 0; x--) {

    document.write(x + "<br>")

    // break
    // continue

}

for (var x = 10; x >= 0; x -= 4) {

    document.write(x + "<br>")

    // break
    // continue

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Estrutura de repetição - percorrer um array 

var lista_frutas = Array()

lista_frutas[0] = "Banana"
lista_frutas[1] = "Maça"
lista_frutas[2] = "Morango"
lista_frutas[3] = "Uva"

var y = 0

while (y < lista_frutas.length) {
    document.write(lista_frutas[y] + "<br>")
    y++
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCICIO FAZER TABUADA (Laços Encadeados)

for(var y = 1; y <= 10; y++) {
    for(var x = 1; x <= 10; x++) {
        document.write(y + ' x ' + x + " = " + (y * x) + "<br>")
        
    }
    document.write("<hr>")
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// For in

// var lista_convidados = Array("Kleber", "Manoela", "Hector", "Marina", "Leticia")

var lista_convidados = Array()

lista_convidados["a"] = "Kleber"
lista_convidados[10] = "Manoela"
lista_convidados["zebra"] = "Hector"
lista_convidados[-1] = "Marina"
lista_convidados[true] = "Leticia"


for(var x in lista_convidados) {
    console.log("Indice: " + x + " valor: " + lista_convidados[x])
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Foreach

// foreach funciona apenas com indice numerico

// var listaFuncionarios = ["Kleber", "Viviane", "Gorge", "Marina", "Lucas", "Leticia"]

var listaFuncionarios =Array()

listaFuncionarios["x"] = "Viviane"
listaFuncionarios[false] = "Rosangela"
listaFuncionarios[3] = "Miguel" 
listaFuncionarios[27] = "Lucas"
listaFuncionarios[-12] = "Fernanda"

var f = function(valor, indice){
    console.log(valor, indice)
}

listaFuncionarios.forEach(f) 
// listaFuncionarios.forEach(function(valor, indice){console.log(valor, indice}) 

/*

var listaFuncionarios = ["Kleber", "Viviane", "Gorge", "Marina", "Lucas", "Leticia"]

// listaFuncionarios.forEach(callback)
listaFuncionarios.forEach(function(valor, indice, array){
    console.log("Indice: " + indice + " valor: " + valor)
    if (valor == "Lucas") {
        array[indice] = "um novo valor"
    }
})

console.log(listaFuncionarios)
document.write("<br>" + listaFuncionarios[3])

)/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// EXERCICIO DE FIXAÇÃO

var lista_frutas = Array()

lista_frutas[0] = "Banana"
lista_frutas[1] = "Maça"
lista_frutas[2] = "Morango"
lista_frutas[3] = "Uva"

for (var y = 0; y < lista_frutas.length; y++) {
    document.write(lista_frutas[y] + "<br>")

}

var x = 1;
var y = 1;
while (x <= 10) {
    y = 1;
    while (y <= 10) {
        console.log(x + ' x ' + y + ' = ' + x * y);
        document.write(x + ' x ' + y + ' = ' + x * y);
        y++;
    }
    console.log("\n");
    document.write("<hr/>");
    x++

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Funções - Trabalhando com parâmetros variaveis

function soma() {

    var resultado = 0

    for (var i in arguments) {
        resultado += arguments[i]
    }

    return resultado
}

console.log(soma(7, 5, 3.2))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Tratamento de erros com try(tentar), catch(pegar), finally(finalmente), e throw (lançar)

// netflix


var video = Array()

video[1] = Array()
video[1]["nome"] = "Fullmetal Alchemist"
video[1]["categoria"] = "Anime"

function getVideo(video) {
    //logica
    // requição HTTP

    try {
        console.log(video[0]["nome"])
    } catch(erro) {
        tratarErro(erro)
        console.log("Agora sim podemos tratar esse erro")
        throw new Error("Houve um erro, estamos resolvendo!")
    } finally {
        console.log("Sempre passa por aqui (try / catch)")
    }

    console.log("A aplicação não morreu")

}

function tratarErro() {
    // logica para registrar o erro no servidor
    console.log(erro)  
}

getVideo(video)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// BOM - Browser Object Model - Permite o acesso via JavaScript o acesso a recursos do browser, como window, Screen, Location e Timing

// WINDOW

<button onclick="abrirPopUp()">Abrir Janela</button>
<button onclick="fecharPopUp()"">Fechar Janela</button>
<button onclick="window.print()"">Imprimir Pagina</button>

var janela

function abrirPopUp() {
    janela = window.open("https://www.google.com/", "nome_da_janela", "width=400, height=400")
}

function fecharPopUp() {
    janela.close()
}

// SCREEN

var altura = window.screen.availHeight
var largura = window.screen.availWidth

document.write("A altura do navegador é: " + altura)
document.write("<br>")
document.write("A largura do navegador é: " + largura)
document.write("<br>")

if (largura < 500) {
    document.write("logica para impressão do menu versão mobile")
} else {
    document.write("logica para impressão do menu versão desktop")
}

// Location

window.location.href = "https://www.google.com.br/"

<button onclick="window.location.href = 'https://www.google.com.br/'">Acessar google</button>
<button onclick="window.location.href = 'https://www.youtube.com.br/'">Acessar youtube</button>
<button onclick="window.location.reload()">Recarregar</button>

// Timing

setTimeout(<acao>, <tempo_em_milisegundos>); -> Executa ação uma vez após o tempo informado
clearTimeout()

setInterval(<acao>, <tempo_em_milisegundos>); -> Sempre executa a ação após o periodo informado 
clearInterval()

var i = 5

// setTimeout(function() { document.write("TESTANDO :D SETTIMEOUT" + "<br>") }, 2000)


var x = setInterval(function() { // usado para desconectar da conta
    document.write(i); i--
    if (i === 0) {
        // window.location.reload()
        clearInterval(x)
    }
}, 1000)

// requisitar valores 

document.location.href = "app.html?" + nivel


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ES6

// Operadores de declaração de variaveis Var e Let

// o let preserva o escopo onde a variaveil foi criada 

// como os escopos funcionam - windou(é um global), a função(é um escopo de função) e if (é um escopo de bloco) por exemplo
// variaveis var no escopo global pode ser usada em escopo de função e em bloco
// se declarar a variavel na função, a variabel só vai estar disponivel na propria função e nos escopos de bloco que estão dentro da função

// EXEMPLO 

var serie = "friends"

function x() {

    var serie = "Game of Thrones"
    console.log("função: " + serie)

    if (true) {
        console.log("bloco dentro da função: " + serie)
    }

}

x()

if (true) {
    console.log("global: " + serie)
}

// Outro exemplo

function x() {

    console.log("Dentro da Função" + serie)

    if (true) {
        console.log(serie)
    }
}

if (true) {
    var serie = "The Walking Dead"
    x()
    console.log(serie)
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// o var faz com que a variavel seja elevada, já o let faz com que preserve o escopo onde a variavel foi criada

// Usando Var e Let

var serie = "friends" se colocar let aqui vai dar erro 

{
    let serie = "The Walking Dead"
    console.log("dentro do bloco " + serie)
}

console.log("Fora do bloco " + serie)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Variaveis Const - Usar caracteres maiusculos

const SERIE = "Friends" // usado para coisas que não mudam, como senhas de banco de dados, links para APIs, e parametros de configuração da aplicacao

function x() { // não tem conflitos por causa do nome por causa dos escopos
    const SERIE = "The Walking Dead"
    console.log("dentro da função: " + SERIE)
}

x()

console.log("Escopo global: " + SERIE)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Template Strings

let nome = "Kleber"

/*

// console.log("Oi " + nome + " tudo bem?")
console.log(`Oi ${nome}, tudo bem?`)

/*

// console.log(`7 + 7 = ${7+7}`)

function calcular(x, y) {
    return x * y
}

console.log(`A multiplicacao de 8 x 8 é ${calcular(8, 8)}`)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Funções - Parâmetros default

function contarUmaHistoria(personagem = "Fabricio", atividade = "Correr no Parque", dono = "Kleber") {
    document.write(`Era uma vez um cachorro chamado ${personagem}, ele adorava ${atividade}, seu dono era o ${dono}, e eles viviam`)
}

contarUmaHistoria(undefined, "Matar Porco", "Irineu")
// contarUmaHistoria("Chaulin Matador de Porco", "Matar Porco", "Irineu")


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Funções - Arrow function

/*
let quadrado1 = function(x) {
    return x * x
}

document.write(quadrado(3))

// let quadrado = x => // apenas com um parametro {
// let quadrado = (x) => x * x 
    // return x * x assim ou de cima, return implicito

// document.write(quadrado(3))

// let parOuImpar = numero => numero % 2 === 0 ? "par" : "impar" // return implicito, o ? finaliza o teste condicional e o : vai ser o "else" 

/*
    if (numero % 2 === 0) {
        return "Par"
    } else {
        return "Impar"
    }
}

document.write(parOuImpar(4))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Introdução a OO (Orientação a Objetos)

// paradigma procedural

let a = 10
let b = 7
let operador = "mult"

function calcular(a, b, operador) {
    if (operador === "mult") {
        console.log(a * b)
    }
}

calcular(a, b, operador)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Paradigma Orientação a Objetos

class Calculadora {

    constructor () {
        this.a = 10
        this.a = 7
        this.operador = "mult"
    }

    calcular() {
        if (this.operador === "mult") {
            console.log(this.a * this.b)
        }
    }
}

calculadora = new Calculadora()
calculadora.calcular()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// OO - Pilar da Abstração

abstrair - entidade (carro) - class, identidade (x = new Carro()) - objeto, Caracteristicas(Marca, modelo, cor...) - atributos, Acões (ligar, acelerar, freiar) - metodos

// modelo da entidade/objeto, iniciar as palavras com letra maiuscula

class ContaBancaria {

    // agencia, numeroConta, saldo e limite // atributos

    constructor() { // metodo construtor
        this.agencia = 7505
        this.conta = 6340105
        this.saldo = 10000
        this.limite = 45000
    }

    depositar(valorDeposito) {
        this.saldo += valorDeposito
    }

    sacar(valorSaque) {
        this.saldo -= valorSaque
    }

    consultarSaldo(consultaSaldo) {
        return this.saldo
    }
}


// a classe não é o objeto, é apenas o modelo que serve para geração de varios objetos se necessarios

let x = new ContaBancaria()  // o new indica para o interpretador do js q eu quero transformar na pratica transformar esse modelo em um objeto, a classe em objeto
let y = new ContaBancaria()  // o new indica para o interpretador do js q eu quero transformar na pratica transformar esse modelo em um objeto, a classe em objeto


// document.write(`<h1>Seu saldo: ${x.consultarSaldo()}<h1>`) 
// x.depositar(75)
// document.write(`<h1>Seu saldo: ${x.consultarSaldo()}<h1>`) 
x.sacar(12050)
document.write(`<h1>Seu saldo: ${x.consultarSaldo()}<h1>`) 

document.write(y.consultarSaldo())


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// reflexão - da abstração a entidade

/*

// um software de uma marcenaria
// A ser feito: Cadeira e Sofá

// paradigma procedural

// cadeira

let qt_pernas = 4
let giratoria = false
let cor = "azul"

let cadeiras = Array()

cadeiras[0] = Array()
cadeiras[0]["qt_pernas"] = 4 
cadeiras[0]["giratoria"] = false
cadeiras[0]["cor"] = "Azul"

cadeiras[1] = Array()
cadeiras[1]["qt_pernas"] = 1 
cadeiras[1]["giratoria"] = true
cadeiras[1]["cor"] = "Branca"

function giraCadeira(indice) {
    if (cadeiras[indice]["giratoria"] === true) {
        console.log("gira")
    } else {
        console.log("não gira")
    }
}

function adicionaCadeira(qt_pernas, giratoria, cor) {
    let cadeira = Array()

    cadeira["qt_pernas"] = qt_pernas
    cadeira["giratoria"] = giratoria
    cadeira["cor"] = cor

    cadeiras.push(cadeira)

}

adicionaCadeira(3, false, "Laranja")

console.log(cadeiras)

// giraCadeira(0)

(/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Paradigma Orientação Objetos

class Cadeira {

    constructor(qt_pernas, giratoria, cor) {
        this.pernas = qt_pernas
        this.giratoria = giratoria
        this.cor = cor
    } 
        
    giraCadeira() {

        if (this.giratoria === true) {
            console.log("gira")
        } else {
            console.log("não gira")
        }       
    }
}

// let cadeira = new Cadeira(4, true, "Roxa")
// let cadeira2 = new Cadeira(2, false, "Preta")

let cadeiras = Array()

cadeiras.push(new Cadeira(4, true, "Roxa"))
cadeiras.push(new Cadeira(4, true, "Roxa"))

// console.log(cadeira)
console.log(cadeiras)

// cadeira.giraCadeira()
// cadeira2.giraCadeira()


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// EXERCICIO OO

// Paradigma Orientação Objetos

class Sofa {

    constructor(qt_lugares, reclinavel, cor) {
        this.lugares = qt_lugares
        this.reclinavel = reclinavel
        this.cor = cor
    } 
        
    reclinaSofa() {

        if (this.reclinavel === true) {
            console.log("reclina")
        } else {
            console.log("não reclina")
        }       
    }
}

// let sofa = new sofa(4, true, "Roxa")
// let sofa2 = new sofa(2, false, "Preta")

let sofas = Array()

sofas.push(new Sofa(4, true, "Roxa"))
sofas.push(new Sofa(8, true, "Preto"))

// console.log(cadeira)
console.log(sofas)

// sofa.giraCadeira()
// sofa2.giraCadeira()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Pilar de Encapsulamento, seguro e reutilizavel

class Tv {

    constructor() {
        this._Canais = Array(2, 4, 5, 7, 10)
        this._canalAtivo = 5
        this._volume = 50
    }

    // getters e setters

    get canalAtivo() {
        return this._canalAtivo
    }

    set canalAtivo(canal) {
        if (this._Canais.indexOf(canal) != -1) {
            this._canalAtivo = canal
        }
        
        
    }

}

let tv = new Tv()

tv.canalAtivo = 3
console.log(tv.canalAtivo)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Pilar Herança, Reutilizavel e Manutenção

class Animal {

    constructor() {
        this.cor = ""
        this.tamanho = null
    }

    dormir() {
        console.log("Dormir")
    }

}


class Cachorro extends Animal{

    // atributos
    constructor() {
        super()
        this.orelhas = 2
    }

    // metodos
    correr() {
        console.log("Correr")
    }

    latir() {
        console.log("Latir")
    }

}

class Passaro extends Animal {

    // Atributos
    constructor() {
        super()
        this.bico = "Dourado e Curto"
    }

    // metodos
    voar() {
        console.log("Voar")
    }

}

class Papagaio extends Passaro {

    constructor() {
        super()
        this.sabeFalar = true
    }

    falar() {
        console.log("BORA BILL, BORA FI DO BILL, BORA MUIÉ DO BILL")
    }

}

let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio()

cachorro.dormir()
passaro.dormir()
papagaio.falar()

console.log(cachorro)

console.log(cachorro.orelhas)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// OPERADOR SUPER

// EX: 

class Animal extends Animal { ---------> vai receber da class anterior
    constructor () {
        this.cor = ""
        this.tamanho = null
    }

    dormir() {

    }
} --------> herança

class Passaro extends Animal { ---------> vai receber da class anterior

    constructor () {
        super()
        this.bico = "pequeno"
    }

    voar() {

    }

} --------> herança

class Papagaio extends Passaro{

    constructor () { ---------> vai receber da class anterior
        super() - pega as propriedades das classes anteriores, e fica antes do this
        this.sabeFalar = false
    }

    falar() {

    }

}

// EX

class Animal {

    constructor(cor, peso, tamanho) {
        this.cor = cor
        this.tamanho = peso
        this.peso = tamanho
    }

    dormir() {
        console.log("Dormir")
    }

}


class Cachorro extends Animal{

    // atributos
    constructor(orelhas, cor, tamanho, peso) {
        super(cor, tamanho, peso)
        this.orelhas = orelhas
    }

    // metodos
    correr() {
        console.log("Correr")
    }

    latir() {
        console.log("Latir")
    }

}

class Passaro extends Animal {

    // Atributos
    constructor(bico, cor, tamanho, peso) {
        super(cor, tamanho, peso)
        this.bico = bico
    }

    // metodos
    voar() {
        console.log("Voar")
    }

}

class Papagaio extends Passaro {

    constructor(sabeFalar, cor, tamanho, peso) { // essa variavel é do contexto da função, e da classe é a this.<variavel> = 
        super("Médio", cor, tamanho, peso) // Aqui pode varios parametros, e esse aqui coloca os parametros para o construtor de cima, o super da acesso ao construtor da classe pai
        this.sabeFalar = sabeFalar
    }

    falar() {
        console.log("BORA BILL, BORA FI DO BILL, BORA MUIÉ DO BILL")
    }

}

let papagaio = new Papagaio(true, "cromado", 35, 450) // Aqui pode varios parametros. esse parametro vai ir para o construtor
let papagaiofilhote = new Papagaio(false, "dourado", 15, 150) // Aqui pode varios parametros. esse parametro vai ir para o construtor
let cachorro = new Cachorro(2, "Azul Marinho", 85, 450) // Aqui pode varios parametros. esse parametro vai ir para o construtor
let passaro = new Passaro(false, "Escarlate", 65, 250) // Aqui pode varios parametros. esse parametro vai ir para o construtor

console.log(papagaio)
console.log(papagaiofilhote)
console.log(cachorro)
console.log(passaro)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// OO Pilar do Polimorfismo - Reutilizavel e Sobreescrita de metodos

// EX

class Animal {

    constructor(cor, peso, tamanho) {
        this.cor = cor
        this.tamanho = peso
        this.peso = tamanho
    }

    dormir() {
        console.log("Dormir")
    }

}


class Cachorro extends Animal{

    // atributos
    constructor(orelhas, cor, tamanho, peso) {
        super(cor, tamanho, peso)
        this.orelhas = orelhas
    }

    // metodos
    correr() {
        console.log("Correr")
    }

    latir() {
        console.log("Latir")
    }

}

class Passaro extends Animal {

    // Atributos
    constructor(bico, cor, tamanho, peso) {
        super(cor, tamanho, peso)
        this.bico = bico
    }

    // metodos
    voar() {
        console.log("Voar")
    }

}

class Papagaio extends Passaro {

    constructor(sabeFalar, cor, tamanho, peso) { // essa variavel é do contexto da função, e da classe é a this.<variavel> = 
        super("Médio", cor, tamanho, peso) // Aqui pode varios parametros, e esse aqui coloca os parametros para o construtor de cima, o super da acesso ao construtor da classe pai
        this.sabeFalar = sabeFalar
    }

    falar() {
        console.log("BORA BILL, BORA FI DO BILL, BORA MUIÉ DO BILL")
    }

}

class Avestruz extends Passaro {
    constructor() {
        super("Grande", "Branco e Preto", 250, 21500) 
    }

    enterarCabeca() {
        console.log("Enterrar a Cabeça")
    }

    voar() { // sobre escrevendo - polimorfismo
        console.log("Não sabe voar")
    }
}

let papagaio = new Papagaio(true, "cromado", 35, 450) // Aqui pode varios parametros. esse parametro vai ir para o construtor
let avestruz = new Avestruz() // Aqui pode varios parametros. esse parametro vai ir para o construtor


console.log(papagaio)

avestruz.enterarCabeca()
avestruz.voar()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Objetos Literais / estaticos

// notação de classe (ES6)

class Produto {
    constructor(descricao, preco) {
        this.descricao = descricao
        this.preco = preco
    }

    verDescricao() {
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }

}

let produto = new Produto("Notebook", 1300)

produto.verDescricao()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Notação de Objeto Literal / Estático

let produtoLiteral = {
    descricao: "Televisão", // Chave, atributo, nome e dps dos : é valor
    preco: 1500,
    verDescricao: function () {
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

produtoLiteral.verDescricao()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Objetos literais - Melhorias de notação

let nome = "Kleber"
let idade = 18
let sexo = "Masculino"
let profissao = "Dev"

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function() {
        console.log(`${this.nome}, ${this.idade}, ${this.sexo} e ${this.profissao}`)
    }
}

let objeto2 = {
    nome,
    idade,
    sexo,
    profissao,
    exibirResumo() {
        console.log(`${this.nome}, ${this.idade}, ${this.sexo} e ${this.profissao}`)
    }
}

console.log(objeto)
objeto.exibirResumo()
console.log(objeto2)
objeto2.exibirResumo()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Objetos literais - Modificando valores

let pessoa = {
    nome:"Kleber",
    idade: 18

}

console.log(pessoa.nome)
console.log(pessoa.idade)

pessoa.nome = "Joana"
pessoa.idade = 31

console.log(pessoa.nome)
console.log(pessoa.idade)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Objetos literais - Criação dinamica de pares nome/valor

let pessoa = {
    nome: "Maria", 
    idade: 15
}

console.log(pessoa)

pessoa.sexo = "Feminino"

console.log(pessoa)

pessoa.dizerOi = () => console.log(`Oi, ${pessoa.nome}`)

pessoa.dizerOi()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Objetos literais - Objetos Unicos

let assinatura = {
    idClient: 153015471174,
    descricao: "Acesso a internet",
    status() {
        console.log("ativo")
    }
}

console.log(assinatura.descricao)

let y = assinatura

console.log(y.descricao)

y.descricao = "Internet + tv + telefone"

console.log(assinatura.descricao)
console.log(y.descricao)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Funções Contrutoras - Criando Objetos

let Carro = function() {
    this.cor = "Amarelo"
    this.modelo = "Chevete"
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180

    this.acelerar = function() {
        // this.velocidadeMaxima += 13

        let[_velocidade] = this.getVelocidadeAtual() + 10
        this.setVelocidadeAtual[_velocidade])

    }
    this.getVelocidadeAtual = function() {
        return this.velocidadeAtual
    }
    this.setVelocidadeAtual = function(velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }
}

let carro = new Carro()

console.log(`a[_velocidade] atual é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`a[_velocidade] atual é: ${carro.getVelocidadeAtual()}`)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Funções contrutoras - Encapsulamento atributos e metodos

let Carro = function() {
    this.cor = "Amarelo"
    this.modelo = "Chevete"
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180

    this.acelerar = function() {
        // this.velocidadeMaxima += 13

        let[_velocidade] = this.getVelocidadeAtual() + 50
        if [_velocidade] > this.velocidadeMaxima) {
        [_velocidade] = this.velocidadeMaxima
        }
        this.setVelocidadeAtual[_velocidade])

    }
    this.getVelocidadeAtual = function() {
        return this.velocidadeAtual
    }
    this.setVelocidadeAtual = function(velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }
}

let carro = new Carro()


console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.velocidadeMaxima = 280
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()

let Carro2 = function() {

    let velocidadeMaxima = 180
    let quilometrosRodados = 0

    this.cor = "Amarelo"
    this.modelo = "Chevete"
    this.velocidadeAtual = 0

    this.acelerar = function() {
        // this.velocidadeMaxima += 13

        let[_velocidade] = this.getVelocidadeAtual() + 50
        if [_velocidade] > velocidadeMaxima) {
        [_velocidade] = velocidadeMaxima
        }
        this.setVelocidadeAtual[_velocidade])

        setQuilometosRodados(0.07)
        console.log(quilometrosRodados)
    }
    this.getVelocidadeAtual = function() {
        return this.velocidadeAtual
    }
    this.setVelocidadeAtual = function(velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }
    var setQuilometosRodados = function(q) { // funciona como um atributo privado do objeto
        quilometrosRodados += q
    }
}

let carro2 = new Carro2()


console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
// carro2.velocidadeMaxima = 280
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()

console.log(carro)
console.log(carro2)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Funções Factory

// Atraves do padrão de projeto Factory nos podemos implementar uma "fabrica" para criação dos nossos objetos em tempo de execução

let Bicicleta1 = {
    cor: "branca",
    marcha: "unica",
    aro: 12,
    pedalar() {console.log(`Método pedalar executado`)}
}

let Bicicleta2 = {
    cor: "Vermelha",
    marcha: "18",
    aro: 26,
    pedalar() {console.log(`Método pedalar executado`)}
}

let BicicletaFactory = function(cor, marcha, aro) {
    // logica
    // requisição http
    // resposta http
    return {
        cor: cor,
        marcha: marcha,
        aro: aro,
        pedalar() {`Método pedalar executado`}
    }
}

let Bicicleta3 = BicicletaFactory("vermelha", "16", 18)
let Bicicleta4 = BicicletaFactory("Cromada", "8", 26)

console.log(Bicicleta1)
console.log(Bicicleta2)
console.log(`Cor: ${Bicicleta3.cor}`)
console.log(Bicicleta3)
console.log(Bicicleta4)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Prototype - introdução

// aviao
// atributos cor e modelo; metodo levantarVoo

// objeto literal

let a1 = {
    cor: "Branco e Azul",
    modelo: "Boeing 747",
    levantarVoo() { console.log("Levantando voo") }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// função construtora 

let AviaoF = function() {
    this.cor = "Branco e Laranja"
    this.modelo = "AirBus a380"
    this.levantarVoo = function() { console.log("Levantando voo") }
}

let a2 = new AviaoF()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class

class AviaoC {
    constructor() {
        this.cor = "Branco e Vermelho"
        this.modelo = "Embraer XXX"
    }

    levantarVoo() {
        console.log("Levantando voo")
    }
}

let aviao = new AviaoC()

console.log(a1)
console.log(a2)
console.log(aviao)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Prototype - Herança

// Object.prototype

Object.prototype.attr50 = "D" // cuidado, ao criar com esse metodo, ele será global

let animal = {
    attr1: "A"
}

let vertebrado = {
    __proto__: animal,
    attr2: "B"
}

let ave = {
    __proto__: vertebrado,
    attr3: "C"
}

console.log(ave.attr1, ave.attr2, ave.attr3, ave.attr50)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Operador rest/spread - parte 1

// contexto spread - Espalhar

// string

let tituloArtigo = "Como utilizar o operador spread/rest"

console.log(tituloArtigo)
console.log(...tituloArtigo)
console.log([...tituloArtigo])


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// array 

let listaCursos1 = ["NodeJS e MongoDB", "ES6, TypeScript e Angular 4"]
let listaCursos2 = ["Multiplataforma Android/IOS", "Introdução ao GNU/Linux"]
let listaCursos3 = ["Web Completo", "Android Completo", ...listaCursos2, ...listaCursos1]

console.log(listaCursos3)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Objeto literal

let pessoa = {
    nome: "Kleber",
    idade: 18
}

let clone = {endereco: "Rua Aparecida Lima Corrêa", ...pessoa}

console.log(clone)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Operador rest/spread - parte 2

function soma(...param) {

    let resultado = 0

    console.log(param)

    param.forEach( v => resultado += v)

    return resultado

}

console.log(soma(3, 8, 5, 7))

function multiplicacao(m, ...p) {
    // console.log(m)
    let resultado = 0
    // console.log(p)

    p.forEach( v => resultado += m * v )

    return resultado

}

console.log(multiplicacao(5, 7, 12, 3, 49,))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// destructuring Assigment parte 1

// destructuring - tira os valores de dentro de uma estrutura, pode ser um array ou um objeto // let [indice] = [...]

let frutas = ["Abacaxi", "Uva", "Pera", "Mamão"]

// let a = frutas[0] assim ou
// let b = frutas[1]
// let c = frutas[2]

// let [a, b, , c] = frutas - pular um indice

let [a, b = "Abacate" , c, d, e = "Mexirica"] = frutas

// console.log(a, b, c, d, e)

let coisas = [["Abacaxi", "Uva", "Pera", "Mamão"], ["José", "Maria"]]
let [, [, n2]] = coisas

console.log(n2)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// destructuring Assigment parte 2

let produto = {
    descricao: "Notebook",
    preco: 1800,
    detalhes: { // composição, é um ou tem um, nesse é tem um
        fabricante: "Samsung",
        modelo: "AxB15E80"
    }
} 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// token 

// array é => []
// objeto é => {}

// let { descricao, preco} = produto
// let { descricao: d, preco: p, desconto} = produto
// let { descricao: d, preco: p, desconto} = produto
// let { descricao: d= "Não definido", preco: p = "Não definido", desconto = 5} = produto

let {detalhes: {fabricante: f, modelo: m}} = produto // coloca os dois pontos para falar que queremos atuar sobre os atributos contidos, no atibutos detalhes, ou renomear a variavel, como acima

console.log(f, m)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// destructuring Assigment parte 3

/ let arr = [10, 20, 30, 40]

// function teste([a, b, , c]) {
//     console.log(a, b, c, d = 100)
// }

// teste(arr)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// objeto

let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
}

function teste({a: x, d, z = 10}) {
    console.log(x, d, z)
}

teste(obj)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// destructuring Assigment parte 4

//array 

let arr = [10, 20, 30, 40]

let [ a, ...x] = arr

console.log(a)
console.log(x)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// objeto

let obj = {
    q: 10, b: 20, c: 30, d: 40 
}

let { q, ...z } = obj

console.log(q)
console.log(z)

*/

// let nome = "1ernando"

// for(let i = 0; i < nome.length; i++) {

//     console.log(nome.replace("1", 0))

// }


// let num = Math.round(9.57) Arredonda para cima
// let num = Math.ceil(9.57) Arredonda para cima
// let num = Math.floor(9.57) Arredonda para baixo
// let num = Math.max(9.57, 15, 80, 1000, 15705) Pega o maior numero
// let num = Math.min(9.57, 15, 80, 1000, 15705) Pega o menor numero
// let num = Math.pow(10, 2) Elevado 
// let num = 9 ** (1 / 2) Pegar resultado de uma raiz quadrada
// num.toFixed(<casas decimais>) Para definir quantas casas decimais vao ser mostradas

// let num = Math.floor(Math.random() * 100)
// let raiz = num ** (1 / 2)
// let aParaBaixo = Math.floor(num)
// let aParaCima = Math.round(num)


// document.write(`<h1> Seu Numero é: ${num} </h1>`)
// document.write(`<p> Raiz quadrada: ${raiz} </p>`)
// document.write(`<p> é inteiro?: ${Number.isInteger(num)} </p>`)
// document.write(`<p> Arredondado Para Baixo: ${aParaBaixo} </p>`)
// document.write(`<p> Arredondado Para Cima: ${aParaCima} </p>`)
// document.write(`<p> Casas Decimais: ${num.toFixed(2)} </p>`)
// document.write(`<p> É NaN?: ${Number.isNaN(num)} </p>`)

// console.table([{nome: "Kleber", idade: 18}, {nome: "Julio", idade: 18}])


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// EXERCICIO

// function enviar() {

//     const formulario = document.querySelector("form")

//     function recebeEventoForm(evento) {
        
//         evento.preventDefault()

//         const nome = document.getElementById("nome").value
//         const sobrenome = document.getElementById("sobrenome").value
//         const peso = document.getElementById("peso").value
//         const altura = document.getElementById("altura").value

//         const pessoas = Array()
//         pessoas.push({
//             nome: nome,
//             sobrenome,
//             peso,
//             altura
//         })


//         console.log(pessoas)

//         const resultado = document.getElementById("resultado")

//         resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p>`


//     }

//     formulario.addEventListener("submit", recebeEventoForm)


// }

// enviar()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// função contrutora Date(), começa com a letra maiuscula


// function data() {

//     const data = new Date()
//     return console.log(`${data.getHours() < 10 ? "0" + data.getHours() : data.getHours()}:${data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes() }:${data.getSeconds() < 10 ? "0" + data.getSeconds() : data.getSeconds()} - ${data.getDate() < 10 ? "0" + data.getDate() : data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`)

// }

// data()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Atribuição via desestruturação

// const pessoa = {
//     nome: "Kleber",
//     sobrenome: "de Matos Caceres",
//     idade: 18,
//     endereco: {
//         rua: "Rua Aparecida Lima Corrêa",
//         numero: 116
//     }

// }

// // Atribuição via desestruturação aq
// const { nome = "Não Existe", sobrenome, idade, endereco: { rua, numero}} = pessoa

// console.log(nome, sobrenome, idade, rua, numero)

// const frutas = ["Maça", "banana", "Pera", "Goiaba", "Uva"]
// const pessoa = {
//     nome: "Kleber ",
//     sobrenome: "de Matos Caceres",
//     idade: 18,
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// for in

// for(let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i], " - ")
// }

// for(let i in frutas) {
//     console.log(frutas[i])
// }

// assim tbm pessoa["nome"]

// for(let i in pessoa) { // esse pega o indice ou a chave dos objetos por isso precisa colocar a varivael[indice]  
//     console.log(pessoa[i])
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// for of

// const nomes = ["Kleber", "Marina", "Lucas", "Sabrina"] 

// pega so as letras

// for(let i = 0; i < nome.length; i++) { 
//     console.log(nome[i])
// }

// for(let valor of nomes) { // esse retorna o valor e não o indice ent não precisa colocar o indice nomes[i], ele funciona em arrays ou strings objetos ele não vai
//     console.log(valor)
// }

// nomes.forEach(function(valor, indice, array) {
//     console.log(valor, indice, array)
// })


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let n = 1
// let resultado = ""

// do {
//     let sorteio = Math.floor(Math.random() * 100)

//     if (sorteio < 10) {
//         resultado += " 0" + sorteio
//     } else {
//         resultado += " " + sorteio
//     }

//     n++

// } while(n <= 6)

// console.log(`Numeros sorteados:${resultado}`)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let i = 0
// let resultado = ""

// while(i < 6) {

//     let n = Math.floor(Math.random() * 100) 

//     if (n < 10) {
//         resultado += " 0" + n 
//     } else {
//         resultado += " " + n
//     }

//     i++

// }

// console.log("Numeros sorteados:" + resultado)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function aleatorio(min, max) {

//     const r = Math.random() * (max - min) + min
//     return Math.floor(r)
// }

// let min = 0
// let max = 50
// let numeroRandomico = aleatorio(min, max)

// while(numeroRandomico !== 10) {
//     numeroRandomico = aleatorio(min, max)
//     console.log(numeroRandomico)
// }

// console.log("---------------------------------------")

// do {
//     numeroRandomico = aleatorio(min, max)
//     console.log(numeroRandomico)
// } while(numeroRandomico !== 15) 


// const n = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

// for(let numeros of n) {

//     if (numeros === 2 || numeros === 5) {
//         console.log(`pulei o ${numeros} e continuei`)
//         continue
//     }

//     if (numeros === 8) {
//         console.log(`Parei no ${numeros} e não vou continuar, sai.`)
//         break
//     }

//     console.log(numeros)
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Função normal

// function verifica(min, max) {

//     if (min === max) {
//         return `${min} e ${max} são iguais`
//     }

//     return max > min ? max : min

// }

// console.log(verifica(8, 8))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Arrow Function

// const max = (max, min) => {

//     if (min === max) {
//         return `${min} e ${max} são iguais`
//     }

//     return max > min ? max : min

// }

// console.log(max(3, 6))

// const ePaisagem = (largura, altura) => largura > altura

// console.log(ePaisagem(1920, 1080))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function fizzBuzz(n) {

//     if (n % 3 === 0 && n % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (n % 3 === 0) {
//         console.log("Fizz")
//     } else if (n % 5 === 0) {
//         console.log("Buzz")
//     } 
    
//     if (typeof n !== 'number') {
//         console.log("Digite apenas numeros")
//     }

// }


// for(let i = 0; i <= 100; i++) {
//     fizzBuzz(i)
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// try {
//     console.log(/*tente*/ tentar)
// } catch(e /* error */) {
//     console.log("Houve um erro")
// }

// function s(x, y) {

//     if(typeof x !== 'number' || typeof y !== 'number') {
//         // throw("x e y precisam ser números") // lançar erro, esse é um jeito custumizado
//         throw new Error("x e y precisam ser números") // função construtora, desse jeito parece o erro do javascript e aq pode mudar não precisa ser só error pode ser Typeerror entre outros
//     }

//     return x + y
// }

// try {
//     console.log(s("5", "5"))
// } catch(e) {
//     // console.log(e) // pega o erro do throw e coloca aqui se não tiver um console.log
//     console.log("Houve um erro: x e y precisam ser numeros") // custumizado
// }

// try {
//     // Executado quando não há erros
//     // console.log(a)
//     console.log("Abrir um Arquivo")
//     console.log("Manipulei o Arquivo e Gerou erro")
//     console.log("Fechei o arquivo")

//     try {
//         console.log(b)
//     } catch(e) {
//         console.log("Deu erro")
//     }

// } catch(e) {
//     // Executado quando há erros
//     console.log("Tratando o erro")
// } finally {
//     // sempre 
//     console.log("FINALLY: Eu sempre sou executado")
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function rH(data) {
//     if (data && !(data instanceof Date)) {
//         throw new Error("Esperando instancia de Date.")
//     }

//     if (!data) {
//         data = new Date()
//     }

//     return data.toLocaleTimeString("pt-BR", {
//         hour12: false, // esse aq coloca o PM e a hora até 12
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit"
//     })
// }

// const data = new Date('22-10-2022 20:10:00')
// const hora = rH()
// console.log(hora)

// function mostraHora() {

//     let data = new Date()

//     return data.toLocaleTimeString('pt-BR', {
//         hour12: false
//     })

// }

// function funcaoDoInterval() {

//     console.log(mostraHora())

// }


// assim setInterval(funcaoDoInterval, 1000) tira aquela função ali de cima
// const timer = setInterval(function() {
//     console.log(mostraHora())
// }, 1000)

// setTimeout(function() {
//     clearInterval(timer)
// }, 3000)

// setTimeout(function() {
//     console.log("Olá Mundo")
// }, 10000)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// falaOi()

// function falaOi () {
//     console.log("Oie")
// }

// First-class objects (Objetos de primeira classe)
// function express

// const souUmDado = function() {
//     console.log("Sou um dado")
// }

// souUmDado()

// FUNCTION EXECUTAFUNCAO(FUNCAO) {
//     CONSOLE.LOG("VOU EXECUTAR SUA FUNÇÃO ABAIXO")
//     FUNCAO()
// }

// executaFuncao(souUmDado)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Arrow function

// CONST F = () => {
//     CONSOLE.LOG("SOU UMA ARROW FUNCTION")
// }

// F()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Função Dentro de um objeto

// const obj = {
//     falar: function() {
//         console.log("Agora eu estou falando!")
//     },
//     parar:function() {
//         console.log("Agora estou parado!")
//     }
// }

// obj.falar()

// a função (só pode ser function se for arrowfunction não funciona) tem uma variavel chamada arguments que armazena todos os argumentos enviados na chamada da função

// for (let agurmento of arguments) {
//     total += agurmento
// }

// function funcao(nome, idade) {
//     let total = 0
//     for (let agurmento of arguments) {
//         total += agurmento
//     }

//     console.log(total)
// }

// funcao(18, 15, 1, 3, 80)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// parametros das funcoes usando desestruturando

// function f({nome, sobrenome, idade}) {
//     console.log(`${nome} ${sobrenome} - ${idade}`)
// }

// let obj = {nome: "Kleber", sobrenome: "de Matos Caceres", idade: 18}
// f({nome: "Kleber", sobrenome: "de Matos Caceres", idade: 18})
// f(obj)

// parametros das funcoes usando array

// function f([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3)
// }

// f([18, 8, 35])

// function conta(operador, acumulador = 1, ...numeros) {

//     for(let numero of numeros) {
//         if(operador === "+") acumulador += numero
//         if (operador === "-") acumulador -= numero 
//         if (operador === "/") acumulador /= numero 
//         if (operador === "*") acumulador *= numero 
//     }

//     console.log(operador, acumulador, numeros)
//     console.log(arguments)
//     console.log(acumulador)

// }

// conta("-", 1, 50, 25, 80, 95)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// retorno da função

// function criaPessoa(nome, sobrenome) {
//     return {nome, sobrenome}
// }

// const p1 = criaPessoa("Kleber", " de Matos Caceres")
// const p2 = {
//     nome: "Kleber",
//     sobrenome: " de Matos Caceres"
// }

// console.log(p1)
// console.log(p2)

// function falaFrase(comeco) {

//     function falaResto(resto) {
//         return comeco + "" + resto
//     }

//     return falaResto

// }

// const fala = falaFrase("Olá, ")
// const resto = fala("Mundo")
// // const olaMundo = falaFrase("Olá Meu Nobre, ")
// // console.log(olaMundo("Kleber"))
// console.log(resto)


// assim:

// function duplica(n) {
//     return n * 2
// }

// function triplica(n) {
//     return n * 3
// }

// function quadriplica(n) {
//     return n * 4
// }

// ou Assim:

// function criaMultiplicador(multiplicador) {

//     return function(n) {
//         return n * multiplicador
//     }

// }

// const duplica = criaMultiplicador(2)
// const triplica = criaMultiplicador(3)
// const quadriplica = criaMultiplicador(4)

// console.log(duplica(5))
// console.log(triplica(5))
// console.log(quadriplica(5))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Escopo lexico

// const nome = "Kleber"

// function falaNome() {
//     console.log(nome)
// }

// function usaFalaNome() {
//     falaNome()
// }

// usaFalaNome()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// closures

// function retornaFuncao(nome) {

//     return function() {
//         return nome
//     }

// }

// const funcao = retornaFuncao("Kleberx")
// const funcao2 = retornaFuncao("Kleber")
// console.dir(funcao)
// console.dir(funcao2)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// funções de callback

// function rand(min = 1000, max = 3000) {

//     const numero = Math.random() * (max - min) + min

//     return Math.floor(numero)

// }

// function f1(callback) {

//     setTimeout(() => {
//         console.log(`f1 - ${rand()}ms`)
//         if (callback) callback()
//     }, rand());

// }

// function f2(callback) {
    
//     setTimeout(() => {
//         console.log(`f2 - ${rand()}ms`)
//         if (callback) callback()
//     }, rand());

// }

// function f3(callback) {
    
//     setTimeout(() => {
//         console.log(`f3 - ${rand()}ms`)
//         if (callback) callback()
//     }, rand());

// }

// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log("Olá Mundo")
//         })
//     })
// })

// f1(f1Callback)

// function f1Callback() {
//     f2(f2Callback)
// }

// function f2Callback() {
//     f3(f3Callback)
// }

// function f3Callback() {
//     console.log("Olá Mundo")
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Funções IIFE - Immediately invoked function expresion

// function qualquerCoisa() {
//     console.log(`+55 (11) 96097-9157`)
// }
// qualquerCoisa()

// (function(idade, peso, altura, endereco, complemento, numero) {
//     const sobreNome = "de Matos Caceres"

//     function criaNome(nome) {
//         return "NOME: " + nome + " " + sobreNome 
//     }

//     function falaNome() {
//         console.log(criaNome("Kleber"))
//     }

//     falaNome()
//     console.log(`IDADE: ${idade}, PESO: ${peso}, ALTURA: ${altura}, ENDEREÇO: ${endereco}, NUMERO: ${numero} e COMPLEMENTO: ${complemento}`)

// })(18, 66, 1.66, "Rua Aparecida Lima Corrêa", "CASA A", 116)

// const nome = "Qualquer coisa"


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Função Fabrica

// function criaPessoa(nome, sobrenome, peso, altura) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         peso: peso,
//         altura: altura,
//         fala(assunto) {
//             return `${nome} está ${assunto}.`
//         },
//         // getter
//         get imc() {
//             const indice = this.peso / (this.altura ** 2)
//             return indice.toFixed(2)
//         },
//         // getter 
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         },

//         //setter 
//         set nomeCompleto(valor) {
//             valor = valor.split(' ')
//             this.nome = valor.shift()
//             this.sobrenome = valor.join(" ")
//             console.log(valor)
//         }
//     }
// }

// const p1 = criaPessoa("Kleber", "de Matos Caceres", 66, 1.66)

// console.log(p1.fala("Estudando"))
// console.log(p1.imc)

// p1.nomeCompleto = "Mario Villas Boa"
// console.log(p1.sobrenome)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Funções Contrutoras, costuma-se usar letra maiuscula na primeira letra, e precisa usar new Pessoa(p...)

// function Pessoa(nome, sobrenome) {

//     // ATRIBUTOS OU METODOS PRIVADOS - AQUI SÓ PODE SER USADO AQUI DENTRO
//     const ID = 123456

//     const metodoInterno = () => {

//     }

//     // ATRIBUTOS OU METODOS PUBLICOS - AQUI PODE SER USADO ALGUMACOISA.<ESSE ATRIBUTOS THIS>
//     this.nome = nome
//     this.sobrenome = sobrenome

//     // ATRIBUTOS PRIVADOS
//     this.metodo = () => {
//         console.log(this.nome + ": sou um metodo")
//     }

// }

// const p1 = new Pessoa("Kleber", " de Matos Caceres")
// const p2 = new Pessoa("Fernando", " Oliveira")

// p2.metodo()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// funções recursivas, é quase mesma coisa de while, uma função q se chama devolta, e que tem um limite

// function recursiva(max) {
//     console.log(max)
//     if (max >= 10) return
//     max++
//     recursiva(max)
// }

// recursiva(0)

// function nota() {

//     let nota = prompt("Entre com uma nota")

//     nota = parseInt(nota)

//     if (nota >= 10 && nota <= 10) {

//         console.log(`A nota é ${nota}`)

//     } else {

//         while (nota > 10 || nota < 0) {

//             let nota = prompt("Entre com uma nota")
//             nota = parseInt(nota)

//             if ( nota <= 10 && nota > 0) {
//                 return
//             }

//         }
//     }

//     console.log(`Nota digitada: ${nota}`)

// }

// nota()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// função geradora 


// function* geradora1 () {

//     // pode usar return, porem melhor usar yield 'valor'

//     // qualquer codigo...
//     yield "1"

//     // qualquer codigo...
//     yield "2"

//     // qualquer codigo...
//     yield "3"


// }

// const g1 = geradora1()

// for (let valores of g1) {
//     console.log(`valores ${valores}`)
// }

// function* contador() {

//     let i = 0

//     while(i <= 51) {
//         yield i
//         i++
//     } 

// }

// const g2 = contador()

// for(let valores2 of g2) {
//     console.log(g2.next().value)
// }

// function* geradora3() {

//     yield ""
//     yield "Haverá uma continuação"
//     yield 1
//     yield 2
//     yield 3

// }

// function* geradora4() {

//     yield* geradora3()
//     yield 4
//     yield 5
//     yield 6
//     yield "Houve uma continuação"

// }

// const g4 = geradora4()

// for (valores3 of g4) {
//     console.log(valores3)
// }

// function* gerador5 () {

//     yield function () {
//         console.log("Vim do yield 1")
//     }

//     return function () {
//         console.log("Esse aqui vai ser executado e vai parar, e vai cancelar o proximo yield")
//     }

//     // ...

//     yield function () {
//         console.log("Vim do yield 2")
//     }

// }

// const g5 = gerador5()
// const func1 = g5.next().value
// const func2 = g5.next().value

// func1()
// func2()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Revisão sobre Array

// Array Indexado
//                 0         1        2
// const nomes = ["Eduardo", "Maria", "Joana"]

// nomes[2] = "Joao"

// console.log(nomes)

// delete nomes[2] 

// console.log(nomes)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Array Literal
// const nomes2 = new Array("Eduardo", "Maria", "Joana", "Fabio", "Jessica", "Mario")


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // valores por Referencia 

// console.log(referencia)

// const meuNome = "Kleber de Matos Caceres"

// const b = meuNome


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // esse faz com que os nomes sejam seraparados quando atingem o espaço como está definindo no split dai fica assim [ 'Kleber', 'de', 'Matos', 'Caceres' ]
// const meuNomeSeparado = meuNome.split("-")

// console.log(meuNomeSeparado)

// // e para unir todos os valores do array Kleber de Matos Caceres

// const nomes = ["Kleber", "de", "Matos", "Caceres"]
// const nome = nomes.join(" ")

// console.log(nome)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let btn_calculo = document.querySelector(".calcular")

// btn_calculo.addEventListener("click", (e) => {

//     let i1 = document.querySelector(".numero1").value
//     let i2 = document.querySelector(".numero2").value
//     let resultado = document.querySelector(".resultado")

//     for(let i = 0; i <= i2; i++) {
//         resultado.innerHTML += `${i1} x ${i} = ${i1 * i} <br>`
//     }

// })


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//              -5       -4      -3        -2         -1
//              0         1        2          3         4
// let nomes = ["Marina", "Kleber", "Eduardo", "Beatriz", "Julia"]

// nomes.splice(indice, delete, elem1, elem2, elem3)

// Simulando push com o metodo splice
// nomes.splice(nomes.length, 0, "Luiz", "Otavio", "Miranda")

// Simulando unshift com o metodo splice
// nomes.splice(2, 0, "Luiz", "Otavio")
// console.log(nomes)

// Simulando pop com o metodo splice
//const removidos = nomes.splice(3, 2, "Jonas", "Silva")

// Simulando shift com o metodo splice
// const removidos = nomes.splice(0, 1)
// console.log(nomes, removidos)

// console.log(Number.MAX_VALUE) esse é o maior valor que o JS consegue ir


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// CONCATENANDO ARRAYS
// const a1 = [1, 2, 3]
// const a2 = [4, 5, 6]
// const a3 = a1.concat(a2, [7, 8, 9], "Kleber")
// const a4 = [...a1, ...a2, "Kleber", ...[7, 8, 9]]

// console.log(`antes ${a1} + ${a2} depois: ${a4}`)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Filter -> sempre vai retornar um array, com a mesma quantidade de elementos ou menos

// Retorne os numeros maiores que 10

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// Forma mais longa
// function callbackFilter(valor) {
//     return valor > 10
// } 

// forma mais curta usando função anonima
// const numerosFiltrados = numeros.filter(valor => valor > 10)


// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log("valor: " + valor + " indice: " + indice + " array: " + array)
//     return valor > 10
// })

// console.log(numerosFiltrados)

// retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a

// const pessoas = [
//     {nome: "Kleber", idade: 18},
//     {nome: "luiz", idade: 62},
//     {nome: "eduardo", idade: 55},
//     {nome: "leticia", idade: 19},
//     {nome: "rosana", idade: 32},
//     {nome: "wallace", idade: 47},
//     {nome: "maria", idade: 23}
// ]

// const pessoascomnomescom5letras = pessoas.filter(valor => valor.nome.length >= 5)

// const pessoascommaisde50anos = pessoas.filter(valor => valor.idade > 50)

// const pessoascomnomequeterminamcoma = pessoas.filter(valor => valor.nome.endswith("a"))

// console.log(pessoascomnomescom5letras)
// console.log(pessoascommaisde50anos)
// console.log(pessoascomnomequeterminamcoma)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Map

// na função map ele altera valores 

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// let numerosDobrados = numeros.map(valores => "valor dobrado: " + valores * 2)

// console.log(numerosDobrados)

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

// const pessoas = [
//     {nome: "Kleber", idade: 18},
//     {nome: "luiz", idade: 62},
//     {nome: "eduardo", idade: 55},
//     {nome: "leticia", idade: 19},
//     {nome: "rosana", idade: 32},
//     {nome: "wallace", idade: 47},
//     {nome: "maria", idade: 23}
// ]

// esse aqui fala os nomes dentro desses objetos
// let nomes = pessoas.map(valor => valor.nome)
// console.log(nomes)

// esse aqui deleta a chave "nome"
// let nomesSemAChaveNome = pessoas.map(valor => delete valor.nome)
// let criandoUmaChaveIdade = pessoas.map(valor => ({idade: valor.idade}))
// console.log(nomesSemAChaveNome)

// esse aqui pega todas as idades dos objetos
// let idades = pessoas.map(valor => valor.idade)
// console.log(idades)

// esse aqui ele cria uma chave id no objeto
// let ids = pessoas.map((valor, indice) => {

    // para caso de não afetar o objeto principal cria-se um novo, os de cima afeta os valores do array original, por isso tem que fazer assim
    // const novoObjeto = {...valor}
    // let numeroAleatorio = Math.floor(Math.random() * 100000)
    // novoObjeto.id = (indice + 1) * numeroAleatorio
    // return novoObjeto

// })

// console.log(pessoas)
// console.log(ids)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Reduce

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// let soma = numeros.reduce((acumulador, valor, indice, array) => {
//     // console.log(acumulador, valor)
//     return acumulador += valor
// }, 0) // aqui pode ser numero, array, ele é o valor/indice que começa, esse 0 é o valor inicial do acumulador

// let pares = numeros.filter(valor => valor % 2 == 0)

// let dobro = numeros.map(valor => valor * 2)


// console.log(soma)
// console.log(pares)
// console.log(dobro)

// const pessoas = [
//     {nome: "Kleber", idade: 18},
//     {nome: "luiz", idade: 62},
//     {nome: "eduardo", idade: 55},
//     {nome: "leticia", idade: 19},
//     {nome: "rosana", idade: 32},
//     {nome: "wallace", idade: 47},
//     {nome: "maria", idade: 23}
// ]

// let pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
//     if (acumulador.idade > valor.idade) return acumulador
//     return valor
// })

// console.log(pessoaMaisVelha)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Filter + Map + Reduce

// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// let filtrarPares = numeros

// .filter(valor => valor % 2 == 0)
// .map(valor => valor * 2)
// .reduce((acumulador, valor) => acumulador += valor, 0)

// console.log(filtrarPares)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ForEach

// const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// jeito antigo
// for (let valor of a1) {
//     console.log(valor)
// }

// usando foreach

// let acumulador = 0
// let n = a1.forEach((valor, indice, array) => {
//     console.log(acumulador += valor)
// })// console.log(valor)) // console.log(array[indice])) // console.log("valor: " + valor, "indice: " + indice))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Revisão de objeto

// const pessoa = {
//     nome: "Kleber",
//     sobrenome: " de Matos Caceres"
// }

// const chave = "nome"
// console.log(pessoa[chave] + pessoa["sobrenome"])
// console.log(pessoa.nome + pessoa.sobrenome)


// Utilizando a forma de construtor para fazer um objeto
// const pessoa1 = new Object()

// pessoa1.nome = "Kleber"
// pessoa1.sobrenome = " de Matos Caceres"
// console.log(pessoa1.nome + pessoa1.sobrenome)

// Utilizando a forma literal para fazer um objeto
// const pessoa2 = {
//     nome: "Kleber",
//     sobrenome: " de Matos Caceres",
//     idade: 18,
//     falarNome() {
//         return `${this.nome + this.sobrenome}, falou seu nome.`
//     },
//     getDataNascimento() {
//         let data = new Date()
//         return `${this.nome} Nasceu em ${data.getFullYear() - this.idade}`
//     }
// }

// console.log(pessoa2.getDataNascimento())

// // delete pessoa2.nome , deleta uma chave do objeto
// pessoa2.falarNome()

// for(let chave in pessoa2) {
//     console.log(chave) // esse vê as chaves 
    // console.log(pessoa2[chave]) // esse vê os valores dentro das chaves no objeto
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function criaPessoa(nome, sobrenome) {

//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome + this.sobrenome}`
//         } 
//     }
// }

// const p1 = criaPessoa("Kleber", " de Matos Caceres")
// console.log(p1.nomeCompleto)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function Pessoa(nome, sobrenome) {

//     this.nome = nome
//     this.sobrenome = sobrenome

// }

// {} <- no momento de instanciar ele atrela o this a esse objeto
// const p1 = new Pessoa("Kleber", " de Matos Caceres")
// Para travar a troca de valor de um array ou objeto é Object.freeze(<variavel do array ou objeto>)
// console.log(p1)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// defineProperty -> defineProperties = serve para travar uma ou mais propriedades do objeto

// function Produto(nome, preco, estoque) {

//     this.nome = nome
//     this.preco = preco

//     // uma propriedade    obj     chave      objeto com a descrição
//     Object.defineProperty(this, "estoque", {
//         enumerable: true, // esse aqui mostra a chave estoque quando o objeto for chamado no console.log
//         value: estoque, // function () {return estoque}, // esse aqui é o valor que sera exibido
//         writable: false, // esse aqui o valor não pode ser alterado se caso estiver em false no chamado p.estoque = 1000000 
//         configurable: true // esse aqui diz que pode ser reconfigurada, caso true você pode alterar qualquer coisa como value, enumerable entre outros caso false não

//     })

    // caso configurable esteja false ele desconsidera esse de baixo, caso true ele considera, e caso usar delete p1.estoque estando false ele não apaga a chave estoque

    // Object.defineProperty(this, "estoque", {
    //     enumerable: true, // esse aqui mostra a chave estoque quando o objeto for chamado no console.log
    //     value: estoque, // esse aqui é o valor que sera exibido
    //     writable: false, // esse aqui o valor não pode ser alterado se caso estiver em false no chamado p.estoque = 1000000 
    //     configurable: false // esse aqui diz que pode ser reconfigurada, caso true você pode alterar qualquer coisa como value, enumerable entre outros caso false não

    // })

    // esse aqui pega todas as propriedades e pode configura-las
    // Object.defineProperties(this, {
    //     nome: {
    //         enumerable: true,
    //         value: nome,
    //         writable: true,
    //         configurable: false,
    //     },
    //     preco: {
    //         enumerable: true,
    //         value: preco,
    //         writable: true,
    //         configurable: false,
    //     },
    // })


    // usando Getters e Setters

    // let estoquePrivado = estoque
    // Object.defineProperty(this, "estoque", {
    //     enumerable: true,
    //     configurable: true,
    //     get: function () {
    //         return estoquePrivado
    //     },
    //     set: function(valor) {
    //         if (typeof valor !== "number") {
    //             throw new TypeError("Digite um numero, na atribuição de estoque")
                // console.log("Digite um numero no estoque")
                // return
//             }
//             estoquePrivado = valor
//         }
//     })

// }

// function criaProduto(nome) {
//     return {
//         get nome() {
//             return nome
//         },
//         set nome(valor) {
//             valor = valor.replace("coisa", "https://")
//             nome = valor
//         }
//     }
// }

// Object.keys(<variavel do objeto>) para ver as chaves do objeto, for(let chave in p) {console.log(chave)} faz a mesma coisa

// const p = new Produto("Camiseta", 20, 5)
// const p2 = new criaProduto("Camiseta")

// p.estoque = "O valor que eu quero"
// p2.nome = "Qualquer coisa"
// console.log(p2.nome)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Métodos úteis para objetos

// Object.values
// Object.entries
// Object.assign(des, any)
// Object.getOwnPropertyDescriptor(o, "prop")
// ... (spread)

// já vimos 

// Object.keys (retorna as chaves )
// Object.freeze (congela o objeto)
// Object.defineProperty (define uma propriedade)
// Object.defineProperty (define varias propriedades)

// const produto = {nome: "Caneca", preco: 14.5, material: "Porcelana"}
// console.log(Object.getOwnPropertyDescriptor(produto, "nome")) // esse aqui vê as propriedades do objeto, como, writable, enumerable etc
// console.log(Object.values(produto)) esse aqui ele fala os valores das chaves do objeto
// console.log(Object.entries(produto)) // esse aqui mostra um array com as chaves e com os valores [ [ 'nome', 'Caneca' ], [ 'preco', 14.5 ] ]


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// desestruturando
// for(let [chave, valor] of Object.entries(produto)) {
//     console.log(chave, valor)
// }


// const outraCoisa = {
//     ...produto,
//      material: "porcelana"
// }

// Object.freeze(produto)

// produto.nome = "Relogio"

// mesma coisa do spread
// const outraCoisa = Object.assign({}, produto, {material: "porcelanato"})

// const caneca = { nome: produto.nome, preco: produto.preco}

// produto.nome = "Xicara"
// outraCoisa.nome = "Panela"


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*

O JavaScript é baseado em protótipos para passar propriedades e metodos de um objeto para outro

Definição de protótipos:
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções

Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora
que foi uusada para cria-lo. Quando tentamos acessar esse membro de um objeto, primeiro o motor do JavaScript vai tentar encontrar
esse membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro

*/


// Contrutora -> molde (classe)
// function Pessoa (nome, sobrenome) {
    // this.nome = nome
    // this.sobrenome = sobrenome
    // this.nomeCompleto = () => "ORIGINAL" + this.nome + " " + this.sobrenome // se n excluir esse o prototype vai vai ser ignorado
// }


// instancia
// const p1 = new Pessoa("Kleber", "de M. C.")
// const p2 = new Pessoa("Maria", "C.")
// const data = new Date() // <-- Date - Função Contrutora

// Pessoa.prototype === p1.__proto__

// Pessoa.prototype.nomeCompleto = function() {this.nome + " " + this.sobrenome}

// console.dir(p1)
// console.dir(data)

// Ex cadeia de prototype

// dps a instancia   VEM PRA CÁ    Começa 
// data -> Date.prototype -> Object.prototype

// Pessoa 
//     nome: "Kleber" -> atributo
//     nomeCompleto: () => { this.nome + " " + this.sobrenome } -> metodo
//     sobrenome: "de M. C." -> atributo
//     [[Prototype]]: Object


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Manipulando prototypes


// o JS faz a chamada da função contrutora de objeto - new Object, tem um Object.prototype atrelado a ela 
// const objA = {
//     chaveA: "A"
//     // __proto__: Object.prototype vem implicitamente
// }

// const objB = {
//     chaveB: "B"
//     // __proto__: objA
// }

// const objC = {
//     chaveC: "C"
//     // __proto__: objB
// }

// const objD = {
//     chaveD: "D"
//     // __proto__: objC
// }

// const objE = {
//     chaveE: "E"
//     // __proto__: objD
// }

// não utilizar o __proto__ muito pois ele atrapalha na performance MDN __proto__ para ver mais
// assim é um cadeia, caso não queira que pule de um para outro é so setar o primeiro Object.setPrototypeOf(objD, objA) ou outro
// Object.setPrototypeOf(objB, objA) // esse metodo faz com que o objB herde as chaves do objA objB.chaveA
// Object.setPrototypeOf(objC, objB) 
// Object.setPrototypeOf(objD, objC) 
// Object.setPrototypeOf(objE, objD) 

// console.log(objE)

// function Produto(nome, preco) {

//     this.nome = nome
//     this.preco = preco

// }

// melhor colocar os metodos fora da função contrutora
// Produto.prototype.desconto = function(percentual) {
//     this.preco = this.preco - (this.preco * (percentual / 100))
// }
// Produto.prototype.aumento = function(percentual) {
//     this.preco = this.preco + (this.preco * (percentual / 100))
// }

// const p1 = new Produto("Camisa", 140)

// literal
// const p2 = {
//     nome: "Caneca",
//     preco: 15
// }

// esse aqui pegou os prototypes do objeto Produto e colocou no p2 e dai fica disponivel os metodos aumento e desconto
// Object.setPrototypeOf(p2, Produto.prototype)

// p1.desconto(100)
// p1.aumento(100)
// console.log(p1)
// p2.aumento(100)
// console.dir(p1)
// console.dir(p2)

// const p3 = Object.create(Produto.prototype, {
//     preco: {
//         writable: true,
//         configurable: true,
//         enumerable: true,
//         value: 113
//     },
//     tamanho: {
//         writable: true,
//         configurable: true,
//         enumerable: true,
//         value: 38
//     }
// })
// p3.preco = 1115
// p3.aumento(1)
// console.log(p3)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Herança


// Produto -> aumento e desconto
// Camiseta, Caneca

// function Produto(nome, preco) {

//     this.nome = nome
//     this.preco = preco
//     this.cor
//     this.material

// }

// Produto.prototype.aumento = function(quantia) {
//     this.preco += quantia
// }
// Produto.prototype.desconto = function(quantia) {
//     this.preco -= quantia
// }

// function Camiseta(nome, preco, cor) {
//     Produto.call(this, nome, preco) // link de funções
//     this.cor = cor
// }

// Camiseta.prototype = Object.create(Produto.prototype)
// Camiseta.prototype.constructor = Camiseta

// Camiseta.prototype.aumento = function(percentual) {
//     this.preco = this.preco + (this.preco * (percentual / 100))
// }

// function Caneca(nome, preco, material, estoque) {
//     Produto.call(this, nome, preco)
//     this.material = material
//     this.estoque = estoque
    
//     Object.defineProperty(this, "estoque", {
//         enumerable: true,
//         configurable: true,
//         get: function(estoque) {
//             return estoque
//         }, 
//         set: function(valor) {
//             if (typeof valor !== "number") return
//             estoque = valor
//         }
//     })

// }

// Caneca.prototype = Object.create(Produto.prototype)
// Caneca.prototype.constructor = Caneca

// Caneca.prototype.aumento = function(percentual) {
//     this.preco = this.preco + (this.preco * (percentual / 100))
// }

// const produto = new Produto("Generico", 111)
// const camiseta = new Camiseta("Time", 120, "Preta")
// const caneca = new Caneca("Caneca", 45, "Porcelana", "5")

// camiseta.aumento(100)
// caneca.aumento(7)


// console.log(produto)
// console.log(camiseta)
// console.log(caneca)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Ex - CPF

/*

705.484.450-52 e 070.987.720-03

 7   0   5   4   8   4   4   5   0 - 9° Digitos do CPF
 x   x   x   x   x   x   x   x   x - Multiplicar por
 10  9   8   7   6   5   4   3   2 - 10 até 2
 70  0   40  28  48  20  16  15  0 - Resultado = 237
11 - (237 % 11) = 5 ( Primeiro Digito ) -> não pode ser maior q 9 caso seja tem que consideramos ele zero

 7   0   5   4   8   4   4   5   0   5 - 9° Digitos do CPF
 x   x   x   x   x   x   x   x   x   x - Multiplicar por
 11  10  9   8   7   6   5   4   3   2 - 10 até 2
 77  0   45  32  56  24  20  20  0   10 - Resultado = 284
11 - (284 % 11) = 2 ( Segundo Digito)


CPF PARA VERIFICACAO
x   x   x   x   x   x   x   x   x
10  9   8   7   6   5   4   3   2
50  18  56  7   36  10  16  21  16
11 - (230 % 11) 1° digito

5   2   7   1   6   2   4   7   8   1
x   x   x   x   x   x   x   x   x   x
11  10   9   8   7   6   5   4   3   2
55  20  63  8   42  12  20  28  24  2
11 - (274 % 11) 2° Digito

// /\D+/g, isso é a representa qualquer coisa que não é um numero

*/


// Validador de CPF

// function ValidaCPF(cpfEnviado){

//     Object.defineProperty(this, "cpfLimpo", {
//         enumerable: true,
//         get: function() {
//                 return cpfEnviado.replace(/\D+/g, "")
                
//         }
//     })

// }

// ValidaCPF.prototype.valida = function() {

//     if (typeof this.cpfLimpo === "undefined") return false
//     if (this.cpfLimpo.length !== 11) return false
//     if (this.isSequencia()) return false

//     const cpfParcial = this.cpfLimpo.slice(0, -2)
//     const digito1 = this.criaDigito(cpfParcial)
//     const digito2 = this.criaDigito(cpfParcial + digito1)

//     const novoCPF = cpfParcial + digito1 + digito2

//     return novoCPF === this.cpfLimpo

// }

// ValidaCPF.prototype.criaDigito = function(cpfParcial) {
//     const cpfArray = Array.from(cpfParcial)
//     let regressivo = cpfArray.length + 1

//     const total = cpfArray.reduce((acumulador, valor) => {
//         acumulador += (regressivo-- * Number(valor))
//         return acumulador
//     }, 0)

//     const digito = 11 - (total % 11)

//     return digito > 9 ? "0" : String(digito)
// }

// ValidaCPF.prototype.isSequencia = function() {
//     let sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
//     return sequencia === this.cpfLimpo
// }

// const cpf = new ValidaCPF("CPF PARA VERIFICACAO")

// if (cpf.valida()) {
//     console.log(`CPF válido`)
// } else {
//     console.log(`CPF inválido`)
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Polimorfismo

// superclass
// function Conta(agencia, conta, saldo) {

//     this.agencia = agencia
//     this.conta = conta
//     this.saldo = saldo

// }

// Conta.prototype.sacar = function (valor) {

//     if (valor <= 0) {
//         return `Saque é disponivel a partir de 1 Real`
//     } else if (this.saldo >= valor) {
//         return `R$ -${valor} foi sacado de sua conta, saldo disponivel: R$ ${this.saldo -= valor}`
//     } else {
//         return `Você não possuí: ${valor} na sua conta`
//     }

// }

// Conta.prototype.depositar = function (valor) {
//     return this.saldo += valor
// }

// Conta.prototype.verSaldo = function () {
//     return `Agencia: ${this.agencia}, Conta: ${this.conta} | Seu saldo: R$ ${this.saldo.toFixed(2)}`
// }

// const conta = new Conta("5578-1", "545556784", 577.005)

// function ContaCorrente(agencia, conta, saldo, limite) {
//     Conta.call(this, agencia, conta, saldo)
//     this.limite = limite
// }

// linkando os prototypes

// ContaCorrente.prototype = Object.create(Conta.prototype)
// ContaCorrente.prototype.constructor = ContaCorrente

// ContaCorrente.prototype.sacar = function (valor) {

//     if (valor > (this.saldo + this.limite)) {
//         console.log(`Saldo insuficiente ${this.saldo}`)
//         return
//     } else {

//     }

//     this.saldo -= valor
//     return `Agencia: ${this.agencia}, Conta: ${this.conta} | Seu saldo: R$ ${this.saldo.toFixed(2)}`

// }

// function ContaPoupanca(agencia, conta, saldo) {
//     Conta.call(this, agencia, conta, saldo)
// }

// linkando os prototypes

// ContaPoupanca.prototype = Object.create(Conta.prototype)
// ContaPoupanca.prototype.constructor = ContaPoupanca

// const contapoupanca = new ContaPoupanca("54578-1", "54575784", 0)

// console.log(contapoupanca.sacar(17))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Factory functions + Prototypes


// function criaPessoa(nome, sobrenome) {

    // mesma coisa
    // composição, ou mixin

//     const falar = {
//         falar() { 
//             return `${this.nome} está falando`
//         },
//     }
//     const comer = {
//         comer() {
//             return `${this.nome} está comendo`
//         },
//     }
//     const beber = {
//         beber() {
//             return `${this.nome} está bebendo`
//         },
//     }

//     const pessoaPrototype = Object.assign({}, falar, comer, beber)

    // mesma coisa

    // const pessoaPrototype = {...falar, ...comer, ...beber}

    // mesma coisa

    // const pessoaPrototype = {
    //     falar() {
    //         return `${this.nome} está falando`
    //     },
    //     comer() {
    //         return `${this.nome} está comendo`
    //     },
    //     beber() {
    //         return `${this.nome} está bebendo`
    //     },
    // }

//     return Object.create(pessoaPrototype, {
//         nome: {value: nome},
//         sobrenome: {value: sobrenome}
//     })

// }

// const p1 = new criaPessoa("Kleber", "de Matos Caceres")
// const p2 = new criaPessoa("Maria", "de Sá")

// console.log(p2)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Map

// const pessoas = [
//     {id: 3, nome: "Kleber"},
//     {id: 2, nome: "Marina"},
//     {id: 1, nome: "Pericles"},
// ]

// Assim:
// const novasPessoas = {}

// for(const {id, nome} of pessoas) {
//     novasPessoas[id] = {id, nome}
// }
// console.log(novasPessoas)

// ou assim:
// const novasPessoas = {}

// for(const pessoa of pessoas) {
//     const { id } = pessoa
//     novasPessoas[id] = { ...pessoa }
// }
// console.log(novasPessoas)

// esse é bom para manter a ordem -> 

// const novasPessoas = new Map()

// for(const pessoa of pessoas) {
    // const { id } = pessoa
// setar valores no map é .set   // chave que eu quero // valor que quer colocar no map
    // novasPessoas.set(id, { ...pessoa })
// }
// console.log(novasPessoas.get(2)) para pegar tal valor

// Melhor fazer com o objeto mesmo pois fica mais facil de fazer oque quiser dentro do for
// iterar, aqui da para pode ser feito o destructoring 

// for(const [identifier, { id, nome}] of novasPessoas) {
//     console.log(identifier , id , nome)
// }

// esse pega as a quantidade de chaves dentro do array, como são 3 objetos, temos 3 chaves
// for(const pessoas of novasPessoas.keys()) {
//     console.log(pessoas)
// }

// esse pega os objetos 
// for(const pessoas of novasPessoas.values()) {
//     console.log(pessoas)
// }

// esse deleta a chave {a chave selecionada}
// novasPessoas.delete(2)
// console.log(novasPessoas)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Classes, são melhores pois os metodos são postos automaticamento direto no prototype

// class Pessoa{

//     constructor(nome, sobrenome) {
//         this.nome = nome
//         this.sobrenome = sobrenome
//     }

//     falar() {
//         return `${this.nome} está falando`
//     }

// }

// const p1 = new Pessoa("Kleber", "de Matos Caceres")
// const p2 = new Pessoa("Maria", "Miranda Silva")
// const p3 = new Pessoa("Luiz", "Morais neto")
// const p4 = new Pessoa("Ana", "da Silva")

// console.log(p1)

// ficaria assim se não usasse class

// function Pessoa2(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome
// }

// Pessoa2.prototype.falar = function() {
//     return `${this.nome} está falando`
// }

// const p21 = new Pessoa2("Kleber", "de Matos Caceres") 

// console.log(p21)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Getters e Setters em classes

// const _velocidade = Symbol("velocidade") // serve para criar uma chave privada

// class Carro {

//     constructor(nome) {
//         this.nome = nome
//         this[_velocidade] = 0
//     }

    // getter - é quando acesso a velocidade, c.velocidade
    // get velocidade () {
    //     console.log("GETTER")
    //     return this[_velocidade]
    // }

    // setter
//     set velocidade (valor) {
//         console.log("SETTER")
//         if (typeof valor !== "number") return
//         if (valor >= 200 || valor <= 0) return
//         this[_velocidade] = valor
//     }

//     acelerar() {

//         if(this[_velocidade] >= 200) return

//        return this[_velocidade]++
//     }

//     freiar() {

//         if(this[_velocidade] <= 0) return
//         return this[_velocidade]--

//     }

// }

// const c = new Carro("Ferrari")

// for(let i = 0; i <= 200; i++) {
//     c.acelerar()
// }

// c.velocidade = 88 // setter

// console.log(c.velocidade) // getter


// + ex de getter e setter

// class Pessoa {

//     constructor(nome, sobrenome) {
//         this.nome = nome
//         this.sobrenome = sobrenome
//     }

//     get nomeCompleto () {

//         return `${this.nome} ${this.sobrenome}` 

//     }

//     set nomeCompleto (valor) {

//         valor = valor.split(" ")
//         this.nome = valor.shift()
//         this.sobrenome = valor.join("")

//     }

// }

// const p = new Pessoa("Marina", "Silva")

// p.nomeCompleto = "Jadson Silva"
// console.log(p.nome)
// console.log(p.sobrenome)

// console.log(p.nomeCompleto)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Herança com Classes

// faça no maximo 2 ou 3 hierarquias, pois o codigo vira uma teia de aranha.
// herança: tudo que a classe pai tem todas as classes filhas irão ter acesso, porém classes pais não herdam de classes filhas.

// class DispositivoEletronico {

//     constructor(nome) {

//         this.nome = nome
//         this.ligado = false

//     }

//     ligar() {

//         if (this.ligado) {
//             console.log(`${this.nome} já está ligado`)
//         }

//         this.ligado = true

//     }

//     desligar () {

//         if (!this.ligado) {
//             console.log(`${this.nome} Já está desligado`)
//         }

//         this.ligado = false

//     }

// }

// class FoneDeOuvido extends DispositivoEletronico {

//     constructor(nome, cor, modelo, fabricante) {

//         super(nome)  // esse aqui chama os parametros da classe pai, como o nome é parametro na classe dispositivo vai estar aqui

//         this.cor = cor
//         this.modelo = modelo
//         this.fabricante = fabricante

//     }

// }

// const f = new FoneDeOuvido("Philco Air Beats", "Azul Escuro", "PF196ESA", "Philco")

// f.ligar()
// console.log(f )

// class Tablet extends DispositivoEletronico {

//     constructor(nome, temWifi) {

//         super(nome)

//         this.temWifi = temWifi

//     }

    // caso esse metodo esteja comentado ou não existir o JS vai buscar o mesmo metodo em outra classasse
    // ligar () {
    //     console.log("Você alterou o metodo ligar")
    // }

    // esse metodo apenas existe na classe tablet, caso chame com outra classe ele ira dar TypeError: f.falaOi is not a function
//     falaOi () {
//         console.log("Oi")
//     }

// }

// const t = new Tablet("iPad", true)

// t.ligar()
// t.falaOi()

// console.log()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Métodos de instância e estáticos 

// function teste() {
//     console.log("Este é meu teste")
// }


// class ControleRemoto {

    // constructor(tv) {
    //     this.tv = tv
    //     this.volume = 0
    //     teste()
    // }

    // aumentarVolume () {
    //     this.volume += 2    
    // }

    // e qualquer método pode receber um valor adicional no funcao (<valor>)
    // diminuirVolume () {
    //     this.volume -= 2
    // }

    // Método de instância , ex , c.aumentarVolume()
    // trocaPilha () {

    // }

    // Método estático -> apenas a classe pode chamar e não precisa instanciar
    // static trocaPilha () {
    //     console.log(this.volume) // não pode usar o this nesse caso pois a classe não foi instanciada
    //     console.log("Ok, vou trocar.")
    // }

    // static soma(x, y) { // função referente a classe em si
    //     console.log(this) // esse this refere-se a classe em si, não ao objeto global da instancia
    // }

// }

// const c = new ControleRemoto("Samsung")

// ControleRemoto.soma()

// c.aumentarVolume()
// c.diminuirVolume()

// console.log(c)
// ControleRemoto.soma()
// ControleRemoto.trocaPilha()

// nesse caso está a "classe" Math está chamando o método statico random, isso acontece, pois não tem new e nem dados de instancia
// console.log(Math.random())

// console.log(ControleRemoto.soma(5, 5))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Validando CPF com Class

// 705.484.450-52 e 070.987.720-03

// class ValidaCPF {

//     constructor(cpfEnviado) {

//         Object.defineProperty(this, "cpfLimpo", {

//             writable: false,
//             enumerable: false,
//             configurable: false,
//             value: cpfEnviado.replace(/\D+/g, "")

//         })

//     }

//     éSequência () { // e pode usar acentos em caso de class

//         return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo

//     }

//     geraNovoCPF() {

//         const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
//         const digito1 = this.geraDigito(cpfSemDigitos)
//         const digito2 = this.geraDigito(cpfSemDigitos + digito1)

//         this.novoCPF = cpfSemDigitos + digito1 + digito2

//     }

    // geraDigito(cpfSemDigitos) { // esse método poderia ser statico pois não utiliza this, porém nesse caso aqui como tem this em outros metodos teriamos que resolver
        // usando o nome da classe ValidaCPF.geraDigito() assim resolveria os erros

//         let total = 0
//         let regressivo = cpfSemDigitos.length + 1

//         for(let stringNumerica of cpfSemDigitos) {
//             total += regressivo * Number(stringNumerica)
//             regressivo--
//         }

//         const digito = 11 - (total % 11)
//         return digito <= 9 ? String(digito) : "0"

//     }

//     valida() {

//         if (!this.cpfLimpo) return false
//         if (typeof this.cpfLimpo !== "string") return false
//         if (this.cpfLimpo.length !== 11) return false
//         if (this.éSequência()) return false
//         this.geraNovoCPF()

//         return this.novoCPF === this.cpfLimpo
        
//     }

// }

// let cpf = new ValidaCPF("CPF AQUI")
// cpf = new ValidaCPF("111.111.111-11")

// if (cpf.valida()) {
//     console.log(`CPF VÁLIDO`)
// } else {
//     console.log(`CPF INVÁLIDO`)
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Validando um formulario (usando classe)


// HTML

// <h1>Formulário de Cadastro</h1>

// <ul>
//     <li>Nenhum campo pode estar vazio</li>
//     <li>Usuário só poderá conter letras e/ou números</li>
//     <li>Usuário deverá ter entre 3 e 12 caracteres</li>
//     <li>Senha precisa ter entre 6 e 12 caracteres</li>
// </ul>

// <form class="form" method="post" action="/">

//     <label for="nome" class="nomel">Nome </label>
//     <input type="text" name="nome" id="nome" class="nome validar">

//     <label for="nome">Sobrenome </label>
//     <input type="text" name="sobrenome" id="sobrenome" class="sobrenome validar">

//     <label for="nome">CPF </label>
//     <input type="text" name="cpf" id="cpf" class="cpf validar">

//     <label for="nome">Usúario </label>
//     <input type="text" name="usuario" id="usuario" class="usuario validar">

//     <label for="nome">Senha </label>
//     <input type="password" name="senha" id="senha" class="senha validar">

//     <label for="nome">Repitir Senha </label>
//     <input type="password" name="rsenha" id="rsenha" class="rsenha validar">

//     <button type="submit">Enviar</button>

// </form>


// JS - VALIDA FORMULARIO

// class ValidaFormulario {

//     constructor() {

//         this.formulario = document.querySelector(".form")
//         this.eventos()

//     }

//     eventos() {
//         this.formulario.addEventListener("submit", e => {
//             this.handleSubmit(e)
//         })
//     }

//     handleSubmit(e) {
//         e.preventDefault()
//         const camposValidos = this.camposSaoValidos()
//         const senhasValidos = this.senhasSaoValidos()

//         if (camposValidos && senhasValidos) {
//             alert("Formulario enviado")
//             this.formulario.submit()
//         }

//     }

//     senhasSaoValidos() {
//         let valid = true

//         const senha = document.querySelector(".senha")
//         const repetirSenha = document.querySelector(".rsenha")

//         if (senha.value !== repetirSenha.value) {
//             valid = false
//             this.criaErro(senha, "Campos senha e repetir senha precisam ser iguais")
//             this.criaErro(repetirSenha, "Campos senha e repetir senha precisam ser iguais")
//         }

//         if (senha.value.length < 6 || senha.value.length > 16) {
//             valid = false
//             this.criaErro(senha, "Senha precisa estar entre 6 a 16 caracteres")
//         }

//         return valid
//     }

//     camposSaoValidos() {

//         let valid = true

//         for(let errorText of this.formulario.querySelectorAll(".error-text")) {
//             errorText.remove()
//         }

//         for(let campo of this.formulario.querySelectorAll(".validar")) {

//             let label = campo.previousElementSibling.innerText

//             if (!campo.value) {
//                 this.criaErro(campo, `Campo "${label}"  não pode estar em branco`)
//                 valid = false
//             }

//             if (campo.classList.contains("cpf")) {
//                 if (!this.validaCPF(campo)) valid = false
//             }

//             if (campo.classList.contains("usuario")) {
//                 if (!this.validaUsuario(campo)) valid = false
//             }

//         }

//         return valid // valid é a flag, caso tiver em false é false flag

//     }

//     validaUsuario(campo) {

//         const usuario = campo.value
//         let valid = true

//         if (usuario.length < 3 || usuario.length > 12) {
//             this.criaErro(campo, "Usuário precisa ter entre 3 e 12 caracteres.")
//             valid = false
//         }

//         if (!usuario.match(/^[a-zA-Z0-9]+$/g)) { // expressoes regulares
//             this.criaErro(campo, "Nome de usúario precisa conter apenas letras e/ou números.")
//             valid = false
//         }

//         return valid
//     }

//     validaCPF(campo) {
//         const cpf = new ValidaCPF(campo.value)
//         if (!cpf.valida()) {
//             this.criaErro(campo, "CPF Inválido.")
//             return false
//         }
//         return true
//     }

//     criaErro(campo, msg) {
//         const div = document.createElement("div")
//         div.innerHTML = msg
//         div.classList.add("error-text")
//         campo.insertAdjacentElement("afterend", div)
//     }

// }

// const v = new ValidaFormulario()


// VALIDA CPF NO FORMULARIO


// class ValidaCPF {

//     constructor(cpfEnviado) {

//         Object.defineProperty(this, "cpfLimpo", {

//             writable: false,
//             enumerable: false,
//             configurable: false,
//             value: cpfEnviado.replace(/\D+/g, "")

//         })

//     }

//     éSequência () { // e pode usar acentos em caso de class

//         return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo

//     }

//     geraNovoCPF() {

//         const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
//         const digito1 = this.geraDigito(cpfSemDigitos)
//         const digito2 = this.geraDigito(cpfSemDigitos + digito1)

//         this.novoCPF = cpfSemDigitos + digito1 + digito2

//     }

//     geraDigito(cpfSemDigitos) { // esse método poderia ser statico pois não utiliza this, porém nesse caso aqui como tem this em outros metodos teriamos que resolver
//         //usando o nome da classe ValidaCPF.geraDigito() assim resolveria os erros

//         let total = 0
//         let regressivo = cpfSemDigitos.length + 1

//         for(let stringNumerica of cpfSemDigitos) {
//             total += regressivo * Number(stringNumerica)
//             regressivo--
//         }

//         const digito = 11 - (total % 11)
//         return digito <= 9 ? String(digito) : "0"

//     }

//     valida() {

//         if (!this.cpfLimpo) return false
//         if (typeof this.cpfLimpo !== "string") return false
//         if (this.cpfLimpo.length !== 11) return false
//         if (this.éSequência()) return false
//         this.geraNovoCPF()

//         return this.novoCPF === this.cpfLimpo
        
//     }

// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Promises

// antes era assim: 
// function aleatorio(min, max) {
//     max *= 1000
//     min *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo, callBack) {

//     setTimeout(() => {
//         console.log(msg)
//         if (callBack) callBack()
//     }, tempo);

// }

// esperaAi("Frase 1", aleatorio(1, 3), function() {
//     esperaAi("Frase 2", aleatorio(1, 3), function() {
//         esperaAi("Frase 3", aleatorio(1, 3))
//     })
// })

// agora com Promises

// function aleatorio(min, max) {
//     max *= 1000
//     min *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {

//     return new Promise((resolve, reject) => { // aqui os parametros não precisam ter esse nome, porém é uma convenção, e custumam usar arrowfunction
        
//         setTimeout(() => { // aq vai esperar para executar o resolve, assim que chegar no resolve vai direto para o then
//             if (typeof msg !== "string") reject("BAD VALUE") // aqui caso esteja algo errado ele pula lá pro catch
//             resolve(msg) // aqui pode mandar um parametro, apenas 1 parametro
//         }, tempo); // a promise vai ser resolvida apos esse timeout for executado

//     })

    

// }

// esperaAi("Conexão com a base de dados", aleatorio(1, 3))
// .then(resposta => { // o then será executado quando a gente resolver a nossa promise, mandando um dado no resolve() ele vai vir no then tbm
//     console.log(resposta)
//     return  esperaAi("Buscando dados da base", aleatorio(1, 3)) // e pode retornar mais uma promise de dentro desse then
// }).then(resposta => {
//     console.log(resposta)
//     return esperaAi(22222/*"Tratando os dados da base"*/, aleatorio(1, 3))
// }).then(resposta => {
//     console.log(resposta)
// }).then(() => {
//     console.log("Exibe os dados na tela")
// })
// .catch((e) => { // aqui é a resposta do reject, tratar o erro aqui, quando chamar o reject  
//     console.log("Erro:", e)
// })


// console.log("Isso aqui será exibido antes de qualquer promisse")


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Métodos úteis para Promises


// function aleatorio(min, max) {

//     max *= 1000
//     min *= 1000
//     return Math.floor(Math.random() * (max - min) + min)

// }

// function esperaAi(msg, tempo) {

//     return new Promise((resolve, reject) => { // aqui os parametros não precisam ter esse nome, porém é uma convenção, e custumam usar arrowfunction
        
//         setTimeout(() => { // aq vai esperar para executar o resolve, assim que chegar no resolve vai direto para o then

//             if (typeof msg !== "string") {
//                 reject("CAI NO ERRO") // aqui caso esteja algo errado ele pula lá pro catch
//                 return // esse aqui faz com que caso seja um numero ele vai falar BAD VALUE e vai parar sem continuar o codigo de baixo
//             }

//             resolve(msg.toUpperCase() + " Passei na promise") // aqui pode mandar um parametro, apenas 1 parametro
//             return

//         }, tempo); // a promise vai ser resolvida apos esse timeout for executado

//     })

    

// }

// Promise.all , Promise.race , Promise.resolve e Promise.reject

// const promises = [
    // "Primeiro valor", // isso não é uma promessa, então com o race vai retornar sempre esse primeiro
    // esperaAi("Primeira Promise", aleatorio(1, 3)),
    // esperaAi("Segunda Promise", aleatorio(1, 3)), // 500), // no race essa vai ser a primeira a ser resolvida, pois o tempo dela é a menor
    // esperaAi("Terceira Promise", aleatorio(1, 3)),
    // esperaAi(1000, aleatorio(1, 3)), // esse também é o primeiro a ser executado no race e cai no erro
    // esperaAi(1000, 1000),
    // "Outro valor" // isso não é uma promessa, então com o race vai retornar sempre esse primeiro
// ]

// Promise.all

// resolva todas essas promises e me retorna 1 then com todos esses valores // esse vai te entregar uma promessa só com os valores dentro de um array
// Promise.all(promises).then(valor => {
//     console.log(valor)
// }).catch(e => {
//     console.log(e)
// }) 


// Promise.race

// essa vai tem todas essas promessas a primeira que resolver você me entrega o valor
// Promise.race(promises).then(valor => {

//     console.log(valor)

// }).catch(e => {

//     console.log(e)

// }) 

// Promise.resolve

// function baixaPagina () {

    // simulando
    // const emCache = true

    // if (emCache) {
        // return Promise.resolve("Pagina em cache ")
        // retorna uma promessa logo de cara 
    //     return Promise.reject("Pagina em cache ") // se tiver em reject ele vai para o catch se tiver em resolve ele vai para o then
    // } else {
    //     return esperaAi("Baixei a pagina", 3000)
    // }

// }

// baixaPagina()
// .then(dadosPagina => {
//     console.log(dadosPagina)
// })
// .catch(e => console.log("Erro:", e))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Async / Await


// function aleatorio(min, max) {

//     max *= 1000
//     min *= 1000
//     return Math.floor(Math.random() * (max - min) + min)

// }

// function esperaAi(msg, tempo) {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
            
//             if (typeof msg !== "string") {
//                 reject("CAI NO ERRO")
//                 return
//             }

//             resolve(msg.toUpperCase() + " - Passei na promise")
//             return

//         }, tempo);

//     })

// }

// ANTES - SEM ASYNC E SEM AWAIT
// De forma Sincrona , porém ainda não é Async e nem Await
// esperaAi("Fase 1", aleatorio())
// .then(valor => {
//     console.log(valor)
//     return esperaAi("Fase 2", aleatorio())
// })
// .then(fase => {
//     console.log(fase)
//     return esperaAi("Fase 3", aleatorio())
// })
// .then(fase => {
//     console.log(fase)
//     return fase
// })
// .then(fase => {
//     console.log("Terminamos na fase", fase)
// })
// .catch(e => {
//     console.log("Erro:", e)
// }) 

// AGORA COM ASYNC e com AWAIT
// se não tiver async o await dentro dessa função não poderá ser colocado
// o ASYNC e com AWAIT vai até o erro caso seja no meio vai ficar executando os validos e quando pega no erro ele descarta as outras promessas

// async function executa() {

    // try {

        // AQUI PRECISA DE TRY CACTH OU COLOCAR CATCH EM TODOS AWAIT
        // const f1 = esperaAi("Fase 1", 1000) // caso não tenha o await ela estára pendente 
        // console.log(f1)

        // faça isso caso alguma promise esteja pendente, só que não vira na ordem
//         setTimeout(() => {
//             console.log("Essa Promise estava pendente", f1 )
//         }, 1100);

//         const f2 = await esperaAi("Fase 2", aleatorio())
//         console.log(f2)

//         const f3 = await esperaAi(3, aleatorio()) // caso o erro seja aqui ele descarta essa promessa e descarta o console.log() no final 
//         console.log(f3)

//         console.log("Terminamos na fase", f3)

//     } catch (e){ // o reject vem para cá
//         console.log("ERRO:", e)
//     }


// }

// exec uta()

/*

As promisses tem tres estados: 
Pendente <pending> -> quando você manda executar ela está pendente
fullfilled -> resolvida
rejected -> rejeitada 

*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// XMLHttpRequest (GET) + Promises

// AJAX


// Esse é sem Promise

// const ajax = obj => {
//     const xhr = new XMLHttpRequest() // esse aqui está instanciando o AJAX
//     xhr.open(obj.method, obj.url, true) // aqui é um metodo GET
//     xhr.send() // caso fosse o metodo POST

//     xhr.addEventListener("load", (e) => {

//         // // CallBack
//         if (xhr.status >= 200 && xhr.status < 300) {
//             obj.success(xhr.responseText)
//         } else {
//             obj.error({
//                 code: xhr.status,
//                 msg: xhr.statusText
//             })
//         }

//     })

// }

// document.addEventListener("click", (e) => {

//     // // esse pega elemento que esta sendo clicado
//     const el = e.target
//     // // e esse pega a tag do elemento que foi clicado e converte a tag para minuscula
//     const tag = el.tagName.toLowerCase()

//     // // esse aqui faz a verificacão se a tag é identica a "a"
//     if (tag === "a") {
//         // // esse previne um evento de acontecer
//         e.preventDefault()
//         // // esse aqui pega o elemento clicado e joga ele como parametro da função que pegará o atributo da tag "a"
//         carregaPagina(el)
//     }

// })

// function carregaPagina(el) {

//     // // esse aqui pega o conteudo do atributo href do html
//     const href = el.getAttribute("href")
    
//     // // esse aqui é a função ajax e o parametro dela é um objeto que é este, com os parametros do xhr.open()
//     ajax({
//         method: "GET", // esse é o metodo GET ou POST
//         url: href, // a chave url pega o valor de dentro do atributo href
//         success(response) {
//             // // esse chama a função carregaResultado com o parametro da função success
//             carregaResultado(response) 
//         },

//         // // caso houver um erro será exibido a msg erro
//         error(errorText) {
//             console.log(errorText)
//         }
//     })

// }

// function carregaResultado(response) {
    // // esse seleciona o elemento div com a classe resultado
    // const resultado = document.querySelector(".resultado")
    // // esse joga o dado do parametro da função carregaResultado dentro dessa div resultado
    // resultado.innerHTML = response
// }


// Com Promise

// const ajax = obj => {

    //     return new Promise((resolve, reject) => {
    
    //         const xhr = new XMLHttpRequest() // esse aqui está instanciando o AJAX
    //         xhr.open(obj.method, obj.url, true) // aqui é um metodo GET
    //         xhr.send() // caso fosse o metodo POST
        
    //         xhr.addEventListener("load", (e) => {
        
    //             // CallBack
    //             if (xhr.status >= 200 && xhr.status < 300) {
    //                 resolve(xhr.responseText)
    //             } else {
    //                 reject({
    //                     code: xhr.status,
    //                     msg: xhr.statusText
    //                 })
    //             }
        
    //         })
    
    //     })
    
    // }
    
    // document.addEventListener("click", (e) => {
    
    //     // esse pega elemento que esta sendo clicado
    //     const el = e.target
    //     // e esse pega a tag do elemento que foi clicado e converte a tag para minuscula
    //     const tag = el.tagName.toLowerCase()
    
    //     // esse aqui faz a verificacão se a tag é identica a "a"
    //     if (tag === "a") {
    //         // esse previne um evento de acontecer
    //         e.preventDefault()
    //         // esse aqui pega o elemento clicado e joga ele como parametro da função que pegará o atributo da tag "a"
    //         carregaPagina(el)
    //     }
    
    // })
    
    // function carregaPagina(el) {
    
    //     // esse aqui pega o conteudo do atributo href do html
    //     const href = el.getAttribute("href")
        
    //     // esse aqui é a função ajax e o parametro dela é um objeto que é este, com os parametros do xhr.open()
    
    //     const objConfig = {
    //         method: "GET", // esse é o metodo GET ou POST
    //         url: href, // a chave url pega o valor de dentro do atributo href
    //     }
    
    //     ajax(objConfig).then(response => {
    //         carregaResultado(response)
    //     }).catch(e => {
    //         console.log(e)
    //     })
    
    // }
    
    // function carregaResultado(response) {
    //     // esse seleciona o elemento div com a classe resultado
    //     const resultado = document.querySelector(".resultado")
    //     // esse joga o dado do parametro da função carregaResultado dentro dessa div resultado
    //     resultado.innerHTML = response
    // }


// Com ASYNC e AWAIT


// const ajax = obj => {

//     return new Promise((resolve, reject) => {

//         const xhr = new XMLHttpRequest() // esse aqui está instanciando o AJAX
//         xhr.open(obj.method, obj.url, true) // aqui é um metodo GET
//         xhr.send() // caso fosse o metodo POST
    
//         xhr.addEventListener("load", (e) => {
    
//             // CallBack
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText)
//             } else {
//                 reject({
//                     code: xhr.status,
//                     msg: xhr.statusText
//                 })
//             }
    
//         })

//     })

// }

// document.addEventListener("click", (e) => {

//     // esse pega elemento que esta sendo clicado
//     const el = e.target
//     // e esse pega a tag do elemento que foi clicado e converte a tag para minuscula
//     const tag = el.tagName.toLowerCase()

//     // esse aqui faz a verificacão se a tag é identica a "a"
//     if (tag === "a") {
//         // esse previne um evento de acontecer
//         e.preventDefault()
//         // esse aqui pega o elemento clicado e joga ele como parametro da função que pegará o atributo da tag "a"
//         carregaPagina(el)
//     }

// })

// async function carregaPagina(el) {

//     // esse aqui pega o conteudo do atributo href do html
//     const href = el.getAttribute("href")
    
//     // esse aqui é a função ajax e o parametro dela é um objeto que é este, com os parametros do xhr.open()

//     const objConfig = {
//         method: "GET", // esse é o metodo GET ou POST
//         url: href, // a chave url pega o valor de dentro do atributo href
//     }

//     try {
//         const response = await ajax(objConfig)
//         carregaResultado(response)  
//     } catch (e) {
//         console.log("Erro:", e)
//     }

// }

// function carregaResultado(response) {
//     // esse seleciona o elemento div com a classe resultado
//     const resultado = document.querySelector(".resultado")
//     // esse joga o dado do parametro da função carregaResultado dentro dessa div resultado
//     resultado.innerHTML = response
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Fetch API ( GET )


// Maneira mais simples e ele gera o codigo do html
// fetch("pagina4.html").then(resposta => {
//     if (resposta.status !== 200) throw new Error("ERRO 404 NOSSO")
//     return resposta.text()
// }).then(html => {
//     console.log(html)
// }).catch(e => {
//     console.error(e)
// })


// const ajax = obj => {

//     return new Promise((resolve, reject) => {

//         const xhr = new XMLHttpRequest() // esse aqui está instanciando o AJAX
//         xhr.open(obj.method, obj.url, true) // aqui é um metodo GET
//         xhr.send() // caso fosse o metodo POST
    
//         xhr.addEventListener("load", (e) => {
    
//             // CallBack
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText)
//             } else {
//                 reject({
//                     code: xhr.status,
//                     msg: xhr.statusText
//                 })
//             }
    
//         })

//     })

// }

// document.addEventListener("click", (e) => {

    // // esse pega elemento que esta sendo clicado
    // const el = e.target
    // // e esse pega a tag do elemento que foi clicado e converte a tag para minuscula
    // const tag = el.tagName.toLowerCase()

    // // esse aqui faz a verificacão se a tag é identica a "a"
    // if (tag === "a") {
        // esse previne um evento de acontecer
        // e.preventDefault()
        // // esse aqui pega o elemento clicado e joga ele como parametro da função que pegará o atributo da tag "a"
//         carregaPagina(el)
//     }

// })

// async function carregaPagina(el) {

    // esse aqui pega o conteudo do atributo href do html
    // try {
    //     const href = el.getAttribute("href")

    //     const response = await fetch(href)

    //     if (response.status !== 200) throw new Error("ERRO: <Aqui pode ser qualquer erro do 100 até 500>!")

    //     const html = await response.text()
    //     carregaResultado(html)
    // } catch (e) {
    //     console.error(e)
    // }

    // esse aqui vai retornar um texto html por isso o then tem html como parametro

    

// }

// function carregaResultado(response) {
//     // esse seleciona o elemento div com a classe resultado
//     const resultado = document.querySelector(".resultado")
//     // esse joga o dado do parametro da função carregaResultado dentro dessa div resultado
//     resultado.innerHTML = response
// }


// Uncaught  é um erro que não está tratado


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Fetch API ( GET )


// fetch

// fetch("./assets/JSON/pessoas.json")
//     .then(resposta => resposta.json()) // esse converte a resposta que é o array para JSON e retorna uma nova promise
//     .then(json => carregaElementosNaPagina(json)) // esse recebeu o json e criou a tabela e tals
//     .catch(e => {console.log(e)})

// function carregaElementosNaPagina (json) {

//     const resultado = document.querySelector(".resultado")
//     const tabela = document.createElement("table")

//     for(let pessoa of json) {
//         const tr = document.createElement("tr")

//         let td = document.createElement("td")
//         td.innerHTML = `${pessoa.nome}`
//         tr.appendChild(td)

//         td = document.createElement("td")
//         td.innerHTML = `${pessoa.idade}`
//         tr.appendChild(td)

//         td = document.createElement("td")
//         td.innerHTML = `${pessoa.salario}`
//         tr.appendChild(td)

//         resultado.appendChild(tabela)
//         tabela.appendChild(tr)

//     }

// }


// API PARA PEGAR A TEMPERATURA DA CIDADE DE GUARULHOS

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '53f57cead8msh5380d79873ea589p1ecaaajsn0d059024b7ff',
// 		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
// 	}
// };

// fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=-23.427016303676794&lon=-46.534550113888955&units=metric&lang=pt', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// function carregaElementosNaPagina (json) {

//     const resultado = document.querySelector(".resultado")
//     const tabela = document.createElement("table")

//     json.forEach(element => {

//     const tr = document.createElement("tr")

//     let td = document.createElement("td")

//     td = document.createElement("td")
//     td.innerHTML = `${element.name}`
//     tr.appendChild(td)

//     td = document.createElement("td")
//     td.innerHTML = `<p style="color: ${element.color}">${element.name}<p>`
//     tr.appendChild(td)

//     td = document.createElement("td")
//     td.innerHTML = `${(element.price)}`
//     tr.appendChild(td)

//     td = document.createElement("td")
//     td.innerHTML = `${element.salario}`
//     tr.appendChild(td)

//     resultado.appendChild(tabela)
//     tabela.appendChild(tr)
//     })

// }

// SITE DA API https://docs.awesomeapi.com.br/
// API PARA PEGAR O ENDEREÇO 

// fetch('https://cep.awesomeapi.com.br/json/07124540')
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));


// API PARA GERAR USUARIOS ALEATORIOS
// fetch(`https://randomuser.me/api/`)
// .then(response => response.json())
// .then(response => {
//     console.log(response) 
//     response.results.forEach(element => {
//         console.log(element.name.first, element.name.last)   
//     });
// })
// .catch(err => console.error(err));


// SITE DA API https://docs.awesomeapi.com.br/
// API PARA PEGAR O PREÇO DAS MOEDAS DOS PAISES SITE PARA AS MOEDAS https://economia.awesomeapi.com.br/xml/available/uniq

// fetch('https://economia.awesomeapi.com.br/json/last/EUR-BRL')
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '53f57cead8msh5380d79873ea589p1ecaaajsn0d059024b7ff',
// 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// 	}
// };

// fetch('https://open-weather13.p.rapidapi.com/city/Guarulhos', options)
// 	.then(response => response.json())
// 	.then(json => console.log(json))
// 	.catch(err => console.error(err));


// API PARA PEGAR O PREÇO DAS CRIPTO MOEDAS (PREÇO EM DOLAR)

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '53f57cead8msh5380d79873ea589p1ecaaajsn0d059024b7ff',
// 		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// 	}
// };

// fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
// 	.then(resposta => resposta.json())
// 	.then(json => {
//         carregaElementosNaPagina(json) 
//         console.log(json)
//     })
// 	.catch(err => console.error(err));

// function carregaElementosNaPagina (json) {

//     const resultado = document.querySelector(".resultado")
//     const tabela = document.createElement("table")

//     json.data.coins.forEach(element => {

//     const tr = document.createElement("tr")

//     let td = document.createElement("td")

//     td = document.createElement("td")
//     td.innerHTML = `${element.symbol}`
//     tr.appendChild(td)

//     td = document.createElement("td")
//     td.innerHTML = `<p style="color: ${element.color}">${element.name}<p>`
//     tr.appendChild(td)

//     td = document.createElement("td")
//     td.innerHTML = `${(element.price)}`
//     tr.appendChild(td)

//     td = document.createElement("td")
//     td.innerHTML = `${element.salario}`
//     tr.appendChild(td)

//     resultado.appendChild(tabela)
//     tabela.appendChild(tr)
//     })

// }


// GITHUB DO AXIOS https://github.com/axios/axios, <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>

// AXIOS

// axios("./assets/JSON/pessoas.json").then(resposta => carregaElementosNaPagina(resposta.data))

// function carregaElementosNaPagina (json) {

//     const resultado = document.querySelector(".resultado")
//     const tabela = document.createElement("table")

//     for(let pessoa of json) {
//         const tr = document.createElement("tr")

//         let td = document.createElement("td")
//         td.innerHTML = `${pessoa.nome}`
//         tr.appendChild(td)

//         td = document.createElement("td")
//         td.innerHTML = `${pessoa.idade}`
//         tr.appendChild(td)

//         td = document.createElement("td")
//         td.innerHTML = `${pessoa.salario}`
//         tr.appendChild(td)

//         resultado.appendChild(tabela)
//         tabela.appendChild(tr)

//     }

// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Babel e Can I Use?


// o babel é um tradutor e compilador de codigo JS para codigos "velhos", para os sites antigos compreenderem o que está sendo pedido site https://babeljs.io/

// para selecionar a pasta: npm init -y

// para instalar o babel: npm install @babel/cli @babel/preset-env @babel/core

// Para instalar uma versão especifica: npm install --save-dev @babel/cli@<versão ex 7.6.3> @babel/preset-env@<versão> @babel/core@<versão>

// Caso não aparece devDependencies no package.json: npm install --save-dev @babel/cli @babel/preset-env @babel/core

// Caso use git é so criar um arquivo .gitignore e colocar o nome da pasta que dai esconde no git, ex node_modules

// Para converter o codigo, "<pode ser que ele peça o caminho>" é: npx babel <caminho><arquivo>.js -o bundle.js --presets=@babel/env
// EX: npx babel assets/JS/meusestudos.js -o <arquvi de saida, mais comum é bundle>.js --presets=@babel/env

// babel ./<caminho>/<arquivo>.js -o ./bundle.js --presets=@babel/env -w / faz com que sempre que salva o arquivo ele converte esse codigo para o bundle.js no packege

// Para executar esse atualiza-ou-converte: npm run <nome da chave no package.json>

// Para parar é: Ctrl + C

// Porém pode jogar o codigo feito no site do babel para fazer a conversão bem mais rapido ou use o WebPack


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


