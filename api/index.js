const badges = require("../src/generators/hackerrank");

module.exports = (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");
  badges(req.query.username, (result) => res.send(result));
};
