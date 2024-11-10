const db = require("../config/db");

// GET ALL STUDENTS LIST
const getStudents = async (req, res) => {
    try {
        const data = await db.query('SELECT * FROM students')
        if (!data) {
            return res.status(404).send({
                success: false,
                message: 'No record found'
            })
        }
        res.status(200).send({
            success: true,
            message: 'All Students Recods',
            totalStudents: data[0].length,
            data: data[0],
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in getall API',
            error
        })

    }
};

// GET STUDENT BY ID
const getStudentByID = async (req, res) => {
    try {
        const studentId = req.params.id;
        if (!studentId) {
            return res.status(404).send({
                success: false,
                message: "Invalid Student ID"
            })
        }
        const data = await db.query('SELECT * FROM students WHERE id=?', [studentId]);
        if (data.length === 0) {
            res.status(404).send({
                success: false,
                message: "No Student Found",
                error
            })
        }
        res.status(200).send({
            success: true,
            studentDetails: data[0],
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in get student by id API",
            error
        })

    }
};

// CREATE STUDENT
const createStudent = async (req, res) => {
    try {
        const { name, roll_no, fees, classes, medium } = req.body;

        // Check if all required fields are present
        if (!id, !name || !roll_no || !fees || !classes || !medium) {
            return res.status(404).send({
                success: false,
                message: "Please fill the all fields"
            })
        }

        // Check if a student with the same id or roll_no already exists
        const existingStudent = await db.query(
            `SELECT * FROM students WHERE Roll_no = ?`, [roll_no]
        );

        if (existingStudent.length > 0) {
            return res.status(400).send({
                success: false,
                message: "A student with the same ID or roll number already exists.",
            });
        }

        // Insert new student data if no duplicate is found
        const data = await db.query(`INSERT INTO students (name, roll_no, fees, classes, medium) VALUES (?, ?, ?, ?, ? )`, [name, roll_no, fees, classes, medium])
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "Error in insert quary"
            })
        }
        res.status(200).send({
            success: true,
            message: "New Student record created",
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Create Student API",
            error
        })
    }
};

// UPDATE STUDENT RECORD
const updateStudent = async (req, res) => {
    try {
        const studentId = req.params.id
        if (!studentId) {
            return res.status(404).send({
                success: false,
                message: "Invalid ID"
            })
        }
        const { name, roll_no, fees, classes, medium } = req.body

        const data = await db.query(`UPDATE students SET name = ?, roll_no = ?, fees = ?, classes = ?, medium = ? WHERE id = ?`,
            [name, roll_no, fees, classes, medium, studentId]);

        if(data.affectedRows === 0){
            return res.status(500).send({
                success: false,
                message: "Error in Update data"
            })
        }
        res.status(200).send({
            success: true,
            message: "Student record updated!"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Update Student API",
            error
        })

    }
};

// DELETE STUDENT RECORD
const deleteStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        if(!studentId || isNaN(studentId)){
            return res.status(404).send({
                success: false,
                message: "Please provide student ID or Valid ID"
            })
        }
        await db.query(`DELETE FROM students WHERE id = ?`,[studentId])
        res.status(200).send({
            success: true,
            message: "Student record deleted successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: " Error in Delete API",
            error
        }) 
    }
};

module.exports = {
    getStudents,
    getStudentByID,
    createStudent,
    updateStudent,
    deleteStudent
};