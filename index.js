const express = require('express');
const app = express();
const mysqlConnection =  require('./models/dbConfig')

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('server app listening on port ' + PORT)
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.get('/student', (req, res, next) => {
    mysqlConnection.query('SELECT * FROM student', (err, rows) => {
        if(!err)
        res.send(rows)
        else
        res.send(err)
    })
})

app.get('/student/:id', (req, res, next) => {
    mysqlConnection.query('SELECT * FROM student WHERE id = ?', [req.params.id],(err, rows) => {
        if(!err)
        res.send(rows)
        else
        console.log(err)
    })
})

app.post('/student/add', (req, res, next) => {
    const newUser = ['baraban', 'pierre', 'DC2']
    mysqlConnection.query('INSERT INTO student (name, firstname, classe) VALUES (?, ?, ?)', newUser,(err, rows) => {
        if(!err)
        res.send('Ajout réussi')
        else
        console.log(err)
    })
})

app.put('/student/:id', (req, res, next) => {
    mysqlConnection.query('UPDATE student SET name = "Ruben" WHERE id = ?', [req.params.id],(err, rows) => {
        if(!err)
        res.send(rows)
        else
        console.log(err)
    })
});

app.delete('/student/:id', (req, res, next) => {
    mysqlConnection.query('DELETE FROM student WHERE id = ?', [req.params.id],(err, rows) => {
        if(!err)
        res.send('delete reussi')
        else
        console.log(err)
    })
});h