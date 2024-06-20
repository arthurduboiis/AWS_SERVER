const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

// Créez une application Express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Configuration de la connexion à la base de données MySQL
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'arthur',
    password: '2401',
    database: 'aws_project'
});

// Connectez-vous à la base de données
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// request

app.post('/adduser', (req, res) => {
    const newUser = { name: req.body.name, point: req.body.point };
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, newUser, (err, result) => {
        if (err) throw err;
        res.send('User added...');
    });
});

app.get('/users', (req, res) => {
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/hello', (req, res) => {
    res.send('Hello Jest2!');
});



// Démarrez le serveur
const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });

if (require.main === module) {
    app.listen(PORT, () => {
      console.log(`Server is running at http://0.0.0.0:${PORT}`);
    });
} 
else {
    module.exports = app;
}