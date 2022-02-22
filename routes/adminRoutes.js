const express = require('express');

const adminControllers = require('../controllers/adminControllers');

const router = express.Router();

router.get('/:fname/:lname/:sport', adminControllers.getByNameAndSport);
router.get('/', adminControllers.getPlayers);

module.exports = router;
