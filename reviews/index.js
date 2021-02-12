const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

const reviewsByBookId = {};

app.get('/books/:id/reviews', (req,res)=> {
    res.send(reviewsByBookId[req.params.id] || []);
});

app.post('/books/:id/reviews', (req,res)=> {
    const reviewId = randomBytes(4).toString('hex');
    const { content } = req.body;
    const reviews = reviewsByBookId[req.params.id] || [];

    reviews.push({ id: reviewId, content});
    reviewsByBookId[req.params.id] = reviews;
    res.status(201).send(reviews);
});

app.listen(4001, () => {
    console.log('Hey! Listening on port 4001.');
});