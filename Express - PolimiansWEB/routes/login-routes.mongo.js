var loginService = require('../services/login.service.mongo');
var express = require('express');
var router = express.Router();


router.post('/', function (req, res) {
    loginService.login(req, res);
});

router.post('/register', function (req, res) {
    loginService.register(req, res);
});

router.put('/update/:id', function(req, res){
    loginService.update(req,res);
  });



module.exports = router;