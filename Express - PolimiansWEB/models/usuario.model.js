var mongo = require('mongoose');

var UsuarioSchema = mongo.Schema(
    {
    nome:String,
    email:{type:String, unique:true},
    senha:String,
    espectadorId: {type: mongo.Schema.ObjectId, ref:'espectadores'},
    companhiaId: {type: mongo.Schema.ObjectId, ref:'companhias'},
    token:String
    }
)

var Usuario = mongo.model('usuarios', UsuarioSchema);

module.exports = Usuario;