var express = require('express');
var router = express.Router();
var espetaculoService = require('../services/espetaculo.service.mongo');

router.get('/list', function(req, res) {
  espetaculoService.list(req,res);
});

router.post('/register', function(req, res){
  espetaculoService.register(req,res);
});

router.put('/update/:id', function(req, res){
  espetaculoService.update(req,res);
});

router.delete('/delete/:id', function(req, res){
 espetaculoService.delete(req,res);
});

router.get('/retrieve/:id', function(req, res){
  espetaculoService.retrieve(req,res);
});

module.exports = router;