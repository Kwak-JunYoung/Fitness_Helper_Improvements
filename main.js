var http = require("http"); // 서버 만드는 모듈 불러오기
var fs = require("fs");
var number = 0;
var app = http.createServer(function (request, response) {
  var url = request.url;
  if (request.url == "/") {
    url = "/MainEnter.html"; // 실행할 url
  }
  if (request.url == "/favicon.ico") {
    return response.writeHead(404);
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
});
app.listen(8080); // 실행할 port

var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "a123456789",
  database: "fitness",
});
con.connect(); // DB 접속
var addQuery = "UPDATE `user` SET `num` = `num`+1";
var removeQuery = "UPDATE `user` SET `num` = `num`-1";
var getQuery = "SELECT `num` FROM`user` WHERE `_user`=0";
con.query(getQuery, function (err, results) {
  // testQuery 실행
  if (err) {
    console.log(err);
  }
  console.log(results[0]["num"]);
  number = results[0]["num"];
  console.log(number);
});
con.end(); // DB 접속 종료
