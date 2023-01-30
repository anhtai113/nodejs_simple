const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Database
let users = [];

// Add a middleware to make it handle json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.json("App listening on port ${port}!");
});

app.post('/users', (req, res) => {
    const user = req.body;
    console.log(user);
    users.push(user);

    res.send('User is added to the database');
});

app.get('/users', (req, res) => {
    const username = req.query.username;
    if (username) {
        res.json(users.filter(b => b.username && b.username.includes(username)))
    }
    else {
        res.json(users);
    }
});

app.get('/users', (req, res) => {
    res.json(users);
});


app.listen(port, () => console.log(`App listening on port ${port}!`))