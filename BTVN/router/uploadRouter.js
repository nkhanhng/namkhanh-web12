const express = require('express');
const path = require('path');
const GirlModel = require('../models/girls.model');

let Router = express.Router();

Router.get('/',function(req,res){
    res.render('upload');
})

Router.post('/',function(req,res){
    let newGirl = {
        name: req.body.name,
        imageUrl: req.body.url,
        description: req.body.des,
        address: req.body.address
    };

    GirlModel.create(newGirl,(err,girlCreated)=>{
        if(err) console.log(err)
        else console.log("Added");

        res.redirect(`/`);
    })
})

module.exports = Router;