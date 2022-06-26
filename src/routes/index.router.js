const express = require('express'); // requerimos express nuevamente
const router = express.Router(); // requerimos el modulo Router que esta en express
const controller = require ('../controllers/index.controller'); // requiriendo el archivo index.controller.js 

/*router.get('/', (req, res) =>{
    res.send('La conexión ha sido correcta desde routes')
});*/ // enviando respuesta al cliente usando send con mensaje

router.get('/', controller.index);//especificando el uso de la ruta con el controlador creado para index con las funciones del mismo

module.exports = router; // exportando rutas para utilizar en cualquier otro archivo, específicamente en app.js

