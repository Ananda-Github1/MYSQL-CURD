const express = require('express');
const { getStudents } = require('../controllers/studentController');

// Router Object
const router = express.Router();

// Get all students list || GET
router.get("/getall", getStudents);

module.exports = router;