const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    function write() {
        var data = [
            JSON.stringify('#'+color)
        ]

        fs.writeFile('color.json',data, (err) => {
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