
require("dotenv").config()

const express = require("express") 
const app = express() 


const mongoose = require("mongoose") 
mongoose.set('strictQuery', true)
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Conectei na base de dados") 
    app.emit("pronto") 
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

app.use(helmet()) 
app.use(express.static(path.resolve(__dirname , "public"))) 
app.use(express.urlencoded({ extended: true })) 

const sessionOptions = session({ 
    
    secret: "WA!RP KR|MB KAN}R LB{JA VX/AC", 
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }), 
    resave:false,
    saveUninitialized: false, 
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 2, 
        httpOnly: true
    }
})


app.use(sessionOptions)
app.use(flash()) 
  

app.use(meuMiddlewareGlobal) 
app.use(meuOutroMiddleware)
app.use(checkCSRFError)
app.use(CSRFMiddleware)

app.use(route) 


app.set("views" , path.resolve(__dirname , "src" , "views")) 
app.set("view engine" , "ejs") 


app.use(CSRF()) 


app.on("pronto", () => {
    app.listen(3000 , () => {

        console.log("Acesse o servidor pelo: http://localhost:3000")
        console.log('Servidor Iniciado na Porta 3000')
    
    })
})

