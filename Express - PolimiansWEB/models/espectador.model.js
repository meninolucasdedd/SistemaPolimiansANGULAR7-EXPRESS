var mongoose = require('mongoose');
var endereco = require('./endereco.model')

var espectadorSchema = mongoose.Schema(
    {
        usuarioId: {
            type: mongoose.Schema.ObjectId,
            ref: 'usuarios'
        },
        cpf: {
            type: String,
            unique: true
        },
        endereco: endereco,

        senha: {
            type: String
        },
    }
);
var Espectador = mongoose.model('espectadores', espectadorSchema);

module.exports = Espectador;