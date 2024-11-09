const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mysqlpool = require("./config/db");

// Configure dotenv
dotenv.config();


// Rest Object
const app = express();


// Middleware
app.use(express.json());
app.use(morgan("dev"));


// Routes
app.get("/test", (req, res) => {
    res.status(200).send('<h1> NodeJs MYSQL Application </h1>')
});


//PORT
const PORT = process.env.PORT || 8000;

// Conditionary Listen
mysqlpool.query('SELECT 1').then(() => {
    // MYSQL
    console.log('MYSQL DB Connected');
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log(error);
    
});



