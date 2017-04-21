var path = require('path');
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
	res.sendStatus(200);
	next();
},

function (req, res, next){
		require('simple-git')('/path/to/project')
 		.pull()
 		.then(function() {
        	console.log('pull done.')
    	});
}

);
module.exports = router;