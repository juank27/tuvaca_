const express = require('express');//ayuda a crear un servidor
const morgan = require('morgan'); //sirve para mostrar los request en consola

const app = express();
app.use(morgan('dev'));
module.exports = app;
