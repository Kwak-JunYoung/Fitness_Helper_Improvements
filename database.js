var mysql = require("mysql");

var con = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "1111",
});
con.connect(); // DB 접속
var testQuery = "UPDATE `UserNum` SET `Number` = `Number`+1";
con.query(testQuery, function (err, results, fields) {
  // testQuery 실행
  if (err) {
    console.log(err);
  }
  console.log(results);
});
conn.end(); // DB 접속 종료
/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
const conn = {
  // mysql 접속 설정
  host: "localhost",
  port: "3306",
  user: "user",
  password: "1111",
  database: "monolithic",
};
var connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect(); // DB 접속
var testQuery = "UPDATE `UserNum` SET `Number` = `Number`+1";
//var testQuery = "INSERT INTO `user_num` (`username`,`password`) VALUES ('test','test');";
// update 테이블명 set 컬럼명 = 컬럼명+ 1

connection.query(testQuery, function (err, results, fields) {
  // testQuery 실행
  if (err) {
    console.log(err);
  }
  console.log(results);
});

testQuery = "SELECT * FROM MEMBERS";

connection.query(testQuery, function (err, results, fields) {
  // testQuery 실행
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end(); // DB 접속 종료
*/
