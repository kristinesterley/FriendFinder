// ===============================================================================
// LOAD DATA
// We are linking our routes to a our hard coded data array
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Request
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // The form data is compared to the array of objects stored in the friends.js file
  // The object with the best match is returned for display
  // and the JSON is pushed to the JavaScript array

  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know 
    var newPerson = req.body;
    var results = [];
  

    for (var i=0; i<friendsData.length;i++){
      var score = 0;
      for (var j=0; j<10; j++){
        score = score + Math.abs(newPerson.scores[j] - friendsData[i].scores[j]);
      } //end for j
      var comparisonResult = {
        comp: score,
        name: friendsData[i].name,
        photo: friendsData[i].photo
      }
      results.push(comparisonResult);

      results.sort(function(a,b){
      return parseInt(a.comp)-parseInt(b.comp);
      });
    }//end for i

    friendsData.push(req.body);
    res.json(results[0]);
  
  });

};