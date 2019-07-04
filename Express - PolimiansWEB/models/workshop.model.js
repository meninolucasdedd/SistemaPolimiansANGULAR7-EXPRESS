var mongoose = require('mongoose');
var endereco = require('./endereco.model')

var workshopSchema = mongoose.Schema(

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
        qtdParticipantes: {
            type: Number
        },
        material: {
            type: String
        },

        descricao: {
            type: String
        },
        categoria: {
            type: String
        },
        participantes: [{
            nome: String
        }],
        valorInscricao: {
            type: Number
        },
        datas: {
            type: String
        },
        endereco: endereco,

    }
);
var workshop = mongoose.model('workshops', workshopSchema);
module.exports = workshop;