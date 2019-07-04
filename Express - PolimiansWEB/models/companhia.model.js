var mongoose = require('mongoose');
var Endereco = require('./endereco.model')

var companhiaSchema = mongoose.Schema(

    {
        usuarioId: {
            type: mongoose.Schema.ObjectId,
            ref: 'usuarios'
        },

        categoria: {
            type: String
        },
        endereco: Endereco,
        cnpj: {
            type: String
        },
        mei: {
            type: String
        },
        qtdParticipantes: {
            type: Number
        },

        workshops: [{
            type: mongoose.Schema.ObjectId,
            ref: 'workshops'
        }],

        espetaculosRealizados: [{
            type: mongoose.Schema.ObjectId,
            ref: 'espetaculos'
        }],
        espetaculosEmCartaz: [{
            type: mongoose.Schema.ObjectId,
            ref: 'espetaculos'
        }]
    }
);

var Companhia = mongoose.model('companhias', companhiaSchema);
module.exports = Companhia;