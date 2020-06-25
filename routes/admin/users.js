const express = require('express');
const router = express.Router();
const User = require('../../model/User');

router.post('/get',function(res){
    server.get('/userlist' , function (req , res) {
        User.find({}).then(function (users) {
        res.send(users);
        });
       });
});

module.exports  =router;