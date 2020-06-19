const express = require('express');
const router = express.Router();
const DBLP = require('dblp-json/dblp');
const dblp = new DBLP();
const Article = require('../../model/Article');

async function extractInfo() {
    const tiago_json = await dblp.getByPID("https://dblp.uni-trier.de/pers/xx/e/E:Afshin_Ameri.xml");
    printJS(tiago_json.getJSON());
  }

extractInfo();

router.get('/getAll',(req,res) =>{
    Article.find().then((articles) => {
        res.json(articles);
        // expected output: "Success!"
      });
    }
);


async function extractInfo() {
    const tiago_json = await dblp.getByName('Tiago', 'Brito');
    const json = tiago_json.getRawJSON;
    return(tiago_json.getRawJSON(), null, 2);
  }

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