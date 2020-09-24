const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const jojoApi = require('./routes/jojocharacter-api');
// const jojoRepo = require('./db/jojocharacter');

const app = express();

//to handle JSON payloads
app.use(bodyParser.json());

//--- Routes -----------
app.use('/api', jojoApi);

/*
app.get('/api/stands', (req, res) => {


    const id = req.query["id"];

    if (id) {
        res.json(jojoRepo.getRandomCharacter(id));
    } else {
        res.json(jojoRepo.getAllCharacters());

    }
});
*/


app.use(express.static('public'));

app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});


module.exports = app;