const GrupoCultural = require("../models/grupoCultural-model");

let grupos = [];

let id = 0;

class GrupoCulturalService{

    static register(data){
        let grupo = new GrupoCultural(id++, data.nome, data.categoria, data.endereco, data.cnpj,
                                      data.mei, data.qtdParticipantes, data.workshop, 
                                      data.espetaculosRealizados, data.espetaculosEmCartaz);
        grupos.push(grupo);
        return (grupo);
    }

    static list(){
        return grupos;
    }

    static update(id, data){
        for (let grup of grupos) {
            if(grup.id == id){
                grup.nome = data.nome;
                grup.categoria = data.categoria;
                grup.endereco = data.endereco;
                grup.cnpj = data.cnpj;
                grup.mei = data.mei
                grup.qtdParticipantes = data.qtdParticipantes;
                grup.workshop = data.workshop;
                grup.espetaculosRealizados = data.espetaculosRealizados;
                grup.espetaculosEmCartaz = data.espetaculosEmCartaz;
                return grup;
            }
        }
        return null;
    }

    static delete(id){
        
        for (let i = 0; i < grupos.length; i++) {
            if (grupos[i].id == id) {
                grupos.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    static retrieve(id) {

        for (let i = 0; i < grupos.length; i++) {
            if (grupos[i].id == id) {
                return grupos[i];
            }
        }
        return {};
    }

}

module.exports = GrupoCulturalService;