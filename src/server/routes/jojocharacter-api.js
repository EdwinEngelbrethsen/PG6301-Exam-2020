const express = require('express');
const {getRandomCharacter} = require('../db/jojocharacter');

const router = express.Router();

router.post('/jojo', (req, res) => {

    const payload = getRandomCharacter(7);

    res.status(201).json(payload);
});


module.exports = router;

/*Origin https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-07/src/server/routes/match-api.js*/