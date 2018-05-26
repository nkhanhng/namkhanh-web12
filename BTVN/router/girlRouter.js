const express = require('express');
const path = require('path');
const GirlModel = require('../models/girls.model');

let Router = express.Router();

Router.get('/:id',function(req,res){
    GirlModel.findById(req.params.id,function(err,profileFound){
        if(err) throw err;
        else{
            console.log("profile found");
        }
        res.render('profile',{
            profile: profileFound
        })
    })
})

module.exports = Router;