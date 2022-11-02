//routes-index.js-Aafaq-Muzaffar-301190210-Nov-01-2022
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

module.exports = router;
