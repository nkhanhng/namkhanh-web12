const express = require('express');
const Router = express.Router();
const AuthController = require('./controller')

Router.post('/login',(req,res) =>{
    AuthController.login(req.body)
                  .then(userInfo => {
                      console.log(userInfo);
                      try {
                        req.session.user = userInfo
                        res.send({success: 1, user: userInfo})
                      } catch (error) {
                          console.log(error)
                      }
                      
                  })
                  .catch(err => res.status(err.statusCode ? err.statusCode:500).send({success:0, err: err.err}))
})

module.exports = Router;