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

// connecting to SQL database
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

// Creating dynamic paths for getting blueprint item data by the
// database name in MySQL
function getBlueprintsByDatabaseName(databaseName) {
  app.get(`/api/get_${databaseName}`, (req, res) => {
    const sqlSelect = `SELECT * FROM ${databaseName}  `;
    db.query(sqlSelect, (err, result) => {
      res.send(result);
    });
  });
}

// Creating dynamic paths for browsing blueprints by styles
function getBlueprintDataByStyle(style) {
  app.get(`/api/get_${style}`, (req, res) => {
    const sqlSelect = `SELECT * FROM allBlueprintsII WHERE style= '${style}';`;
    db.query(sqlSelect, (err, result) => {
      res.send(result);
    });
  });
}

// insert data from admin dashboard into database

function passBlueprintDataToDatabase(slugName, databaseName) {
  app.post(`/api/insert_${slugName}`, (req, res) => {
    const image = req.body.image;
    const planNumber = req.body.planNumber;
    const beds = req.body.beds;
    const baths = req.body.baths;
    const sqft = req.body.sqft;
    const style = req.body.style;
    const garages = req.body.garages;
    const stories = req.body.stories;
    const description = req.body.description;

    const sqlInsert = `INSERT INTO ${databaseName} (plan_number, style, beds, baths, stories, sq_ft, garages, image, description) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(
      sqlInsert,
      [
        planNumber,
        style,
        beds,
        baths,
        stories,
        sqft,
        garages,
        image,
        description,
      ],
      (err, result) => {
        console.log(result);
      }
    );
  });
}

// TODO figure out how to get the data for the individual blueprint page dynamically based off the plan number

app.get("/api/get_blueprint_number/:planNumber", (req, res) => {
  const planNumber = req.params.planNumber;
  const sqlSelectPlan = `SELECT * FROM allBlueprintsII WHERE plan_number = ?`;
  db.query(sqlSelectPlan, planNumber, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

// Getting all blueprint data to render all items in the all blueprints page
app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM allBlueprintsII ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

// DELETE ITEM FROM CART ITEMS DATABASE IF A USER CLICKS ON THE
// SHOPPING CART ITEM TRASH CAN ICON

app.delete("/api/delete_cart/:planNumber", (req, res) => {
  const planNumber = req.params.planNumber;
  const sqlDelete = "DELETE FROM cart_items WHERE plan_number = ?";
  db.query(sqlDelete, planNumber, (err, result) => {
    if (err) console.log(err);
  });
});

// DELETE ITEM FROM FAVORITES DATABASE IF A USER CLICKS ON THE
// BLUEPRINT CARD FILLED HEART ICON

app.delete("/api/delete_favorites/:planNumber", (req, res) => {
  const planNumber = req.params.planNumber;
  const sqlDelete = "DELETE FROM favorites_test WHERE plan_number = ?";
  db.query(sqlDelete, planNumber, (err, result) => {
    if (err) console.log(err);
  });
});

// pass blueprint data to db
passBlueprintDataToDatabase("cart_items", "cart_items");
passBlueprintDataToDatabase("all_blueprints", "allBlueprintsII");
passBlueprintDataToDatabase("favorites", "favorites_test");

// get blueprint data by database name
getBlueprintsByDatabaseName("cart_items");
getBlueprintsByDatabaseName("favorites_test");

// get blueprint data by style
getBlueprintDataByStyle("luxury");
getBlueprintDataByStyle("spanish");
getBlueprintDataByStyle("ranch");
getBlueprintDataByStyle("tinyhome");
getBlueprintDataByStyle("modern");
getBlueprintDataByStyle("cabin");

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
