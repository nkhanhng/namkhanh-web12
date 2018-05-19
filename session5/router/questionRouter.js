const express = require('express');
const fs = require('fs');
const path = require('path');
const QuestionModel = require('../models/question.model');

let Router = express.Router();

//middleware
// Router.use(function(req,res,next){
//     res.send("hello");
// })

Router.get('/:id/:vote', function(req,res){
    let questionId = req.params.id; 
    let vote = req.params.vote;
    QuestionModel.findById(questionId,function(err,question){
        if(err) console.log(err)
        
        if(vote == 'yes'){
            question.yes += 1;
        } else if(vote =='no'){
            question.no += 1;
        }

        question.save(function(err){
            if(err) throw err;

            console.log('Updated');
        })

        res.redirect(`/`);
    })

   
})

Router.get('/:id',function(req,res){
    let questionId = req.params.id;
    QuestionModel.findById(questionId,function(err,question){
        if(err) console.log(err)
        else{
            console.log("question found");
        }

        res.render("question", {
            question: question,
        })
    })

    
})

// Router.post('/:id', function(req,res){
//     let questionId = req.params.id;
//     let questionList = require('../questionList.json');
//     let vote = req.body.vote;

//     questionList[questionId][vote] += 1;
    
//     fs.writeFileSync('../questionList.json',JSON.stringify(questionList),'utf-8');    
// })

module.exports = Router;