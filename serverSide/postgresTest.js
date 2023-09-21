var mysql = require('postgrens');

var con = mysql.createConnection({
  host: "localhost",
  user: "postgres",
  password: "dave129junE"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
