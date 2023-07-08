const express = require('express');
const router = express.Router();
const path = require("path");
const fs = require("fs")

var views = {root:path.join(__dirname, "../views")};

router.get('/', (req, res) => {
  res.sendFile("/index.html", views);
});

router.get('/numPrimos', (req, res) => {
  res.sendFile("/numPrimos.html", views);
});

router.get('/palaPalindromas', (req, res) => {
  res.sendFile("/palaPalindromas.html", views);
});

router.get('/contrasena', (req, res) => {
  res.sendFile("/contrasena.html", views);
});

router.get('/mostrarDatos', (req, res) => {
  res.sendFile("/mostrarDatos.html", views)
});

router.post('/postRegistro', (req, res) => {
  const {matricula, nombre, apellidos, correo,contrasena } = req.body;
  console.log("Matricula "        , matricula)
  console.log("Nombre "           , nombre)
  console.log("Apellidos"         , apellidos)
  console.log("correo electronico", correo)
  console.log("contraseña "       , contrasena)

  // ../act1_marcos/views/mostrarDatos.html

  fs.readFile('./views/mostrarDatos.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error interno del servidor');
    }

    let html; 
    html = data.replace('<!--Matricula-->', matricula);
    html = html.replace('<!--Nombre-->', nombre);
    html = html.replace('<!--Apellidos-->', apellidos);
    html = html.replace('<!--Correo-->' , correo);
    html = html.replace('<!--Contrasena-->', contrasena);
    res.send(html);
  });
});

router.get('/conversor', (req, res) => {
  res.sendFile(path.join(__dirname, "../views/conversor.html"));
});

router.get('/adivinaNum', (req, res) => {
    res.sendFile(path.join(__dirname, "../views/adivinaNum.html"));
});

router.use('/public/css', express.static(path.join(__dirname, '../public/css'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.type('text/css'); 
    }
  }
}));

router.use('/public/js', express.static(path.join(__dirname, '../public/js'), {
    setHeaders: (res, path) => {
      if (path.endsWith('.js')) {
        res.type('text/javascript');
      }
    }
}));

router.use('/img', express.static(path.join(__dirname, '../public/img')))


module.exports = router;