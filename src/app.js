const express = require('express');//ayuda a crear un servidor
const morgan = require('morgan'); //sirve para mostrar los request en consola
const path = require('path');//permite trabajar con rutas
const exphbs = require('express-handlebars');//permite trabajar con handlebars

const app = express();

app.set("views", path.join(__dirname, "views")); //permite trabajar con handlebars
app.engine(
	".hbs",
	exphbs.create({
		defaultLayout: false,//para poder usar layouts
		extname: ".hbs",
		//layoutsDir: "views/layouts/"
	}).engine
);
app.set("view engine", ".hbs");

app.use(morgan('dev'));
app.use(express.json()); //para traer info del frontend con method POST
app.use(express.urlencoded({ extended: false }));//traer info del frontend
app.use(require('./routes/index'));
app.use(express.static(path.join(__dirname, 'public')));//archivos estaticos


module.exports = app;