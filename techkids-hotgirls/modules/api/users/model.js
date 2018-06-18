const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const UserModel = new Schema({
    username: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    name: {type: String},
    email: { type: String, unique:true},
    avatar: {type: String, default:""},
    active: {type: Boolean, default: true}
});

UserModel.pre("save", function(next){
    if(this.passwordChange || !this.__v){
        const saltRounds = 10;
        const plainPassword = this.password || this.passwordChange;
        
        bcrypt.genSalt(saltRounds)
            .then(salt => bcrypt.hash(plainPassword,salt))
            .then(hashPassword => {
                this.password = hashPassword;
                next()
            })
            .catch(err => next(err));
    } else next();
})

module.exports = mongoose.model("User", UserModel);