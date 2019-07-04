const companhiaModel = require("../models/companhia.model");
const auth = require('./auth.service');


class CompanhiaService {

    static register(req, res) {
        if (!auth.check(req.headers.authorization, res)) return;
        companhiaModel.create(req.body).then(
            (comp) => {
                res.status(201).json(comp);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }

    static list(req, res) {
        companhiaModel.find().populate('usuarios').then(
            (comp) => {
                res.status(201).json(comp);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }


    static update(req, res) {
        if (!auth.check(req.headers.authorization, res)) return;
        companhiaModel.findByIdAndUpdate(req.params.id, req.body, { 'new': true }).then(
            (comp) => {
                res.status(201).json(comp);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }

    static delete(req, res) {
        if (!auth.check(req.headers.authorization, res)) return;
        companhiaModel.findByIdAndRemove(req.params.id).then(
            (comp) => {
                res.status(201).json(comp);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }

    static retrieve(req, res) {
        companhiaModel.findById(req.params.id).populate('usuarios').then(
            (comp) => {
                res.status(201).json(comp);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }

}

module.exports = CompanhiaService;