const express = require('express');

const coachControllers = require('../controllers/coachControllers');

const router = express.Router();

router.get('/:coachId/:fname/:lname/:sport', coachControllers.getNameAndSport);
router.get('/:coachId', coachControllers.getPlayers);
router.post('/:coachId', coachControllers.postPlayers);

module.exports = router;
