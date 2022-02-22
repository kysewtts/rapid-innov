exports.sortByEfficiency = (arr) => {
  return arr.sort((a, b) => {
    return b.won / b.matches_played - a.won / a.matches_played;
  });
};
