const mongoose = require('mongoose');
const Author = require('./Author');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name :{
        type :String , 
        required:true
    },
    username:{
        type : String ,
        required:true
    },
    email:{
        type:String ,
        required :true
    
    },
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:false

    }
});

module.exports = User = mongoose.model('users',UserSchema);