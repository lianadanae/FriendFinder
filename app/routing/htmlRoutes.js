// Dependencies
var path = require('path');


// Export HTML Routes
module.exports = function(app) {

  //HTML GET Requests 
  //Survey Page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  //Home Page
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
  });

};

