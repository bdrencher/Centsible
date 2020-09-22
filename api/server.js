const express = require('express');

let app = express();

app.listen(8080, () => {
    console.log("Listening");
})

app.get('/', (req, res) => {
    res.sendFile('/home/ben/Projects/Centsible/client/build/index.html');
});