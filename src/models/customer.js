const mongoose=require('mongoose');

const customerSchema= mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    postcode_id:{
        type:String,
        require:true
    },
});

const Customer=mongoose.model('Customer',customerSchema);

module.exports= Customer;