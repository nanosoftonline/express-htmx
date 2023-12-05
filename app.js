const express = require("express")
const app = express()

const nunjucks = require('nunjucks');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static("public"))

//To parse incoming requests with JSON payloads, use the express.json() middleware before your routes
app.use(express.urlencoded({ extended: true }))

// To parse the incoming requests with JSON payloads
app.use(express.json())
app.locals.db = require('./db');

// Configure Nunjucks

// To use the template engine
app.get('/', (req, res) => {
    res.render('index.html', { title: 'Express Nunjucks Example' });
});

// app.get('/login', (req, res) => {
//     res.render('accounts/login.html', { title: 'Express Nunjucks Example' });
// });

app.use(require('./routes/accounts'));

app.listen(3000, () => console.info("Application running http://localhost:3000"))