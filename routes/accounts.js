const express = require("express")
const router = express()
const jwt = require("jsonwebtoken")

router.post("/accounts/login", async (req, res) => {
    const { username, password } = req.body;

    if (username === "demo" && password === "demo") {
        const token = jwt.sign({ username: username }, process.env.JWT_SECRET, { expiresIn: '15m' });
        res.cookie('access-token', token, { maxAge: 900000, httpOnly: true, secure: true });
        res.redirect("/")

        //generate token
        //set cookie with expiration time of 15 minutes
    } else {
        res.json({ status: "error", message: "Login failed" })
    }
})

router.get("/accounts/login", async (req, res) => {
    res.render("accounts/login")
})


router.get("/accounts/logout", async (req, res) => {
    res.clearCookie("access-token")
    res.redirect("/accounts/login")
})


module.exports = router;