var express = require('express');
var router = express.Router();
let especServices = require('../services/espectador-service');



router.get('/list', function(req, res) {
  res.json(especServices.list());
});

router.post('/register', function(req,res){
  let espectador = especServices.register(req.body);
  res.json(espectador);
});

router.put('/update/:id', function(req, res){
  const espectador = especServices.update(req.params.id, req.body);
  return res.json(espectador);
});

router.delete('/delete/:id', function(req, res){
  const ok = especServices.delete(req.params.id);
  if(ok) return res.json({"sucess":true});
  else return res.json({"sucess":false});
});

router.get('/retrieve/:id', function(req, res){
  const out = especServices.retrieve(req.params.id);
  return res.json(out);
});

module.exports = router;
