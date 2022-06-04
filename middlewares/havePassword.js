const Confesiones = require("../models/AllconfiModels")

const havePassword = async (req,res,next) =>{

    const ID = req.params.id

    const {password} = req.body 

    try {
       const confesion = await Confesiones.findById(ID) 

     //  console.log(confesion.Pass != password);
            if (confesion.Pass !== password) {
               return res.status(505).json({msg:"ute no tiene la contrase;a mmg"})
            }

    } catch (error) {
        res.json(error)
    }

    next()

}

module.exports = havePassword