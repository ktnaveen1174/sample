//controller-index.js-Aafaq-Muzaffar-301190210-Nov-01-2022
let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}
