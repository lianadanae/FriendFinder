//Load Data
console.log('API Route Connected Successfully');

var friends = require('../data/friends.js');

//Routing
module.exports = function(app) {

//API Get Requests
app.get('/api/friends', function(req, res){
    res.json(friends);
});

//API Post Requests
app.post('/api/friends', function(req, res){
    var userInput = req.body;
    var userResponses = userInput.scores;
    var totalDifference = 0;
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    };
for (var i = 0; i < friends.length; i++)

});
};