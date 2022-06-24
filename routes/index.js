const express = require("express");
const badges = require("../src/generators/hackerrank");
const router = express.Router();

router.get("/hackerrank/badges", (req, res) => {
  res.contentType("image/svg+xml");
  badges(req.query.username, (result) => res.send(result));
});

module.exports = router;
