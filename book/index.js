const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const books = {};

app.get('/books', (req, res) => {
    res.send(books);
});

app.post('/books', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    books[id] = { id, title };
    res.status(201).send(books[id]);
});

app.listen(4000, () => {
    console.log('Hey! Listening on port 4000.');
});