var num = 50;
var espaco = " ";
const separador = " - ";
const quebralinha = "\n";

/*

    OPERADORES - NOME
    > - Maior
    < - Menor
    >= - Maior ou Igual
    <= - Menor ou Igual
    != - Diferente
    == - Igualdade

    VARIAVEIS
    var [nome] = ("String", ou Interio);

    CONSTANTES
    const [nome] = ("String", ou Interio);
    true e false = 1 e 0

    AND - && - E
    V e F  -> F
    F e V  -> F
    V e V  -> V (Só vai retornar verdadeiro quando todos forem V - VERDADEIRO, 9 V e 1 F vai dar falso, se os 10 forem V vai retornar V.)
    F e F  -> F

    OR - || - OU
    V e F  -> V
    F e V  -> V
    V e V  -> V
    F e F  -> F (Só vai retornar verdadeiro quando todos forem F - FALSO, 9 F e 1 V vai dar verdadeiro, se os 10 forem F vai retornar F.)


*/

/* METODOS DOCUMENT E WINDOW: ALERT, PROMPT E CONFIRM 

//para aparecer no documento coloque document.(comando) 

document.write("Meu estudo de JavaScript" + separador + "Testando comandos" + quebralinha);

//nesse caso não precisa colocar o window porque vai aparecer na janela 
// METODO WINDOW

window.alert("Foram encontrados 5 erros em seu codigo, atualize.");

// MANDAR CODIGOS PARA A PAGINA + VARIAVEL + ALERT
var nome = prompt("Digite um nome", "Seu nome aparecerá aqui!");

alert("Nome inserido:" + espaco + nome); 
document.write(nome);

// ALERTA DE CONFIRME 
var nome = prompt("Digite seu nome: ", "Insira seu nome aqui")
var resultado = confirm(nome + ", Deseja realmente confirmar?");
alert(resultado) 

*/

/* VERIFICAÇÂO COM OPERADORES

var num1, num2, txt1, txt2;

num1 = 10;
num2 = 10;

txt1 = "Esse valor tem igualdade ao outro 10";
txt2 = "Esse valor não é igual ao outro";

if(num1 == num2) {
    document.write(txt1);
    alert(txt1)
} else {
    document.write(txt2);
    alert(txt2)
}

*/

/* SISTEMA DE VERIFICAÇÂO DE VITORIA (INICIO)

// vitoria =>  ((>= 30) && (<= 40)) || ((>=70)) && ((<=80))
var pontos = 72;
var energia = 30;   

if(((pontos >= 30)&&(pontos <= 40)&&(energia >= 40))||((pontos >=70 )&&(pontos <= 80)&&(energia >= 40))){
    document.write("Ganhou");

} else {
    document.write("Perdeu");
}

*/

// Aprovado Direto >= 9
// Aprovado ->   >= 6
// Recuperação  ->   >=4 && < 6
// Reprovado ->  < 4
// Reprovado sem Duvidas -> >= 0

/* SISTEMA DE APROVAÇÂO E REPROVAÇÂO DE ALUNO (BASICO) - IF COM MULTIPLOS RETORNOS

var nota = 9;
var resposta;

if(nota >= 9) {
    resposta = ("Aluno(a) está Aprovado(a) sem Duvidas!");

} else if (nota >= 6) {
    resposta = ("Aluno(a) está Aprovado(a)!");

} else if((nota >= 4)&&(nota < 6)) {
    resposta = ("Aluno(a) está em Recuperação");

} else if (nota >= 2.5) {
    resposta = ("Aluno(a) está Reprovado(a)");

} else {
    resposta = ("Aluno(a) está Reprovado(a) sem Duvidas!");
}

document.write(resposta);

*/

/*

// IF ANINHADO variavel += ("warwar") pega uma parte de uma variavel e junta para formar um frase

var nota = 2;
var resposta;

if(nota >= 6) {
    resposta = ("Aluno está Aprovado");
    if(nota >= 8.5) {
        if (nota == 10) {
            resposta += (" com excelencia");
        } else {
            resposta += (" sem Duvidas!");
        }
    } else {
        resposta += (" com a nota na media");
    }
} else if(nota >= 4) {
    resposta = ("Aluno(a) está em Recuperação");
} else {
    if (nota >= 2.5) {
        resposta = ("Aluno(a) está Reprovado(a) por nota baixa");
    } else {
        resposta = ("Aluno(a) está Reprovado(a) sem Duvidas!");
    }
}

document.write(resposta);

*/


/*

// Bloco de Comandos {}, servem para delimitar o codigo

var num01 = 15;

if(num01 > 10) {
    res = ("Maior que 10");
    document.write(res);
    alert(res);
} 

else { // Nessa parte não precisa de chaves, ele executa do mesmo jeito, só que duplica a mensagem de cima, a partir de uma linha de instrução pode ser sem
    res = ("Menor que 10");
    document.write(res);
    alert(res);
}

/*

/* 
// Switch - Case

var pos, msg, pontos;

pontos = 400;
pos= 5;

if(pontos >= 1000) {
    pos = 1;
} else if (pontos >= 800) {
    pos = 2;
} else if (pontos >= 600) {
    pos =3;
} else {
    pos = 0;
}

switch(pos) {
    case 1:
        msg = "Primeiro Lugar, Medalha de Ouro";
        break
    case 2:
        msg = "Segundo Lugar, Medalha de Prata";
        break
    case 3:
        msg = "Terceiro Lugar, Medalha de Bronze";
        break
    default:
        msg = "Competidores com pontuação baixa";
}

switch(pos) {
    case 1:
    case 2:
    case 3:
        msg += ", Subiu ao podio";
        break
    default:
        msg += ", Competidores não foram ao podio";

}

document.write(msg)

*/

// array / vetor  var mochila = new Array()  ["Corda" = 0, "Faca" = 1, "arame" = 2, "lanterna" = 3, "pedra" = 4]

// metodo push, no adiciona no final do array

// var cor = new Array(); Assim ou 
// var cor = []; Assim


// var cor1, cor2, cor3, cor4; Antes

// cor1 = "Preto";
// cor2 = "Branco";
// cor3 = "Azul"

var cor = [];

// Forma Atual // String
cor.push("Preto"); // 0 cor[0]
cor.push("Branco"); // 1 cor[1]
cor.push("Vermelho"); // 2 cor[2]
cor.push("Verde"); // 3 cor[3]
cor.push("Azul"); // 4 cor[4]

// Forma antiga
cor[5] = "Roxo"; // 0 cor[0]
cor[6] = "Cinza"; // 1 cor[1]
cor[7] = "Prateado"; // 2 cor[2]
cor[8] = "Dourado"; // 3 cor[3]
cor[9] ="Ciano"; // 4 cor[4]

document.write(cor[9]); 

var itens = ["Faca", "Shootgun", "Pistola", "Lanterna", "Machado"];
var mochila = [];

// mochila.push(itens[2]); agora faz parte da variavel mochila 
mochila.push(4); // Pode adicionar numero ou string
mochila.push(0);
mochila.push(2);

document.write("<br>"+itens[mochila[0]]);
document.write("<br>"+itens[mochila[1]]);
document.write("<br>"+itens[mochila[2]]);
