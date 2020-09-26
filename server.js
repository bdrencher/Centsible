const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

const retirementProfiles = require('./api/controller/retirementProfilesController');

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

/******** RETIREMENT PROFILES *********/
app.post('/createRetirementProfile', (req, res) => {
    retirementProfiles.createRetirementProfile(req.body.username, req.body.profile, res);
});

app.put('/updateRetirementProfile', (req, res) => {
    retirementProfiles.updateRetirementProfile(req.body.username, req.body.profile, res);
});

app.post('/getRetirementProfile', (req, res) => {
    retirementProfiles.getRetirementProfile(req.body.username, res);
});

app.listen(port, () => {
    console.log("Listening");
});