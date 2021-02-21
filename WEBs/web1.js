const express = require("express")
const fs = require("fs")
const app = express.Router()

const html = fs.readFileSync(__dirname+"\\contenido\\web1\\webdinamica.html").toString()

app.get("/dinamica",function(req,res){
    var htmlCambiado = html.replace("<%texto%>",Math.random()*1000)
    res.send(htmlCambiado)
})

app.use(express.static(__dirname+"\\contenido\\web1"))

app.use(function(req,res){
    res.status(404).send("WEB NO ENCONTRADA")
})

module.exports = app