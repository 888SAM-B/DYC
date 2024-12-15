const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // Parses JSON requests

// Sample data
let courses = [
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" },
    { id: 1, name: "Python Basics" }
    
];

// Endpoints
app.get('/courses', (req, res) => {
    res.send(courses);
});

app.post('/courses', (req, res) => {
    const newCourse = { id: courses.length + 1, name: req.body.name };
    courses.push(newCourse);
    res.status(201).send(newCourse);
});

// Start the server
app.listen(3000, () => console.log('API running on http://localhost:3000'));
