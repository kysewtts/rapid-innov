const db = require('../db/queries');

exports.getPlayers = (req, res, next) => {
  let id = req.params.coachId;
  let query = 'SELECT * FROM PLAYERS WHERE CID=$1';
  db.query(query, [id]).then((resp) => {
    res.status(200).json({
      message: 'Fetched successfully!!',
      players: resp.rows,
    });
  });
};
