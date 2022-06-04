const Confesiones = require("../models/AllconfiModels");

const existConfection = async (req,res,next) =>{

    const ID = req.params.id

   try {
    const exist = await Confesiones.findById(ID)
   } catch (error) {
      return res.status(404).json({msg:"esta confecion no existe"})
   }

   /*  if (!exist) {
        res.status(404).json({msg:"esta targeta no existe"})
    } */

    next()
    
}

module.exports = existConfection