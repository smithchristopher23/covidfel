const express = require("express");
const mysql = require("mysql")
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const { error } = require("console");
app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        port: 3307,
        password: "",
        database: "covid"
    }

)

app.get("/", (req, res) => {
    res.send("Szerver működik!")
}
)
app.get("/v", (req, res) => {
    const sql = "Select *From eu_adatok"
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);

    })
})


app.listen(8080, () => {
    console.log("A server a 8080 porton fut!")
})