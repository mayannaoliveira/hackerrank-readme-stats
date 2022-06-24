var express = require("express");
const badges = require("../src/fetchers/hackerrank");
const badge = require("../src/generators/hackerrank");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Hello World!!!</h1>");
});

router.get("/hackerrank/badges", (req, res) => {
  badges(req.query.username, (result) => {
    if (result) {
      res.contentType("image/svg+xml");
      const badgeList = result.models.filter((b) => b.stars > 0);
      res.send(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${
          100 * (badgeList.length - 1) + 91.66667
        } 100" width="${
          100 * (badgeList.length - 1) + 91.66667
        }" height="100"> ${badgeList
          .map((b, index) =>
            badge(
              b.badge_short_name || b.badge_name,
              b.stars,
              b.total_stars,
              index
            )
          )
          .join("")} </svg>`
      );
    } else res.send(result);
  });
});

module.exports = router;
