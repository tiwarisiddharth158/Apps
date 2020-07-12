var express = require('express');
var request = require('request');
var app = express();
app.get("/results",function(req,res){
	request('http://www.omdbapi.com/?s=guardians&apikey=thewdb',function(error,response,body){
		if(!error&&response.statusCode == 200){
			var results = JSON.parse(body)
			res.send(results["Search"][0]["Title"]);
		}
	})
})
app.listen(process.env.PORT||3000,process.env.IP,function(req,res){
	console.log("Movies DataBase Started");
})
