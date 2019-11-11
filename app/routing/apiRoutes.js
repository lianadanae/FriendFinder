//Require Data from friends.js

var friends = require('../data/friends.js');

//Routing
module.exports = function(app) {

//API Get Requests
app.get('/api/friends', function(req, res){
    res.json(friendsArray);
		console.log("friendsData[0].scores[0]: " + friendsData[0].scores[0]);
});

//API Post Requests
// app.post('/api/friends', function(req, res){
//     var userInput = req.body;
//     var userResponses = userInput.scores;
//     var totalDifference = 0;
//     var characterMatch = {
//         name: "",
//         photo: "",
//         friendDifference: 1000
//     };
// for (var i = 0; i < friends.length; i++)

// });
 };

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

// Example:

// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

// Total Difference: 2 + 1 + 2 = 5


// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.