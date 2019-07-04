var mongoose = require('mongoose');
var endereco = require('./endereco.model')

var espetaculoSchema = mongoose.Schema(

    {
        companhiaId: {
            type: mongoose.Schema.ObjectId,
            ref: 'companhias'
        },

        patrocinador: {
            type: String
        },
        titulo: {
            type: String
        },

        sinopse: {
            type: String
        },
        orcamento: {
            type: Number
        },
        horario: {
            type: String
        },
        comentarios: {
            type: String
        },
        avaliacaoes: {
            type: Number
        },
        descricao: String,
        categoria: String,
        qtdParticipantes: String,
        valorInscricao: Number,
        datas: {
            type: String
        },
        endereco: endereco,
        emCartaz: {
            type: Boolean
        }

    }
);
var Espetaculo = mongoose.model('espetaculos', espetaculoSchema);
module.exports = Espetaculo;