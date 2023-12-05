const auth = (req, res, next) => {
    const username = req.cookies.username;
    if (username && username === 'demo') {
        next();
    } else {
        res.redirect('/account/login');
    }
};

module.exports = auth;