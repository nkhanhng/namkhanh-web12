const UserModel = require('../users/model');
const bcrypt = require('bcrypt');
const session = require('express-session')


const login = ({username, password}) => new Promise((resolve,reject)=>{
    UserModel.findOne({ username })
             .then((userFound)=>{
                if(!userFound || !userFound.password){
                    reject({
                        statusCode: 404,
                        err: "Wrong username"
                    });
                } else{
                    bcrypt.compare(password, userFound.password)
                          .then(compareResult => {
                              if(compareResult){
                                  resolve({ username: userFound.username, userId: userFound._id});
                              }else {
                                  reject({
                                      statusCode: 401,
                                      err: "Wrong password"
                                  })
                              }
                          })
                }
             })
             .catch((err)=>reject({
                 statusCode : 500,
                 err
             }))
})

module.exports = {
    login
}
// const logout = session.destroy();