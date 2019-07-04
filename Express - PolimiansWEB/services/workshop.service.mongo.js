const workshopModel = require("../models/workshop.model");
const auth = require('./auth.service');


class WorkshopService {

    static register(req, res) {
        if (!auth.check(req.headers.authorization, res)) return;
        workshopModel.create(req.body).then(
            (work) => {
                res.status(201).json(work);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }

    static list(req, res) {
        workshopModel.find().then(
            (work) => {
                res.status(201).json(work);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }


    static update(req, res) {
        if (!auth.check(req.headers.authorization, res)) return;
        workshopModel.findByIdAndUpdate(req.params.id, req.body, { 'new': true }).then(
            (work) => {
                res.status(201).json(work);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }

    static delete(req, res) {
        if (!auth.check(req.headers.authorization, res)) return;
        workshopModel.findByIdAndRemove(req.params.id).then(
            (work) => {
                res.status(201).json(work);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }

    static retrieve(req, res) {
        workshopModel.findById(req.params.id).then(
            (work) => {
                res.status(201).json(work);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }

}

module.exports = WorkshopService;