var express = require('express');
var router = express.Router();
let workshopService = require('../services/workshop-service');



router.get('/list', function(req, res) {
  res.json(workshopService.list());
});

router.post('/register', function(req,res){
  const works = workshopService.register(req.body);
  res.json(works);
});

router.put('/update/:id', function(req, res){
  const works = workshopService.update(req.params.id, req.body);
  return res.json(works);
});

router.delete('/delete/:id', function(req, res){
  const ok = workshopService.delete(req.params.id);
  if(ok) return res.json({"sucess":true});
  else return res.json({"sucess":false});
});

router.get('/retrieve/:id', function(req, res){
  const out = workshopService.retrieve(req.params.id);
  return res.json(out);
});

module.exports = router;