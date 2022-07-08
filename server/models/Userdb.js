require("dotenv").config();
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    isHR: Boolean
})
UserSchema.methods.generateAuthToken = () => {
    return jwt.sign(
        { email: this.email, username: this.username, isHR: this.isHR },
        process.env.JWTPRIVATEKEY,
        { expiresIn: "2h" }
    )
}


const User = mongoose.model("User", UserSchema);
let hr = new User({
    firstName: "hr",
    lastName: "hr",
    username: "hr",
    password: "hr",
    email: "hr@gmail.com",
    isHR: true,
})

// User.findOne({ email: "hr@gmail.com" })
//     .then(res => console.log(res));

// initialize the hr account;
// hr
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });



module.exports = User;
