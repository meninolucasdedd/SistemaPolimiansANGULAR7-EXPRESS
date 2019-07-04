var express = require('express');
var router = express.Router();
var WorkshopService = require('../services/workshop.service.mongo');

router.get('/list', function(req, res) {
    WorkshopService.list(req, res);
});

router.post('/register', function(req, res) {
    WorkshopService.register(req, res);
});

router.put('/update/:id', function(req, res) {
    WorkshopService.update(req, res);
});

router.delete('/delete/:id', function(req, res) {
    WorkshopService.delete(req, res);
});

router.get('/retrieve/:id', function(req, res) {
    WorkshopService.retrieve(req, res);
});

module.exports = router;