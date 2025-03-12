const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection(
    {
        user:"root",
        host:"localhost",
        port:3306,
        password:"",
        database:"felveteli"
    }
);

app.get("/", (req,res) => {
    res.send("Működik a szerver");
});

app.listen(3000, () => {
    console.log("A téliolimpia a 3000-es porton fut");
});