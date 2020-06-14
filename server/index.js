const express = require('express');
const app = express();
var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://metepeter:Petro$0013@board-cluster-2nysk.azure.mongodb.net/board?retryWrites=true&w=majority";

const port =3000;

MongoClient.connect(uri, function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
//const userscollection = dbClient.db("board").collection("users");


//MiddleWare

app.get('/getposts',(request,response)=>{
    response.send("HELLO");
})

app.get('/addAdmin',(request,response)=>{
    addAddmin();
    response.send("Admin Has been added");
})


function addAddmin(){
    var admin = {name:"admin," , privilege :"admin" , password:"adminadmin"};
    dbClient.connect(err => {
        userscollection.insert(admin);
        dbClient.close();
      });
}

app.post('/auth', function(request, response) {
	//var username = request.body.username;
//	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				//request.session.loggedin = true;
				//request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});


app.listen(port,() =>console.log('Server Listening at port ${port}'));
