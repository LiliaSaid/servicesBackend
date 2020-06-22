const Empresa = require('../models/empresa'); 


const empresaCtrl = {}

empresaCtrl.getEmpresas = async (req, res) => {
    empresa = await Empresa.find();
    res.json(empresa);
}

empresaCtrl.createEmpresa = async (req, res) => {
    console.log("entro create asis");
    const empresa = new Empresa (req.body);
    await empresa.save();
    res.json({
        'status': 'empresa saved'
    });
}

module.exports= empresaCtrl;