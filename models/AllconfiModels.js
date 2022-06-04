const mongoose = require('mongoose')
const schema = mongoose.Schema;

const confeSchema = new schema( {

    Tema: String,
    Alias: String,
    Confesion: String,
    Pass: String,
    Fecha: String

})

//crea modolo 
const Confesiones = mongoose.model("Confesion", confeSchema)

module.exports = Confesiones