const express = require("express")
const app = express.Router()

app.use(express.static(__dirname+"\\contenido\\web2"))

app.use(function(req,res){
    res.status(404).send("WEB NO ENCONTRADA")
})

module.exports = app