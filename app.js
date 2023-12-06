const express = require("express")
const app = express()


const nunjucks = require('nunjucks');
nunjucks.configure("views", {
    autoescape: true,
    express: app
});

app.use((req, res, next) => {
    res.locals.currentUrl = req.url;
    res.locals.useLayout = req.headers["hx-request"] !== "true";
    next();
})


app.get("/", (req, res) => {
    res.render("pages/home.html")
})

app.get("/users", (req, res) => {
    res.render("pages/users.html")
})

app.get("/posts", (req, res) => {
    res.render("pages/posts.html")
})
app.get("/nav/:url", (req, res) => {
    res.render("partials/sidenav.html", { url: req.params.url })
})

app.listen(3000, () => {
    console.info(`Application running http://localhost:3000`)
})