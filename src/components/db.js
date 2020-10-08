import Creds from "./config";

function CreateConnection() {
  var sql = require("mysql");
  var con = sql.createConnection({
    host: "localhost",
    user: Creds.UserName,
    password: Creds.password,
    insecureAuth: true,
    database: "E-Ration",
  });
  return con;
}

function ExecuteQuery(sql_query) {
    var con = CreateConnection("eration")
    con.connect(function (err) {
    if (err) {
      throw err;
    }
    console.log("Connected :D");
    con.query(sql_query, function (err, res) {
      if (err) throw err;
      console.log("Executed CMD:" + res);
    });
  });
}

export default ExecuteQuery;