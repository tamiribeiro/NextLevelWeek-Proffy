//servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configuração nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Início e configuração do servidor
server
// receber os dados do req.body 
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos (css, scripts, imagens etc)
.use(express.static("public"))
.get("/", pageLanding) 
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClasses)


.listen(5500)