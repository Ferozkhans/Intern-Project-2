const express = require('express');
const router = express.Router();

const collegeController = require("../controllers/collegeController")

const internController = require("../controllers/internController")


router.post('/functionup/colleges', collegeController.createColleges);

router.post('/functionup/interns', internController.createInterns);

router.get('/functionup/intern', internController.getcollegeDetails);


//router.get('/functionup/collegeDetails',internController.collegeDetails);

module.exports =  router;

