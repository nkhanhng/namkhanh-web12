const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: { type: String, default: ''},
    createdBy: { type: String, default: null}    
},{
    timestamps: {createdAt:'createdAt'}
})

const ImageModel = new Schema({
    imageUrl: { type: String,required: true},

    title:{ type: String,  default:''},

    description:{type: String, default: '' },

    createdBy:{type: String, default: null},

    view:{ type: Number, default: 0},
    
    like: {type: Number, default: 0},
    
    active:{ type:Boolean, default:true},

    comment: { type: [CommentSchema], default: []}
},
{
    timestamps: {createdAt: "createdAt"}
})

module.exports = mongoose.model("Image", ImageModel);