const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();

//SET app environment
HOST = '0.0.0.0';
PORT = 8080;

// parse application/json
app.use(bodyParser.json());

// create connection to database
const pool = mysql.createPool ({
    host: 'mysql1',
    user: 'root',
    password: 'admin',
    database: 'db2',
    port: 3306
});

//Use a promise to connect to the database
const db = pool.promise();

//Set Connection
db.getConnection()
    .then(connection => {
        console.log('Connected to database');
    })
    .catch(err => {
        console.error('Error connecting to database:', err);
        process.exit(1);
    });

//View data from employees table
app.get('/employees', (req, res) => {
    db.query('SELECT * FROM employees')
        .then(([rows, fields]) => {
            res.json(rows); 
        })
        .catch(err => {
            console.error('DB error on SELECT:', err);
            return res.status(500).json({ error: 'Database error while fetching employees' });
        });
}); 

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
  });
