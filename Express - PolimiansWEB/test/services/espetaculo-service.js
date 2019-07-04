const EspetaculoModel = require ("../models/espetaculo-model")

let espetaculos = [];

let id = 0;

class EspetaculoService{
    
    static register(data){
        let espetaculo = new EspetaculoModel(id++, data.patrocinadores, data.titulo, data.sinopse, 
                                            data.orcamento, data.datas, data.endereco,
                                             data.horario, data.emCartaz, data.comentarios, data.avaliacoes);
        espetaculos.push(espetaculo);
        return (espetaculos);
    }

    static list(){
        return espetaculos;
    }

    static update(id, data){
        for (let es of espetaculos) {
            if(es.id == id){
                es.patrocinadores = data.patrocinadores;
                es.titulo = data.titulo;
                es.sinopse = data.sinopse;
                es.orcamento = data.orcamento;
                es.datas = data.datas
                es.endereco = data.endereco;
                es.horario = data.horario;
                es.emCartaz = data.emCartaz;
                es.comentarios = data.comentarios;
                es.avaliacoes = data.avaliacoes;
                return es;
            }
        }
        return null;
    }

    static delete(id){
        
        for (let i = 0; i < espetaculos.length; i++) {
            if (espetaculos[i].id == id) {
                espetaculos.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    static retrieve(id) {

        for (let i = 0; i < espetaculos.length; i++) {
            if (espetaculos[i].id == id) {
                return espetaculos[i];
            }
        }
        return {};
    }
}

module.exports = EspetaculoService;