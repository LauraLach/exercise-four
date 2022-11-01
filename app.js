const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send("Goodbye World")
});

app.listen(port, () => console.log("Working!"));