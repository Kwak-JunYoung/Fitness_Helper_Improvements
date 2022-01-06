var http = require("http"); // 서버 만드는 모듈 불러오기
var fs = require("fs");

function navbarTemplate(navbarContents) {
  var bars = '<nav class="navbar navbar-expand-lg navbar-light bg-light">';
  bars = bars + `<div class="threeButtons">`;

  for (let i = 0; i < navbarContents.length; i++) {
    bars = bars + `<a href="${navbarContents[i]}.html"><button type="button" class="btn btn-info">${navbarContents[i]}</button></a>`;
  }
  bars = bars + `</div>`;
  bars = bars + `</nav>`;
  
  return bars;
}

var app = http.createServer(function(request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  if(pathname === '/') {  // Unable to differentiate between homepage and others
    if(queryData.id === undefined) { // if Home...
      
    }
    
  } else {
    response.writeHead(404);
    response.end('Not found');    
  }
  console.log(url.parse(_url, true));
});
app.listen(3000);


//   <a href="index.html"
//     ><button type="button" class="btn btn-info">Main</button></a
//   >
//   <a href="Workout_Status.html"
//     ><button type="button" class="btn btn-info">
//       Personal Routine
//     </button></a
//   >
//   <a href="Playlist.html"
//     ><button type="button" class="btn btn-info">Playlist</button></a
//   >
// </div>
// </nav>
