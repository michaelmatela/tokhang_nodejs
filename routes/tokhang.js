var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://sampledatabase:samplepassword@ds261969.mlab.com:61969/tokhang');


router.get('/tokhangs', function(req, res, next){
	db.tokhangs.find(function(err, tokhangs){
		if(err){
			res.send(err);
		}
		res.json(tokhangs);
	});
});

router.get('/tokhangs/:id', function(req, res, next){
	db.tokhangs.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, tokhang){
		if(err){
			res.send(err);
		}
		res.json(tokhang);
	});
});

router.post('/tokhangs', function(req,res,next){
	var tokhang = req.body;
	if(!tokhang.firstname || !tokhang.lastname || (tokhang.isjailed + '') || (tokhang.isalive + '')){
		res.status(400);
		res.json({"error": "bad data"});
	}
	else{
		db.tokhangs.save(tokhang, function(err, tokhang){
			if(err){
				res.send(err);
			}
			res.json(tokhang);
		});
	}

});

router.delete('/tokhangs/:id', function(req, res, next){
    db.tokhangs.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, tokhang){
        if(err){
            res.send(err);
        }
        res.json(tokhang);
    });
});

router.put('/tokhangs/:id', function(req, res, next){
	var tokhang = req.body;
	var updTokhang = {};

	if(tokhang.isAlive){
		updTokhang.isAlive = tokhang.isAlive;
	}
	if(tokhang.isJailed){
		updTokhang.isJailed = tokhang.isJailed;
	}
	if(tokhang.firstname){
		updTokhang.firstname = tokhang.firstname;
	}
	if(tokhang.lastname){
		updTokhang.lastname = tokhang.lastname;
	}

	if(!updTokhang){
		res.status(400);
		res.json({"error":"bad data"})
	}
	else{
		db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTokhang,{},function(err, tokhang){
			if(err){
				res.send(err);
			}
			res.json(tokhang);
		});
	}
	
});


module.exports = router;