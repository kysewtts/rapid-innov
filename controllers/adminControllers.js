const db = require('../db/queries');
const helpers = require('../helpers/helpers');

exports.getPlayers = (req, res, next) => {
  const query = 'SELECT * FROM PLAYERS';
  db.query(query)
    .then((resp) => {
      let value = [...resp.rows];
      if (resp.rows.length) {
        value = helpers.sortByEfficiency(value);
      }
      res.status(200).json({
        message: resp.rows.length
          ? 'Fetched successfully!!'
          : `No players with coachId:${id} found`,
        players: resp.rows.length ? value : 0,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
