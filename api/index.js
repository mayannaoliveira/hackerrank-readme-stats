const badges = require("../src/generators/hackerrank");

module.exports = (req, res) => {
  const { username } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  badges(username, (result) => res.send(result));
};
