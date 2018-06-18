const express = require('express');
const Router = express.Router();

const ImageController = require('./controller')

Router.get('/',(req,res)=>{
    ImageController
        .listImageByPage(req.query.page || 1)
        .then(images => res.send({ success: 1, images}))
        .catch(err =>{
            console.log(err);
            res.status(500).send({success:0, errMsg: err})
        });
})

Router.post('/',(req,res)=>{
    ImageController
        .createImage(req.body)
        .then(imageCreated => res.status(201).send({success:1, image: image}))
        .catch(err =>{
            console.log(err);
            res.status(500).send({success:0, errMsg: err})
        });
})

module.exports = Router;