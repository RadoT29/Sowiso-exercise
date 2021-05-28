var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile('homePage.html', { root: "./public"});
});

module.exports = router;