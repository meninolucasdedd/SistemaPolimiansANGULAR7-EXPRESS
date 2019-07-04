const espectadorModel = require("../models/espectador.model");
const auth = require('./auth.service');


class EspectadorService {

    static register(req, res) {
        if (!auth.check(req.headers.authorization, res)) return;
        espectadorModel.create(req.body).then(
            (espec) => {
                res.status(201).json(espec);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }

    static list(req, res) {
        espectadorModel.find().populate('usuarios').then(
            (espec) => {
                res.status(201).json(espec);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }


    static update(req, res) {
        if (!auth.check(req.headers.authorization, res)) return;
        espectadorModel.findByIdAndUpdate(req.params.id, req.body, { 'new': true }).then(
            (espec) => {
                res.status(201).json(espec);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }

    static delete(req, res) {
        if (!auth.check(req.headers.authorization, res)) return;
        espectadorModel.findByIdAndRemove(req.params.id).then(
            (espec) => {
                res.status(201).json(espec);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }

    static retrieve(req, res) {
        espectadorModel.findById(req.params.id).populate('usuarios').then(
            (espec) => {
                res.status(201).json(espec);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }



}

module.exports = EspectadorService;