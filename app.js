const express = require('express');
const servidor = express();
const bodyParser = require('body-parser');

/**
 * @constant bodyParser es un middleware de express que analiza las solicitudes de http. Permite extraer los datos enviados en el 
 * cuerpo de la solicitud y ponerlos a disposición en el objeto req.body para su fácil acceso y manejo.
 * 
 * En la linea 18 indica que deseas utilizar body-parser para analizar los datos del cuerpo de las solicitudes entrantes. Al precionar el boton
 * "enviar" en el archivo "contrasena.html" mandamos la siguiente ruta
 * 
 * /postRegistro/:matricula/nombre/:nombre/apellidos/:apellidos/correo/:correo/contrasena/:contrasena
 * 
 * Y imprimimos los valores en consola de los inputs que se hayan insertado 
 *  
 */

servidor.use(bodyParser.urlencoded({ extended: true }));
servidor.use(express.json());
servidor.use(require("./router/RutasWeb.js"))
servidor.set("puerto", 5050)

servidor.listen(servidor.get("puerto"),() => { 
    console.log("servidor Express en el puerto:", servidor.get("puerto"))
});