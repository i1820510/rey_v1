var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let indexRouter = require('./app/routes/index');
let homeRouter = require('./app/routes/homeRuta');
let menuRouter = require('./app/routes/menuRuta');
let inicioSesion =  require('./app/routes/inicioSesion');
let crearCuenta = require('./app/routes/crearCuenta');
let acceso = require('./app/routes/acceso');


var app = express();


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname,('./public'))));

//rutas principales

app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/menu', menuRouter);
app.use('/acceso', acceso);
app.use('/crear_cuenta', crearCuenta);
app.use('/iniciar_sesion', inicioSesion);

module.exports = app;
