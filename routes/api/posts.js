const express = require('express');
const router = express.Router();
const DBLP = require('dblp-json/dblp');
const dblp = new DBLP();
const Article = require('../../model/Article');

router.get('/',(req,res) =>{
    Article.find().then((articles) => {
        res.json(articles);
        // expected output: "Success!"
      });
    }
);


router.get('/:articleID',async (req,res)=>{
  const article = await Article.findById(
    req.params.articleId
  );
  res.send(article);

})

router.delete('/:articleId', async (req, res) => {
  const article = await Article.findById(
    req.params.articleId,
  );
 
  if (article) {
    await article.remove();
  }
 
  return res.send(article);
});

router.put('/update',function(req,res){
  Article.findByIdAndUpdate(req.body._id,req.body,function(err,body){
    if(err){
      res.send(err);

    }
    res.send(body);
  });
})

router.post('/', async (req, res) => {
  var newArticle = new Article(req.body);
  console.log(req.body);
  Article.findOne({title:newArticle.title})
  .catch(err=>{
      return res.send(err);
  })
  .then(article=>{
      if(article){
          return res.status(400).json({
              msg: "Article Already Exists"
          });
      }
  }).catch(err=>{
      return res.send(err)
  });
  
  newArticle.save().then(()=>{
      return res.status(201).json({
          success:true,
          msg:"Successfully added"
      })
  });
});




router.get('/getFromDBLPLINK',async (req, res, next) => {
  try {
    const tiago_json = await dblp.getByPID("homepages/d/MassimilianoDiPenta");
    res.json(tiago_json);
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e) 
  }
});
   
    

        // expected output: "Success!"
  



module.exports = router;