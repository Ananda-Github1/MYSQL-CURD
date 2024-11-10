
# Student Management API


This is a simple Student Management API built with Node.js and Express.js. The API allows you to manage student data, including retrieving a list of students, getting individual student details, creating new students, updating student records, and deleting students.



## Usage

Use a tool, Postman to interact with the API endpoints
##  API Endpoints

| Endpoint             | Method | Description                  |
|----------------------|--------|------------------------------|
| `/api/students/getall` | GET    | Retrieve all students       |
| `/api/students/get/:id`| GET    | Retrieve a single student by ID |
| `/api/students/create` | POST   | Create a new student        |
| `/api/students/update/:id` | PUT | Update student details by ID |
| `/api/students/delete/:id` | DELETE | Delete a student by ID      |

## Technologies Used

| Technology | Description |
|------------|-------------|
| Node.js    | JavaScript runtime for server-side development. |
| Express    | Lightweight web framework for creating RESTful APIs. |
| MySQL      | Relational database for data storage and management. |

