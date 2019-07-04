var jwt = require('jsonwebtoken');


module.exports.check = function (token, res) {
    if(token==null || token==undefined){
        res.status(401).json({
            title: 'Não Autorizado'
        })
        return false;
    } 
    if (!jwt.verify(token, 'secret')) {
        res.status(401).json({
            title: 'Não Autorizado'
        });
        return false;
    }return true;
}