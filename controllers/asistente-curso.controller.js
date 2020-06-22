const Asistente = require('../models/asistente'); 


const asistenteCtrl = {}

asistenteCtrl.getAsistentes = async (req, res) => {
    asistentes = await Asistente.find();
    res.json(asistentes);
}

asistenteCtrl.createAsistente = async (req, res) => {
    console.log("entro create asis");
    const asistente = new Asistente (req.body);
    await asistente.save();
    res.json({
        'status': 'Asistente saved'
    });
}

asistenteCtrl.getAsistente = async (req, res) => {
    const asistente = await Asistente.findById(req.params.id);
    res.json(asistente);
}

asistenteCtrl.editAsistente = async (req, res) => {
    const vasist =  new Asistente (req.body);
    await Sector.findByIdAndUpdate(req.params.id, {$set: vasist}, {new: true});
    res.json({
        'status': 'Asistente updated'
    })
}
asistenteCtrl.deleteAsistente = async (req, res)=>{
    await Asistente.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Asistente removed'
    })
}
module.exports= asistenteCtrl;