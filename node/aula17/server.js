
require("dotenv").config()

const express = require("express")
const app = express() 


const mongoose = require("mongoose")
mongoose.set('strictQuery', true)


mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Conectei na base de dados") 
    app.emit("pronto") 
}).catch(e => {
    console.log(e)
})


const session = require("express-session")
const MongoStore = require("connect-mongo")
const flash = require("connect-flash")


const route = require("./routes") 
const path = require("path")


const helmet = require("helmet")
const CSRF = require("csurf")


const { meuMiddlewareGlobal , meuOutroMiddleware , checkCSRFError , CSRFMiddleware } = require("./src/middlewares/middleware") 


const sessionOptions = session({
    
    secret: "WA!RP KR|MB KAN}R LB{JA VX/AC", 
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }), 
    resave:false,
    saveUninitialized: false, 
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, 
        httpOnly: true
    }
})

app.use(helmet())
app.use(express.static(path.resolve(__dirname , "public")))
app.use(express.urlencoded({ extended: true })) 


app.use(sessionOptions)
app.use(flash())
  
app.use(CSRF()) // ao colocar isso ai se o input nõo tiver a key ele vai dar erro para a prevenção de ataque hacker

app.use(meuMiddlewareGlobal) 
app.use(meuOutroMiddleware)
app.use(checkCSRFError)
app.use(CSRFMiddleware)

app.use(route)


app.set("views" , path.resolve(__dirname , "src" , "views")) 
app.set("view engine" , "ejs") 

app.on("pronto", () => { 
    app.listen(3000 , () => {

        console.log("Acesse o servidor pelo: http://localhost:3000")
        console.log('Servidor Iniciado na Porta 3000')
    
    })
})


// instalar para segurança: npm i helmet e npm i  csurf

// O Helmet é para segurança da aplicação, portanto, caso você esteja com um sistema ainda em desenvolvimento, usando urls como "127.0.0.1", "localhost" ou até um servidor com IP externo, sem usar SSL (https), é recomendável desativá-lo. Ele pode bloquear importação de scripts e arquivos de CSS.

// Caso ocorra erros ao importar o bundle.js, arquivos de CDN (como bootstrap, por exemplo) ou CSS, basta desativar o helmet para correção.

// Isso só ocorrerá em sistemas sem SSL (sem https na URL).