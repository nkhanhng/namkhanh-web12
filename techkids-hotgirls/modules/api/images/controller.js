const ImageModel = require('./model');

//Create
const createImage = ({ imageUrl, title, description, createdBy}) => new Promise((resolve, reject) =>{
    ImageModel
            .create({ imageUrl, title, description, createdBy })
            .then(imageCreated => resolve(imageCreated._id))
            .catch(err => reject(err))
});

//Update
const updateImage = (imageId,{ imageUrl,title, description }) => new Promise((resolve,reject)=>{
    ImageModel
            .findByIdAndUpdate(imageId,{ imageUrl,title,description})
            .then(imageUpdated => resolve(imageUpdated._id))
            .catch(err => reject(err))
})

//Read
const listAllImage = () => new Promise((resolve,reject)=> {
    ImageModel
            .find({active: true})
            .then(images => resolve(images))
            .catch(err => reject(err));
})

//by page
const listImageByPage = (pageNumber) => new Promise((resolve,reject)=> {
    ImageModel
            .find({active: true})
            //chia trang
            .sort({ createdAt: -1 })
            .skip((pageNumber - 1)*25)
            .limit(25)
            .exec()
            .then(images => resolve(images))
            .catch(err => reject(err));
})

//Delete
const DeleteImage = (imageId) => new Promise((resolve,reject)=> {
    ImageModel
            .findByIdAndUpdate({_id:imageId},{active:false})
            .then(imageDeleted => resolve(images))
            .catch(err => reject(err));
})



// TODO
    //Comment
    // View
    //Like


module.exports ={
    createImage,
    updateImage,
    DeleteImage,
    listImageByPage
}