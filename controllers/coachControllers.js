const db = require('../db/queries');

const helpers = require('../helpers/helpers');

exports.getPlayers = (req, res, next) => {
  let id = req.params.coachId;
  let query = 'SELECT * FROM PLAYERS WHERE CID=$1';
  db.query(query, [id])
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

exports.getNameAndSport = (req, res, next) => {
  let coachId = req.params.coachId;
  let fname = req.params.fname;
  let lname = req.params.lname;
  let sport = req.params.sport;
  const query =
    'SELECT * FROM PLAYERS WHERE CID=$1 AND FNAME=$2 AND LNAME=$3 AND SPORT=$4';
  const values = [coachId, fname, lname, sport];
  db.query(query, values).then((resp) => {
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
  });
};

exports.postPlayers = (req, res, next) => {
  let coachId = req.params.coachId;
  let fname = req.body.fname;
  let lname = req.body.lname;
  let played = req.body.matches_played;
  let won = req.body.won;
  let lost = req.body.lost;
  let sport = req.body.sport;
  const values = [fname, lname, played, won, lost, sport, coachId];
  const query =
    'INSERT INTO PLAYERS(FNAME, LNAME, MATCHES_PLAYED, WON, LOST, SPORT, CID) VALUES($1, $2, $3, $4, $5, $6, $7)';
  db.query(query, values)
    .then((resp) => {
      res.status(201).json({
        message: 'Player inserted successfully!!',
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
