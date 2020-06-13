const functions = require('firebase-functions');
const express = require('express');
const app = express();





app.get('/getposts',(request,response)=>{
    response.send("HELLO");
})


exports.app = functions.https.onRequest(app);