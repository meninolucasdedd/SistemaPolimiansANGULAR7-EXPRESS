const UserModel = require('../models/usuario.model');
const auth = require('./auth.service');

class UserService{

    static list(req,res){
        if(!auth.check(req.headers.authorization,res)) return;
        UserModel.find().then(
            (users)=>{
                res.status(201).json(users);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );    
    }

    static update(req,res){
        if(!auth.check(req.headers.authorization,res)) return;
        UserModel.findByIdAndUpdate(req.params.id, req.body, {'new':true}).then(
            (user)=>{
                res.status(201).json(user);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static delete(req,res){
        if(!auth.check(req.headers.authorization,res)) return;
        UserModel.findByIdAndRemove(req.params.id).then(
            (user)=>{
                res.status(201).json(user);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static retrieve(req,res){
        if(!auth.check(req.headers.authorization,res)) return;
        UserModel.findById(req.params.id).then(
            (user)=>{
                res.status(201).json(user);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static retrieveByLogin(req,res){
        if(!auth.check(req.headers.authorization,res)) return;
        UserModel.find({'login':req.params.login}).then(
            (user)=>{
                res.status(201).json(user);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

}

module.exports = UserService;