
//creamos un manejador de rutas modulares
const express = require('express');
const router = express.Router();

//definimos el controlador para el manejo del CRUD
const mensajeCtrl = require('../controllers/mensaje-texto.controller');

// definiendo rutas
router.get('/', mensajeCtrl.getMensajes);
router.post('/', mensajeCtrl.createMensaje);
router.get('/:id', mensajeCtrl.getMensaje);
router.put('/:id', mensajeCtrl.editMensaje);
router.delete('/:id', mensajeCtrl.deleteMensaje);

//exportacion del modulo de rutas
module.exports = router;