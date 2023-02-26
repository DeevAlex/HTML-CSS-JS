
require("dotenv").config() // isso aqui é referente a nossas variaveis de ambiente configuradas no .env 

const express = require("express") // nesse bloco: a gente iniciou o express
const app = express() 


const mongoose = require("mongoose") // nesse bloco: o mongoose é quem vai modelar a nossa base de dados e garantir que nossos dados sejam salvos na base de dados da forma que a gente quer salvar por isso a gente cria um Schema que fala como os dados devem ser salvos nessa tabela como um contato: email , telefone , nome , sobrenome , etc por isso a gente usa mongoose ( ele substitui o driver do mongoDB) salvo em alguns casos e ele retorna uma promise por isso a gente coloca .then e o .catch  
mongoose.set('strictQuery', true)
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Conectei na base de dados") // e esse apenas manda para gente mas é opcional se quiser
    app.emit("pronto") // quando conectado ele emite esse sinal de "pronto"
}).catch(e => {
    console.log(e)
})


const session = require("express-session") // session geralmente serve para identificar um navegador do cliente que irá salvar um cookie com um id desse cookie e toda vez que ele conectar no servidor ele vai mandar esse cookie e o nosso servidor vai checar essa sessão e vai retornar esse usuario que já conectou anteriormente e posso confiar nesse navegador e logar esse cliente
const MongoStore = require("connect-mongo") // esse mongostore é para falar que as sessões irão ser salvas dentro da base de dados porque por padrão serão ser salvas em memoria e se a gente usar memoria em um servidor de produção a gente fica sem memoria rapidamente por isso usamos o mongostore para salvar as sessões na base de dados
const flash = require("connect-flash") // esse flash são flash messages são aquelas mensagens que são autodestrutivas no caso, assim que você ler ela, ela ira sumir da base de dados e não existirá mais, então isso faz com que esse flash messages seja perfeito para mandar mensagens de erro, feedback para seus usuarios e essas mensagens são salvas em sessões por isso a gente precissava da session para a gente configurar essas flash messages sem sessão elas não irão funcionar pois são salvas na sessão

const route = require("./routes") // routes são as rodas da nossa aplicação , ou seja , "/home" , "/contato" , "/inicio". qualquer coisa referente a rotas da aplicação vai cair aqui em routes
const path = require("path") // path é para trabalhar com caminhos


const helmet = require("helmet") // helmet é recomendação do pessoal do express para saber mais ele tem uma documentação - segurança também
const CSRF = require("csurf") // csrf são csrfTokens que a gente cria para os nossos formularios então todos os nossos formularios dentro da aplicação tem que ter csrfToken isso faz com que nenhum aplicativo externo, nenhum site externo consiga postar coisas para dentro da nossa aplicação isso também é alguma coisa relacionada com seguraça, é uma CSRF é uma falha de segurança que podemos pesquisar mais sobre ela que já resolvemos aqui


const { meuMiddlewareGlobal , meuOutroMiddleware , checkCSRFError , CSRFMiddleware } = require("./src/middlewares/middleware") // aqui são os nossos middlewares e o express confia muito em middlewares , middlewares são funções que são executadas na rota, tipo assim, uma cadeia de coisas que são executadas , por exemplo , se eu pego uma rota qualquer (em routes) a primeira rota homeController.paginaInicial é uma rota que já responde o cliente e termina ali a conexão, e pode acontecer alguns casos, que a gente quer usar no meio do caminho antes de responder o cliente ou depois de responder o cliente dai a gente cria funções que executam no meio do caminho que passa uma função que passa para outra ao ser executada e assim vai , muito comum para fazer login de um usuario , exemplode um middleware route.<get ou post>("rota", middleware1, middleware2, ...)

app.use(helmet()) // aqui estamos configurando o helmet
app.use(express.static(path.resolve(__dirname , "public"))) // esse é para todos os nossos arquivos staticos e que podem ser acessados diretamente , exemplo , imagems , css , js , esses tipos de arquivos devem ser acessados diretamente 
app.use(express.urlencoded({ extended: true })) // essa linha fala que a gente pode postar formularios para dentro da nossa aplicação: 
app.use(express.json()) // essa é muito utilizada que é json a gente poderia também fazer parse de json para dentro da aplicação

const sessionOptions = session({ // aqui é a configuração de sessão
    
    secret: "WA!RP KR|MB KAN}R LB{JA VX/AC", 
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }), 
    resave:false,
    saveUninitialized: false, 
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, 
        httpOnly: true
    }
})


app.use(sessionOptions)
app.use(flash()) // aqui estamos configurando o flash
  
// aqui são os nossos middlewares que a gente configurou , exportou e importou e chamou aqui
app.use(meuMiddlewareGlobal) 
app.use(meuOutroMiddleware)
app.use(checkCSRFError)
app.use(CSRFMiddleware)

app.use(route) // aqui estamos chamando as rotas 


app.set("views" , path.resolve(__dirname , "src" , "views")) // aqui em views são os arquivos que a gente renderiza na tela, geralmente views são arquivos html e aqui é o caminho absoluto deles aqui na pasta views teremos varios deles 
app.set("view engine" , "ejs") // e view engine é a engine que a gente está utilizando para renderizar esses html's tem varias alem de ejs porém tem outras usamos ejs aqui pois é muito similar ao html


app.use(CSRF()) // aqui estamos configurando o CSRF e ao colocar isso ai se o input nõo tiver a key ele vai dar erro para a prevenção de ataque hacker


app.on("pronto", () => { // dai quando lá em cima emitir o sinal pronto ele vem para cá e começa a ouvir requisições na porta que quisermos e só tem essas mensagens para entrar no servidor mais rapido 
    app.listen(3000 , () => {

        console.log("Acesse o servidor pelo: http://localhost:3000")
        console.log('Servidor Iniciado na Porta 3000')
    
    })
})


// e estamos padrão MVC - Model , Views e Controllers -> funcionam assim: a gente tem a rota e a rota vai decidir qual controller vai ser utilizado, quem vai controlar aquela rota , exemplo , eu entrei na home e quem vai controlar essa rota é o homeController que vai decidir sobre essa rota , isso é o controller , o unico trabalho do controller é decidir , esse é model dessa rota aqui que vai controlar dados da base de dados , e coisas relacionadas com dados e esse outro vai ser o view que vai ser usado nessa aplicação , o unico trabalho do view é escolher qual que é o model e o view que vai ser usado , exemplo (routes.js) -> routes.<get ou post>("<rota>", controller.<variavel>) que vai ter o view e model  


// instalar para segurança: npm i helmet e npm i  csurf

// O Helmet é para segurança da aplicação, portanto, caso você esteja com um sistema ainda em desenvolvimento, usando urls como "127.0.0.1", "localhost" ou até um servidor com IP externo, sem usar SSL (https), é recomendável desativá-lo. Ele pode bloquear importação de scripts e arquivos de CSS.

// Caso ocorra erros ao importar o bundle.js, arquivos de CDN (como bootstrap, por exemplo) ou CSS, basta desativar o helmet para correção.

// Isso só ocorrerá em sistemas sem SSL (sem https na URL).