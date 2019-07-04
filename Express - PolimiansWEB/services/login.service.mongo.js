const UsuarioModel = require('../models/usuario.model');
const auth = require('./auth.service');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


class LoginService {

    static register(req, res) {
        let rcvepec = req.body;
        rcvepec.password = bcrypt.hashSync(rcvepec.senha, 10)
        UsuarioModel.create(rcvepec).then(
            (user) => {
                let token = jwt.sign({ user: user }, 'secret');
                res.status(201).json({
                    '_id': user._id,
                    'nome': user.nome,
                    'email': user.email,
                    'espectadorId': user.espectadorId,
                    'companhiaId': user.companhiaId,
                    'token': token
                });
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }

    static login(req, res) {
        let loginForm = req.body;
        UsuarioModel.findOne({ 'email': loginForm.email }).then(
            (user) => {
                if (loginForm.senha === user.senha) {
                    //LOGIN ENCONTRADO E CHAVES BATEM (CRIAR TOKEN)
                    let token = jwt.sign({ user: user }, 'secret');
                    res.status(201).json({
                        '_id': user._id,
                        'nome': user.nome,
                        'email': user.email,
                        'espectadorId': user.espectadorId,
                        'companhiaId': user.companhiaId,
                        'token': token
                    });
                } else {
                    //LOGIN ENCONTRADO MAS CHAVES NÃO BATEM
                    res.status(201).json(null);
                }
            }
        ).then(undefined,
            (err) => {
                //ERRO EM CASO DE LOGIN NÃO ENCONTRADO
                res.status(201).json(null);
            }).catch(
            (error) => {
                res.status(500).json(error);
            }
        );

    }
    static update(req, res) {
        if (!auth.check(req.headers.authorization, res)) return;
        UsuarioModel.findByIdAndUpdate(req.params.id, req.body, { 'new': true }).then(
            (user) => {
                res.status(201).json(user);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }

}

module.exports = LoginService;