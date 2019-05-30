var express = require('express');
var router = express.Router();
let espetaculoService = require('../services/espetaculo-service');



router.get('/list', function(req, res) {
  res.json(espetaculoService.list());
});

router.post('/register', function(req,res){
  const espetaculo = espetaculoService.register(req.body);
  res.json(espetaculo);
});

router.put('/update/:id', function(req, res){
  const espetaculo = espetaculoService.update(req.params.id, req.body);
  return res.json(espetaculo);
});

router.delete('/delete/:id', function(req, res){
  const ok = espetaculoService.delete(req.params.id);
  if(ok) return res.json({"sucess":true});
  else return res.json({"sucess":false});
});

router.get('/retrieve/:id', function(req, res){
  const out = espetaculoService.retrieve(req.params.id);
  return res.json(out);
});

module.exports = router;