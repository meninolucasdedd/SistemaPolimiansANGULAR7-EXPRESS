const Workshop = require("../models/workshop-model");

let workshops = [];

let id = 0;

class WorkshopService {

    static register(data) {
        let work = new Workshop(id++, data.titulo, data.grupoCultural, data.descricao,
            data.categoria, data.participantes, data.valorInscricao,
            data.datas, data.endereco);
        workshops.push(work);
        return (workshops);
    }

    static list() {
        return workshops;
    }

    static update(id, data) {
        for (let work of workshops) {
            if (work.id == id) {
                work.id = data.id;
                work.titulo = data.titulo;
                work.grupoCultural = data.grupoCultural;
                work.descricao = data.descricao;
                work.categoria = data.categoria;
                work.participantes = data.participantes;
                work.valorInscricao = data.valorInscricao;
                work.datas = data.datas;
                work.endereco = data.endereco;

                return work;
            }
        }
        return null;
    }

    static delete(id) {

        for (let i = 0; i < workshops.length; i++) {
            if (workshops[i].id == id) {
                workshops.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    static retrieve(id) {

        for (let i = 0; i < workshops.length; i++) {
            if (workshops[i].id == id) {
                return workshops[i];
            }
        }
        return {};
    }

}

module.exports = WorkshopService;