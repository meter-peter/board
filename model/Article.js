const mongoose = require('mongoose');
const Author = require('./Author')
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    type :{
        type :String , 
        required:true
    },
    title:{
        type : String ,
        required:true
    },
    year:{
        type:Number ,
        required :true
    
    },
    key:{
        type:String,
        required:false
    },
    authors:{
        type:[{ type: Schema.Types.ObjectId, ref: Author }],
    required:false
    },
    desc:{
        type:String ,
        required:true
    }
});

module.exports = Article = mongoose.model('posts',ArticleSchema);