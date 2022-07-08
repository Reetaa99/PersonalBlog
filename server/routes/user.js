const User = require("../models/Userdb.js")
const router = require("express").Router()
router.post("/login", async (req, res) => {
    console.log(req.body)
    //{ email: 'hr@gmail.com', password: 'hr' }
    const user = await User.findOne({ email: req.body.email })
    console.log(user)
    if (user) {
        //navigate
        let jwt = user.generateAuthToken();
        res.send({ jwt: jwt, message: "You successfully logged in" })
    } else { // user is null
        res.send({ message: "your email or password is wrong" })
    }
})

router.post("/signup", async (req, res) => {
    console.log(req.body)
    const { email, password, username, lastName, firstName } = req.body;
    //{ email: 'hr@gmail.com', password: 'hr' }
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        //navigate
        res.send({ message: "this email already exists" })
    } else { // user is null
        let newUser = new User({
            email,
            password,
            username,
            lastName,
            firstName,
            isHR: false
        })
        newUser.save();
        res.send({ message: "You successfully signed up" })
    }
})

module.exports = router;