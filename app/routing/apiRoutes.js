// Require Data from friends.js
var friendsData = require('../data/friends.js');

// Routing
module.exports = function(app) {
  // API Get Requests
  app.get('/api/friends', function(req, res) {
    res.json(friendsData);
  });

  // API Post Requests
  app.post('/api/friends', function(req, res) {
    // Get the user input scores and compare with friendsArray
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: []
    };
    var scoresArray = [];
    for(var i=0; i < req.body.scores.length; i++){
      scoresArray.push( parseInt(req.body.scores[i]) )
    }
    newFriend.scores = scoresArray;

      // Cross check the new friend entry with the existing ones
      var scoreComparisionArray = [];
      for(var i=0; i < friendsData.length; i++){
  
        // Check each friend's scores and sum difference in points
        var currentComparison = 0;
        for(var j=0; j < newFriend.scores.length; j++){
          currentComparison += Math.abs( newFriend.scores[j] - friendsData[i].scores[j] );
        }
  
        // Push each comparison between friends to array
        scoreComparisionArray.push(currentComparison);
      }
  
      // Determine the best match using the postion of best match in the friendsData array
      var bestMatchPosition = 0; // assume its the first person to start
      for(var i=1; i < scoreComparisionArray.length; i++){
        
        // Lower number in comparison difference means better match
        if(scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]){
          bestMatchPosition = i;
        }
  
      }
  
      // ***NOTE*** If the 2 friends have the same comparison, then the NEWEST entry in the friendsData array is chosen
      var bestFriendMatch = friendsData[bestMatchPosition];
  
  
  
      // Reply with a JSON object of the best match
      res.json(bestFriendMatch);
  
  
  
      // Push the new friend to the friends data array for storage
      friendsData.push(newFriend);
  
    });
  
  }
    