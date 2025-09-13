const express = require('express');
const { readFile } = require('fs');

const application = express();

application.get('/home', (req, res) => {
    readFile('./home.html', 'utf8', (err, html) => {
        if (err) {
            res.status(500).send('Error loading home page');
        } else {
            res.send(html);
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
application.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});