const express = require('express');
const Router = express.Router();

const UserController = require('./controller')

Router.get('/:id',(req,res)=>{
    UserController
        .getUserInfo(req.params.id)
        .then(user => res.send({ success: 1, user:user}))
        .catch(err =>{
            console.log(err);
            res.status(500).send({success:0, errMsg: err})
        });
})

Router.post('/',(req,res)=>{
    UserController
        .createUser(req.body)
        .then(userCreated => res.status(201).send({success:1, user: userCreated}))
        .catch(err =>{
            res.status(500).send({success:0, errMsg: err})
        });
})

Router.put('/:id',(req,res)=>{
    UserController.updateUser(req.params.id,req.body)
                  .then(userUdated => res.status(201).send({success:1, user: userUdated}))
                  .catch(err => {
                    res.status(500).send({success:0, errMsg: err})
                 })
})

module.exports = Router;