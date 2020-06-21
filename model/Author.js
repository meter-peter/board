const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name :{
        type :String , 
        required:true
    },
    lastname:{
        type : String ,
        required:true
    },
    orcid:{
        type:String ,
        required :false
    
    },
    personal:{
        type:String ,
        required :false
    
    }
    ,
    quality:{
        type:String ,
        required :true
    
    }
});

module.exports = Author = mongoose.model('authors',AuthorSchema);