// Paso 1 -- primero creáramos un servidor con el app.js y creamos una carper ruta fijada con lo establecido en las lineas 6 - 9

// Paso 2 -- luego las lineas 6 - 9 no se utilizaran, por eso las comente y tendremos que crear la carpeta routes y dentro el js de la ruta que necesitemos (index.router.js), dentro de este colocaremos prácticamente lo mismo de las lineas de aca 6 - 9 con ciertos cambios en variables y métodos, con demás detalles en el.

// Paso 3 -- luego las lineas 5 - 7 del archivo index.router.js no se utilizaran, por eso las comente y tendremos que crear la carpeta controller y dentro de ella el archivo index.controller.js, dentro este colocamos parte de la función comentada del del archivo index.router.js de las lineas 5 - 7 (solo la función), con demás detalles en el.

// conclusion, separamos la funcionalidad en 3 piezas, por un lado el app.js que usa las rutas, por otro la ruta (router) y por otro la funcionalidad cuando un usuario o cliente se conecta a esa ruta (controladores)


const express = require ('express'); // localizando express en el proyecto
const app = express (); // declarando la variable app donde contendrá todo los métodos y propiedades de express para su posterior uso
const path = require('path') // este modulo se encarga de normalizar rutas y una dirname con la carpeta public para las rutas estáticas

app.set('view engine', 'pug'); // estableciendo el motor de plantillas pug para usar en el curso estamos viendo ejs este es otro
app.set('views', path.join(__dirname, '/src/views')); //estableciendo las carpetas donde estarán todas las vistas del proyecto, OJO con las rutas y carpetas

// ya esto no lo usamos porque se va utilizar las respectivas rutas y controladores, esto solo lo ocupamos si no se utilizaría lo anterior mencionado
/*app.get('/', (req, res) =>{
    res.send('La conexión ha sido correcta')
});*/ // enviando respuesta al cliente usando send con mensaje

// Rutas
const routes = require ('./src/routes/index.router') // requiriendo el archivo index.router.js con las rutas de index
app.use(routes); // usando el archivo index.router.js con las rutas de index

// Rutas estáticas
app.use(express.static(path.join(__dirname, '/public')));

// Rutas cuando una ruta no existe, error 404
app.use((req, res) =>{
    res.sendFile(path.join(__dirname, '/public/404.html'))
});

// habilitando servidor por el puerto 3000
app.listen(3000, () =>{
    console.log('Servidor a la espera de conexiones');
}); 

