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

    // try {
    //     QuestionModel.findById(questionId)
    //         .then(function(question){
    //             question[vote] += 1;
    //         })
    //         .then(function(question){
                    
    //         })
    // } catch (error) {
        
    // }



    QuestionModel.findById(questionId,function(err,question){
        if(err) console.log(err)
        
        if(vote == 'yes'){
            question.yes += 1;
        } else if(vote =='no'){
            question.no += 1;
        }
        // question.[vote] += 1
       question.save(function(err){
            if(err) throw err;

            console.log('Updated');
        })

        res.redirect(`/question/${question._id}`);
    })

    // if(vote == 'yes'){
    //     QuestionModel.findByIdAndUpdate(questionId,{$inc:{yes:1}},function(err,questionFound){
    //         if(err) console.log(err)
    //         else res.redirect(`/question/${questionFound._id}`);
    //     })
    // }else{
    //     QuestionModel.findByIdAndUpdate(questionId,{$inc:{no:1}},function(err,questionFound){
    //         if(err) console.log(err)
    //         else res.redirect(`/question/${questionFound._id}`);
    //     })
    // }
   
})

Router.get('/:id',function(req,res){
    let questionId = req.params.id;
    QuestionModel.findById(questionId,function(err,question){
        if(err) console.log(err)
        else{
            console.log("question found");
        }

        //remove an document
        // question.remove((function(err){
        //     if(err) console.log(err);
        // }))
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