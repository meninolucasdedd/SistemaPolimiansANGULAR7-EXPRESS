const espetaculoModel = require("../models/espetaculo.model");
const auth = require('./auth.service');


class EspetaculoService {

    static register(req, res) {
        if (!auth.check(req.headers.authorization, res)) return;
        espetaculoModel.create(req.body).then(
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
        espetaculoModel.find().then(
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
        espetaculoModel.findByIdAndUpdate(req.params.id, req.body, { 'new': true }).then(
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
        espetaculoModel.findByIdAndRemove(req.params.id).then(
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
        espetaculoModel.findById(req.params.id).then(
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

module.exports = EspetaculoService;