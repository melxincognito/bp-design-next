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

// get all blueprint data for all blueprints page
app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM allBlueprintsII ";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

// get blueprint data for the luxury items page

app.get("/api/get_luxury", (req, res) => {
  const sqlSelect = "SELECT * FROM allBlueprintsII WHERE style= 'luxury';";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

// get blueprint data for spanish items page
app.get("/api/get_spanish", (req, res) => {
  const sqlSelect = "SELECT * FROM allBlueprintsII WHERE style= 'spanish';";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

// get blueprint data for ranch items page
app.get("/api/get_ranch", (req, res) => {
  const sqlSelect = "SELECT * FROM allBlueprintsII WHERE style= 'ranch';";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

// get blueprint data for tiny home items page
app.get("/api/get_tinyhome", (req, res) => {
  const sqlSelect = "SELECT * FROM allBlueprintsII WHERE style= 'tinyhome';";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

// insert data from admin dashboard into database

app.post("/api/insert", (req, res) => {
  const image = req.body.image;
  const planNumber = req.body.planNumber;
  const beds = req.body.beds;
  const baths = req.body.baths;
  const sqft = req.body.sqft;
  const style = req.body.style;
  const garages = req.body.garages;
  const stories = req.body.stories;
  const description = req.body.description;

  const sqlInsert = `INSERT INTO allBlueprintsII (plan_number, image, beds, baths, sq_ft, garages, stories, style, description) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?)`;
  db.query(
    sqlInsert,
    [
      planNumber,
      image,
      beds,
      baths,
      sqft,
      garages,
      stories,
      style,
      description,
    ],
    (err, result) => {
      console.log(result);
    }
  );
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
