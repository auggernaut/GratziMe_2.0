// https://devcenter.heroku.com/articles/getting-started-with-nodejs

var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

var buildRedirectURL = function(req, path) {
  return path + (req._parsedUrl.search || '');
};

// Example of a redirect
// app.get('/redirect', function(req, res){
//   res.redirect(301, buildRedirectURL(req, '/'));
// });

app.use(express.static(__dirname + '/'));

app.get(/^\/.*/, function(req, res){
  res.sendfile('index.html', {root: './'});
});

var port = Number(process.env.PORT || 8888);

app.listen(port, function() {
  console.log("Listening on " + port);
});

