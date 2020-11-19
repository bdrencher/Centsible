const express = require('express');
const path = require('path');

const bcrypt = require('bcrypt');

const users = require('./api/controller/usersController');
const retirementProfiles = require('./api/controller/retirementProfilesController');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.static(path.join(__dirname, 'client', 'src')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

/******** USERS *********/
app.post('/createUser', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({Success: false});
        } else {
            users.createUser(req.body.username, result, res);
        }
    });
});

app.post('/validateCredentials', (req, res) => {
    users.validateUserCredentials(req.body.username, req.b4ody.password, res)
});

app.delete('/deleteUser', (req, res) => {
    users.deleteUser(req.body.username, res);
})

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