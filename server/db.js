require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGOKEY,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    (error, data) => {
        if (error) {
            return console.log(error);
        }
        console.log("connect success!");
        return data;
    }
);

module.exports = mongoose.connection;