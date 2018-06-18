const UserModel = require('./model');

//Create
const createUser = ({ username, password, name, email, avatar}) => new Promise((resolve, reject) =>{
    UserModel
            .create({ username, password, name, email, avatar })
            .then(userCreated => resolve(userCreated._id))
            .catch(err => reject(err))
});

//Update
const updateUser = (userId,{ password,email,name, avatar }) => new Promise((resolve,reject)=>{
    UserModel
            .findById(userId)
            .then(userFound =>{
                if(password) userFound.passwordChange = password
                if(email) userFound[email] = password
                if(name) userFound[name] = name
                if(avatar) userFound[avatar] = avatar

                return userFound.save();
            })
            .then(userUdated => resolve(userUdated._id))
            .catch(err => reject(err))
})

//Read
const getUserInfo = (userId) => new Promise((resolve,reject)=> {
    UserModel
            .findById(userId,"-password -active")
            .then(user => resolve(user))
            .catch(err => reject(err));
})



module.exports ={
    createUser,
    updateUser,
    getUserInfo
}