/* Module Imports */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

/* App config */
const app = express();
app.use(bodyParser.json())
app.use(cors())

/* Temp Virtual DB */
const players = 
[
    {"name": "trixie", "level": "3", "ac": "16", "initive": "+3", "pass_per": 12, "pass_ins": 14},
    {"name": "LBL", "level": "3", "ac": "14", "initive": "+2", "pass_per": 15, "pass_ins": 15}
]

/* Routes */
app.get("/players", (req, res) => {
    return res.json(players)
})

module.exports = app;