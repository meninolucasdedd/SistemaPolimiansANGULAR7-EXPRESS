var express = require('express');
var router = express.Router();
let grupoService = require('../services/grupoCultural-service');



router.get('/list', function(req, res) {
  res.json(grupoService.list());
});

router.post('/register', function(req,res){
  const grupoCultural = grupoService.register(req.body);
  res.json(grupoCultural);
});

router.put('/update/:id', function(req, res){
  const grupoCultural = grupoService.update(req.params.id, req.body);
  return res.json(grupoCultural);
});

router.delete('/delete/:id', function(req, res){
  const ok = grupoService.delete(req.params.id);
  if(ok) return res.json({"sucess":true});
  else return res.json({"sucess":false});
});

router.get('/retrieve/:id', function(req, res){
  const out = grupoService.retrieve(req.params.id);
  return res.json(out);
});

module.exports = router;