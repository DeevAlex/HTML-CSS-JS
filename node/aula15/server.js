
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

// importando express-session para salvar a sessão na memoria

const session = require("express-session")
const MongoStore = require("connect-mongo")
const flash = require("connect-flash")

const route = require("./routes") 
const path = require("path")

const { meuMiddlewareGlobal , meuOutroMiddleware } = require("./src/middlewares/middleware") 

app.use(express.urlencoded({ extended: true })) 

app.use(express.static(path.resolve(__dirname , "public")))

// template de session

const sessionOptions = session({
    secret: "WA!RP KR|MB KAN}R LB{JA VX/AC", // isso dai pode ser o que a gente quiser
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }), // cliente de conexão do nosso mongoDB que é o mongoose
    resave:false, // é a propria recomendação da documentação de utilizar 
    saveUninitialized: false, 
    cookie: { // e quanto tempo a sessão vai durar, a duração do cookie 
        maxAge: 1000 * 60 * 60 * 24 * 7, // aqui é quanto tempo o cookie vai durar em milessimos de segundos <milessimo> * <segundos> * <hora> * <horas> * <dias>
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flash())
  
app.set("views" , path.resolve(__dirname , "src" , "views")) 
app.set("view engine" , "ejs") 

app.use(meuMiddlewareGlobal) 
app.use(meuOutroMiddleware)
app.use(route)

app.on("pronto", () => { 
    app.listen(3000 , () => {

        console.log("Acesse o servidor pelo: http://localhost:3000")
        console.log('Servidor Iniciado na Porta 3000')
    
    })
})

// instalar : npm i express-session connect-mongo connect-flash