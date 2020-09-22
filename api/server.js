const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.sendFile('/home/ben/Projects/Centsible/client/build/index.html');
});


app.listen(port, () => {
    console.log("Listening");
});