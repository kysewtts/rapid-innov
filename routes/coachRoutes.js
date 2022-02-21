const express = require('express');

const coachControllers = require('../controllers/coachControllers');

const router = express.Router();

router.get('/:coachId', coachControllers.getPlayers);

module.exports = router;
