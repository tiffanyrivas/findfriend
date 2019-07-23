var friends = require("friends");

module.exports = function(app) {
  app.get("/api/friends", function(res) {
    res.json(friends);
  });


  app.post("/api/friends", function(res) {
    console.log(req.body.scores);

    var user = req.body;

    for(var i = 0; i < user.scores.length; i++) {

      user.scores[i] = parseInt(user.scores[i]);

    }

    var bffIndex = 0;
    var minDiff = 40;

    for(var i = 0; i < friends.length; i++) {
      var totDiff = 0;

      for(var j = 0; j < friends[i].scores.length; j++) {

        var difference = Math.abs(friends[i].scores[j]);
        totDiff += difference;
      }
    }

    friends.push(user);

    res.json(friends[bffIndex]);
  });
};