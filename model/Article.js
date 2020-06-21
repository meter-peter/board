const mongoose = require('mongoose');
const Author = require('./Author')
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
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
    authors:[{ type: Schema.Types.ObjectId, ref: 'Author' }]
});

module.exports = Article = mongoose.model('posts',ArticleSchema);