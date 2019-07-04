var express = require('express');
var router = express.Router();
let companhiaService = require('../services/companhia.service.mongo');



router.get('/list', function (req, res) {
  companhiaService.list(req, res);
});

router.post('/register', function (req, res) {
  companhiaService.register(req, res);

});

router.put('/update/:id', function (req, res) {
  companhiaService.update(req, res);
});

router.delete('/delete/:id', function (req, res) {
  companhiaService.delete(req, res);

});

router.get('/retrieve/:id', function (req, res) {
  companhiaService.retrieve(req, res);
});

module.exports = router;