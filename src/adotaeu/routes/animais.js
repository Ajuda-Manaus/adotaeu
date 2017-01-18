var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/novo', function(req, res, next) {
  res.render('animal/novo', { title: 'Novo'});
});

module.exports = router;
