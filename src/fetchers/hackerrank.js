const { exec } = require("child_process");

const badges = (username, cb) => {
  exec(
    `curl https://www.hackerrank.com/rest/hackers/${username}/badges`,
    (err, stdout, stderr) => cb(!err && stdout ? JSON.parse(stdout) : null)
  );
};

module.exports = badges;
