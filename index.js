// LIBRERÍAS
const express = require("express")
const vhost = require("vhost")
const morgan = require("morgan")
const app = express()
app.use(morgan("combined"))

// OTRAS WEBS
const web1 = require("./WEBs/web1")
const web2 = require("./WEBs/web2")

// REDIRECCIÓN VHOST
app.use(vhost("web1.localhost",web1))
app.use(vhost("web2.localhost",web2))

app.use(function(req,res){
    res.status(404).send("WEB NO ENCONTRADA")
})

app.listen(80)