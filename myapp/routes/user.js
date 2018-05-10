var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/:id', function(req, res, next) {
	let id = req.params.id ;
	
	connection.query(`SELECT * from gpscoord where number=${id}`, function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify(results));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});

module.exports = router;
