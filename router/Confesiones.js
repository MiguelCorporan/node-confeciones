const express = require('express')
const router = express.Router()

const existConfection = require('../middlewares/existconfection.js')
const havePassword = require('../middlewares/havePassword.js')
//const { deleteController } = require('../controller/ConfesionesController.js')

let timeNow = new Date()
let dia = timeNow.getDate().toString()
let mes = timeNow.getMonth().toString()
let year = timeNow.getFullYear().toString()

const id2 = `${dia} / ${mes} / ${year}`


const Confesiones = require("../models/AllconfiModels")

/*-------------------------------*/

/*----------------------------*/




router.get('/', async (req, res) => {

    try {
        const ArrayConfesionesDB = await Confesiones.find()

        res.render("Confesiones", {
            ArrayConfesiones : ArrayConfesionesDB,
           id2
        
        })
        
        
    } catch (error) {
        console.log("fallas");
        console.log(error);
    }


})

//crea la ruta crear dentro de confesiones
 router.get('/crear', (req, res) => {
     res.render('crear')
 })


 //Obtine los datos del formulario atravez del body
 router.post('/', async (req, res) => {
     const body = req.body
     
     try {
        //  const ConfiDB = new Confesiones(body)
        //  await ConfiDB.save()
        
        await Confesiones.create(body)
         res.redirect('/Confesiones')


     } catch (error) {
         console.log(error);
     }
 })

 //Busca un unico documento para editar o eliminar
 router.get('/:id', async (req,res) => {

    const ID = req.params.id

    try {
        const ConfiDB = await Confesiones.findOne({_id: ID})
        console.log(ConfiDB);

        res.render('detalle', {
            Confesiones: ConfiDB, 
            error: false
        })
    } catch (error) {
        console.log(error);

        res.render('detalle', {
            error: true,
            mensaje: 'No se encuantra esta confesion'
        })
    }
 })



 //Elimina
 router.delete('/:id',[ existConfection,havePassword], async (req, res) => {
    const ID = req.params.id


   try {
    const deleted = await Confesiones.findByIdAndRemove(ID)
    res.json(deleted)
   } catch (error) {
       
   }
  
})




// Edita
router.put('/:id', [existConfection,havePassword],  async (req, res) => {
    const ID = req.params.id
    const body = req.body

    console.log(body);

    try {
        const ConfiDB = await Confesiones.findByIdAndUpdate(
            ID, body, {useFindAndModify: false})


            res.json({
                ConfiDB,
                estado: true,
                mensaje: "Editado"
            })
        
    } catch (error) {
        console.log(error);
        res.json({
            estado: false,
            mensaje: "Fallo"
        })
    }
})

module.exports = router 