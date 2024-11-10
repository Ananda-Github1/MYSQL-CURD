const express = require('express');
const { getStudents, getStudentByID } = require('../controllers/studentController');

// Router Object
const router = express.Router();

// Get all students list || GET
router.get("/getall", getStudents);

// Get Student by ID || GET
router.get("/get/:id",getStudentByID);

module.exports = router;