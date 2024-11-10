const express = require('express');
const { getStudents,
    getStudentByID,
    createStudent, 
    updateStudent,
    deleteStudent } = require('../controllers/studentController');

// Router Object
const router = express.Router();

// Get all students list || GET
router.get("/getall", getStudents);

// Get Student by ID || GET
router.get("/get/:id", getStudentByID);

// Create Student || POST
router.post("/create", createStudent);

// Update Student || PUT
router.put("/update/:id", updateStudent);

// Delete Student || Delete
router.delete("/delete/:id", deleteStudent);

module.exports = router;