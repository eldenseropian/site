var express = require('express');

var app = module.exports = express();
server = require('http').createServer(app);

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({src: __dirname + '/public'}));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
  app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.configure('production', function() {
  app.use(express.errorHandler());
});

app.get('/', function(req, res) {
  res.render('index.jade', {title: 'Lily Seropian: Home'});
});

app.post('/', function(req, res) {
  console.log('posted');
  res.redirect('/pdfs/Seropian Resume.pdf');
});

var port_number = server.listen(process.env.PORT || 3000);
var listening_app = app.listen(port_number);

console.log('Express server listening on port %d in %s mode',
    listening_app.address().port, app.settings.env);
