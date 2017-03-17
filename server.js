var express = require("express");
if (typeof localStorage === "undefined" || localStorage === null){
	var LocalStorage = require("node-localstorage").LocalStorage;
	localStorage = new LocalStorage("./localStorage");
}

var app = express();

var number = 0;

app.get("/new/*?", function(req, res){
	var regex = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/;
	var url = req.params[0].match(regex)[0];
	localStorage.setItem(number, url);
	res.send("short url https://short-url-fcc-mnemosdev.herokuapp.com/" + number);
	// res.send("visit http://192.168.1.127:3003/" + number);
	number++;
	console.log(localStorage);
	console.log(number, url);
});
app.get("/:shorturl", function(req, res){
	var url = req.params.shorturl;
	var oldurl = localStorage.getItem(url) || "404";
	res.redirect(oldurl);
	console.log(url, oldurl);
});
app.all("*", function(req, res){
	res.send("/new/:url");
});
app.listen(process.env.PORT || 3003, function(){
	console.log("listening");
});
