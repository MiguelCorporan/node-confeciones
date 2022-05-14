// const http = require('http')
// const server = http.createServer((req, res) => {
//     res.end("Rspondiendo solicitud v.3")
// })

// const puerto = 4000;

// server.listen(puerto, () => {
//     console.log('escuchando solicitud..');
// })

const express = require('express')
const app = express()

const port = 4000;

//El motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
//----------------------------

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render("index", {titulo: "El titulo de inicio"})
})

app.get('/Servicio', (req, res) => {
    res.render("servicio", {Title: 'Esta es la pagina del servicio v.2'})
})

app.use((req, res, next) => {
    res.status(404).render("404", 
    {titulos: "404",
     descripcion: "No funciona"})
})

app.listen(port, () => {
    console.log('Respuesta del servidor');
})