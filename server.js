var fs = require('fs')
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var batData = require("./batmanData.json")

var app = express();

app.engine('handlebars', exphbs.engine({
	defaultLayout: false
}))

app.use(express.json())

app.set('view engine', 'handlebars')

app.use(express.static('public'));


app.get('/', function(req, res, next) {
	res.status(200).render('batPage', {
		batmanData: batData
	})
});

app.post('/addBatman', function(req, res, next) {
	if(req.body && req.body.name && req.body.photourl) {
		var newBatman = {
			name: req.body.name,
			photourl: req.body.photourl
		}
		batData.push(newBatman)

		fs.writeFile(
			'./batmanData.json',
			JSON.stringify(batData, null, 2),
			function (err) {
				if(err) {
					res.status(500).send("Error writing")
				} else {
					res.status(200).send("Batman added")
				}
			}
		)
	} else {
		res.status(400).send("Request didn't have a body with a url/caption")
	}
})

app.get('/rating', function(req, res, next) {
	res.status(200).render('batRating', {
		batmanData: batData
	})
});
	
app.get('*', function(req,res,next) {
	res.status(404).render('404', {
		page: req.url
	})
})

app.listen(5000, function () {
  console.log("== Server is listening on port", 5000);
});