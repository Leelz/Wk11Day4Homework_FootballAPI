var app = function(){
  var url = 'http://api.football-data.org/v1/competitions/426/leagueTable';
  makeRequest(url, requestComplete);
}

// var bindEvents = function() {
//   var searchQuery = document.getElementById('search-query');
//   var competitionsDiv = document.getElementById('compList');

//   searchQuery.onkeyup = function() {
//   var jsonString = this.responseText;
//   var competitions = JSON.parse(jsonString);
//     competitionsDiv.innerHTML = '';
//     var url = 'http://api.football-data.org/v1/competitions/426/leagueTable'
//     makeRequest("GET", url, requestComplete);
//   }
// }

var makeRequest = function (url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();
}

var display = function(teams){
  var container = document.querySelector('#premLeague');
  console.log(teams);
  teams.forEach( function(team) {
    
    var teamName = document.createElement('p')
    teamName.innerText = team.teamName;
    container.appendChild(teamName)

    
  });
}

var requestComplete = function () {
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  var league = JSON.parse(jsonString);
  teams = league.standing;
  display(teams);
};

  window.onload = app;