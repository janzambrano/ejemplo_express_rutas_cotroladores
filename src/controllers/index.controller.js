const controller = {}// aca estarán todas las funciones que se ejecutaran dentro del archivo index

controller.index = (req, res) =>{
    //res.send('La conexión ha sido correcta desde controller')// aca solo estábamos enviando un mensaje, se comento porque se creo dentro de la carpeta views un archivo index.pug que es el que se va a renderizar

    res.render('index');//renderizando la vista creada del archivo index.pug

}; // enviando respuesta al cliente usando send con mensaje

module.exports = controller; // exportando controller para utilizar en cualquier otro archivo, específicamente en app.js