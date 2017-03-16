var express = require("express");
if (typeof localStorage === "undefined" || localStorage === null){
	var localStorage = require("node-localstorage").LocalStorage;
	localStorage = new localStorage("./localStorage");
}

var app = express();

var number = 0;

app.get("/new/*?", function(req, res){
	var regex = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/;
	var url = req.params[0].match(regex)[0];
	localStorage.setItem(number, url);
	n++;
	res.send("short url " + 
});
app.all("*", function(req, res){
	res.send("/:url");
});
app.listen(process.env.PORT || 3003, function(){
	console.log("listening");
});
