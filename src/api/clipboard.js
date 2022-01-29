const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    var color = req.query.color;
    res.send(color);
    console.log('#' + color);
});

app.listen(3000, (err) => {
    if (err) {
        console.error(err)
        throw err;
    } else {
        console.log('Running on PORT 3000!');
    }
});