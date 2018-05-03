var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
	connection.query('SELECT * from gpscoord', function (error, results, fields) {
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
