var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.send('INDEX API');
});

module.exports = router;