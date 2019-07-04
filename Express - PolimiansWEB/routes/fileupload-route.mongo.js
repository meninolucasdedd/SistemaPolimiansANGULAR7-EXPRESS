const express = require('express');
var router = express.Router();

router.post('/simplefile', function(req, res) {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('Nenhum arquivo encontrado.');
    }
    let file = req.file.sampleFile;
    file.mv('../../uploaded-files/' + file.name,
        function(err) {
            if (err) return res.status(500).send(err);
            res.send('Arquivo enviado');
        });
});
module.exports = router;