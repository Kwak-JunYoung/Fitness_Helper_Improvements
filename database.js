const mysql = require("mysql"); // mysql 모듈 로드
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