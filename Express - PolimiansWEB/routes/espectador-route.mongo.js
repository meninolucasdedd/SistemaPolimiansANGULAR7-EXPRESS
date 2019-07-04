var express = require('express');
var router = express.Router();
var espectadorService = require('../services/espectador.service.mongo');

router.get('/list', function (req, res) {
  espectadorService.list(req, res);
});

router.post('/register', function (req, res) {
  espectadorService.register(req, res);
});

router.put('/update/:id', function (req, res) {
  espectadorService.update(req, res);
});

router.delete('/delete/:id', function (req, res) {
  espectadorService.delete(req, res);
});

router.get('/retrieve/:id', function (req, res) {
  espectadorService.retrieve(req, res);
});

module.exports = router;