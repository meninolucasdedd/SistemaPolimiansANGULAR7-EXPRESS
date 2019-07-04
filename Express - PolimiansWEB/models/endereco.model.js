var mongoose = require('mongoose');


var enderecoSchema = mongoose.Schema(
    {
        logradouro: {
            type: String
        },
        numero: {
            type: Number,
        },
        bairro: {
            type: String
        },
        cidade: {
            type: String
        },
        estado: {
            type: String
        },
        longitude: {
            type: String
        },
        latitude: {
            type: String
        }
    }
);

module.exports = enderecoSchema;