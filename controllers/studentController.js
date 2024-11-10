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
        if(!studentId){
            return res.status(404).send({
                success: false,
                message: "Invalid Student ID"
            })
        }
        const data = await db.query('SELECT * FROM students WHERE id=?',[studentId]);
        if(!data){
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
            success:false,
            message: "Error in get student by id API",
            error
        })
        
    }
};


module.exports = {
    getStudents,
    getStudentByID
};