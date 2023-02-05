const mongoose=require('mongoose');

const postCodeSchema= mongoose.Schema({
    state:{
        type:String,
        require:true
    },
    postcode:{
        type:String,
        require:true
    },
});

const PostCode=mongoose.model('PostCode',postCodeSchema);

module.exports= PostCode;