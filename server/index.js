const express = require("express");
const app = express();
const mysql = require("mysql");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();

// parses body content in app
app.use(bodyParser.urlencoded({ extended: true }));

// middleware
app.use(cors());

// api call
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.MY_SQL_HOST,
  user: process.env.MY_SQL_USER,
  password: process.env.MY_SQL_PASSWORD,
  database: process.env.MY_SQL_DATABASE,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM allBlueprintsII ";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});

/*

*/
