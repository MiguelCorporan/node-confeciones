const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render("index", {titulo: "El titulo de inicio"})
})

router.get('/Servicio', (req, res) => {
    res.render("servicio", {Title: 'Esta pagina fue creada sin ningun fin de lucro por Miguel corporan'})
})



module.exports = router
