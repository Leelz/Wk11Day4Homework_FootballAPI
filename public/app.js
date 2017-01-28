var app = function(){
  var url = 'http://api.football-data.org/v1/competitions/';
  bindEvents();
  makeRequest("GET", url, requestComplete);
}

var bindEvents = function() {
  var searchQuery = document.getElementById('search-query');
  var competitionsDiv = document.getElementById('compList');

  searchQuery.onkeyup = function() {
  var jsonString = this.responseText;
  var competitions = JSON.parse(jsonString);
    competitionsDiv.innerHTML = '';
    var url = 'http://api.football-data.org/v1/competitions/' + competitions.id + '/leagueTable'
    makeRequest("GET", url, requestComplete);
  }
}

var makeRequest = function (method, url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();
}

var display = function(competitions){
  var container = document.getElementById('compList');

  for (competition of competitions) {
    var div = document.createElement('div');
    div.className = "competition";
    div.innerHTML = "<a href='https://www.google.co.uk/search?q= '>"  + competition.caption + "</a>";
    container.appendChild(div)
  }
}

var requestComplete = function () {
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  var competitions = JSON.parse(jsonString);
  // var competitionsList = competitions;
  // console.log(competitions)
  display(competitions);
};

  window.onload = app;