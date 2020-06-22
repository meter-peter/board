const express = require('express');
const router = express.Router();
const DBLP = require('dblp-json/dblp');
const Author = require('../../model/Author');
const dblp = new DBLP();

router.get('/',(req,res) =>{
   Author.find().then((authors) => {
        res.json(authors);
        // expected output: "Success!"
      });
    }
);

router.put('/update',function(req,res){
    Article.findByIdAndUpdate(req.body._id,req.body,function(err,body){
      if(err){
        res.send(err);
  
      }
      res.send(body);
    });
  })

router.post('/', async (req, res) => {
   let {name,lastname,orcid,personal,quality} =req.body;
   Author.findOne({name:name})
   .catch(err=>{
       return res.send(err);
   })
   .then(user=>{
       if(user){
           return res.status(400).json({
               msg: "Author Already Exists"
           });
       }
   }).catch(err=>{
       return res.send(err)
   });
   let newAuthor = new Author({
       name,lastname,orcid,personal,quality
   });
   newAuthor.save().then(()=>{
       return res.status(201).json({
           success:true,
           msg:"Successfully added"
       })
   })
   
  });

module.exports = router;