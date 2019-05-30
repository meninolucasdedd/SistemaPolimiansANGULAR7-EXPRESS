const EspectadorModel = require("../models/espectador-model");

let espectadores = [];

let id = 0;

class EspectadorService {
    
    static register(data){
        let espec = new EspectadorModel(id++, data.nome, data.cpf, data.endereco, data.senha);
        espectadores.push(espec);
        return (espectadores);
    }

    static list(){
        return espectadores;
    }

    static update(id, data){
        for (let es of espectadores) {
            if(es.id == id){
                es.nome = data.nome;
                es.cpf = data.cpf;
                es.endereco = data.endereco;
                es.senha = data.senha;
                return es;
            }
        }
        return null;
    }

    static delete(id){
        
        for (let i = 0; i < espectadores.length; i++) {
            if (espectadores[i].id == id) {
                espectadores.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    static retrieve(id) {

        for (let i = 0; i < espectadores.length; i++) {
            if (espectadores[i].id == id) {
                return espectadores[i];
            }
        }
        return {};
    }


}

module.exports = EspectadorService;