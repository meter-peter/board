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



router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findById(req.params.userId );
  return res.send(user);
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