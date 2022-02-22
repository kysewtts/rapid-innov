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
          : `No players found!!`,
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

exports.getByNameAndSport = (req, res, next) => {
  let fname = req.params.fname;
  let lname = req.params.lname;
  let sport = req.params.sport;
  const query =
    'SELECT * FROM PLAYERS WHERE FNAME=$1 AND LNAME=$2 AND SPORT=$3';
  const values = [fname, lname, sport];
  db.query(query, values)
    .then((resp) => {
      let value = [...resp.rows];
      if (resp.rows.length) {
        value = helpers.sortByEfficiency(value);
      }
      res.status(200).json({
        message: resp.rows.length
          ? 'Fetched successfully!!'
          : `No players with fname: ${fname}, lname: ${lname} and sport: ${sport} found!!`,
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
