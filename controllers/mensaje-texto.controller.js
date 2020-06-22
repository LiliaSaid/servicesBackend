const Mensaje = require('../models/mensaje'); 


const mensajeCtrl = {}

mensajeCtrl.getMensajes = async (req, res) => {
    mensaje = await Mensaje.find();
    res.json(mensaje);
}

mensajeCtrl.createMensaje = async (req, res) => {
    console.log("entro create asis");
    const mensaje = new Mensaje (req.body);
    await mensaje.save();
    res.json({
        'status': 'mensaje saved'
    });
}

mensajeCtrl.getMensaje = async (req, res) => {
    const mensaje = await Mensaje.findById(req.params.id);
    res.json(mensaje);
}

mensajeCtrl.editMensaje = async (req, res) => {
    const vmen =  new Mensaje (req.body);
    await Mensaje.findByIdAndUpdate(req.params.id, {$set: vmen}, {new: true});
    res.json({
        'status': 'Mensaje updated'
    })
}
mensajeCtrl.deleteMensaje = async (req, res)=>{
    await Mensaje.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Mensaje removed'
    })
}

module.exports= mensajeCtrl;