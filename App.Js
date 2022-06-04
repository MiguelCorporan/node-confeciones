require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

const port = process.env.PORT || 4000;

console.log(process.env.PORT);

//debajo del puerto la conexion a la base de datos
const mongoose = require('mongoose');

const user = "PortafolioNew"
const password = "rTmpj6rUluNfWrPT"
const dbName = "Portafolio"
const uri = `mongodb+srv://${user}:${password}@confesionario.o3ccc.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

.then(() => {console.log("se conecto")})
.catch(e =>  console.log(e))


//El motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
//----------------------------

app.use(express.static(__dirname + '/public'))

//RutasWeb lo que accede a las rutas, tipo react este es el router
app.use("/", require('./router/RutasWeb'))
app.use("/Confesiones", require('./router/Confesiones'))


app.use((req, res, next) => {
    res.status(404).render("404", 
    {titulos: "404",
     descripcion: "No funciona"})
})

app.listen(port, () => {
    console.log('Respuesta del servidor');
})


