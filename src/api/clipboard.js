const express = require('express');
const app = express();
const fs = require('fs');
const http = require('http');

app.get('/', (req, res) => {
    function write() {
        fs.writeFile('color.json',JSON.stringify('#'+color), (err) => {
            if (err) console.error(err);
        });
    }
    var color = req.query.color;
    res.send(color);
    console.log('#' + color);
    write();
});

// JSON.stringify('color') +':'+JSON.stringify('#'+color)
app.listen(3000, (err) => {
    if (err) {
        console.error(err)
        throw err;
    } else {
        console.log('Running on PORT 3000!');
    }
});