// Usaremos un framework para node, EXPRESSJS
const express = require('express')
const path = require('path')

//iniciamos el server y le pasamos options
const startServer = (options) => {
    const { port, public_path = 'public'} = options
    // console.log(port)
    // console.log(public_path)

    //asignamos el uso de express a app
    const app = express();

    //middleware. Para usarlos tenemos que poner use
    app.use(express.static(public_path)); //contenido estatico que ponemos disponible para usar

    //Si nos hacen peticiones por url, mostrar la web. Con esto la recibimos
    //request --> solicitud - response --> respuesta
    // el * es para devolver siempre lo mismo ya que es una web chica
    app.get('*name', (req,res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`) // acceso al index y a public path dinamicamente
        res.sendFile(indexPath); // devolvemos el index.html. Esto porque es una SPA, si necesitamos varias rutas, las definimos con GET.
    }); 

    app.listen(port, () => {
        console.log("escuchando el puerto: " + port)
    })


}

module.exports = {
    startServer
}