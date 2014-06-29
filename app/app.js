var express		= require('express')
var app 		= express();
var bodyParser 	= require('body-parser');
var mongoose 	= require('mongoose');
var routes		= require('./routes');
var api 		= require('./api');
var seeders		= require('./database/seeders');

mongoose.connect('mongodb://localhost/myapp', function(err) {
	if(err) throw err;
});

seeders();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.json()); 

app.use('/api', api(express));

routes(app);

app.use(express.static(__dirname + '/public'));

if(app.listen(3000)) console.log('App Listening on ' + '3000');
