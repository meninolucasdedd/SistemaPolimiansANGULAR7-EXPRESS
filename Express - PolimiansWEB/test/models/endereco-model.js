class EnderecoModel {
    constructor(logradouro, numero, bairro, cidade, estado, longitude, latitude){
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.longitude = longitude;
        this.latitude = latitude;
    }
}
module.exports = EnderecoModel;