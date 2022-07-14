const express = require('express');//ayuda a crear un servidor
const morgan = require('morgan'); //sirve para mostrar los request en consola
const path = require('path');//permite trabajar con rutas

const app = express();

app.use(morgan('dev'));
app.use(express.json()); //para traer info del frontend con method POST
app.use(express.urlencoded({ extended: false }));//traer info del frontend
app.use(require('./routes/index'));
app.use(express.static(path.join(__dirname,'public')));//archivos estaticos


module.exports = app;