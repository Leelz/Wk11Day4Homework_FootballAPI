var albums = null;

var makeRequest = function (url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();
}

var handleJSON = function(albums){
  var input = document.querySelector('#search-query');
  var inputValue = input.value;
  var container = document.querySelector('#albums');
  for (album of albums) {
    var albumName = document.createElement('p')
    albumName.innerText = album.name;
    container.appendChild(albumName)
  }
}

// var searchcontent = function () {

// }

var requestComplete = function () {
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  var albums = JSON.parse(jsonString);
  console.log(albums);
  albums = albums.albums.items;
  console.log(albums);
  handleJSON(albums);
};

var handleButtonClick = function (event) {
  var buttonResult = document.querySelector('#search-query');
  var searchResult = document.querySelector('#albums')
  buttonResult.innerText = 'Woah! I totally just got clicked ' + 
  counter + ' times';
  console.log(event);
}

var app = function(){
  var url = 'https://api.spotify.com/v1/search?q=christmas&type=album';
  makeRequest(url, requestComplete);
}

var setAlbumDisplay = function(album) {
  var info = document.querySelector('#albums');
  info.innerText = "";
  var name = document.createElement("p");
  info.appendChild(name);
  name.innerText = "Name: " + album.name;

  // save(country);
  var button = document.querySelector('button'); 
  button.onclick = handleButtonClick;
}


  window.onload = app;