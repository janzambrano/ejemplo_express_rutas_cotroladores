const controller = {}// aca estarán todas las funciones que se ejecutaran dentro del archivo index

controller.index = (req, res) =>{
    res.send('La conexión ha sido correcta desde controller')
}; // enviando respuesta al cliente usando send con mensaje

module.exports = controller; // exportando controller para utilizar en cualquier otro archivo, específicamente en app.js