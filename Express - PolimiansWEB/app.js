var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

//mongo connection
require('./data/mongo.connection');

//router

var login = require('./routes/login-routes.mongo');
var espectadores = require('./routes/espectador-route.mongo');
var companhias = require('./routes/comapnhia-route.mongo');
var espetaculos = require('./routes/espetaculo-route.mongo');
var workshop = require('./routes/workshop-routes.mongo');

var upload = require('./routes/fileupload-route.mongo');

var app = express();

//configuração
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

app.get('/routes', function(req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' });
});



app.use('/login', login);
app.use('/espectadores', espectadores);
app.use('/companhias', companhias);
app.use('/espetaculos', espetaculos);
app.use('/workshops', workshop);
app.use('/upload', upload);


module.exports = app;