var express = require('express')
var router = express.Router();

var app = express()

router.get('/', function(req, res, next) {
    res.render('join');
  });
  
router.post('/', function(req, res, next) {
    const message = req.body.employee + ' joined ' + req.body.company;
    res.send(JSON.stringify({'message': message}));
  });
  
  module.exports = router;