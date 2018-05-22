const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GirlSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String
    },
    description:{
        type: String
    },
    address:{
        type: String
    }
});

module.exports = mongoose.model("Girls",GirlSchema);