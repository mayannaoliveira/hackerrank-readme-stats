const badges = require("../src/generators/hackerrank");

module.exports = (req, res) => {
  res.contentType("image/svg+xml");
  badges(req.query.username, (result) => res.send(result));
};
