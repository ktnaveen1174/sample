/* File name: index.js
 * Student name: Naveen Kanmani Thirunavukkarasu
 * Student ID: 301247248
 * Date: Oct 17, 2022 */

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* initializing user */
const user = {
    firstName: 'Naveen',
    lastName: 'Kanmani Thirunavukkarasu',
    admin: true
  }

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/aboutme', indexController.displayAboutPage);

/* GET Products page. */
router.get('/product', indexController.displayProductsPage);

/* GET Services page. */
router.get('/service', indexController.displayServicesPage);

/* GET Contact Us page. */
//router.get('/contact', indexController.displayContactPage);

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
