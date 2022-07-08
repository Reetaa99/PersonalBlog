require("dotenv").config();
// console.log(process.env)
require("./models/Userdb.js")
const express = require("express");
const cors = require("cors");

var connection = require("./db")


var userRouter = require('./routes/user');
const req = require("express/lib/request");
var app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.use(userRouter);

const PORT = process.env.PORT || 4000;
connection.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
})
