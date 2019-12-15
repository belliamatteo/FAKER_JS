var express = require('express'); //Carica il modulo express
var router = express.Router(); //Ottiene un oggetto router
var poeta = require('poetajs');

router.get('/users/:generate/', function(req, res, next){ //Rendiamo il poeta un parametro
 res.send(poeta.info(req.params.poeta));
})

module.exports = router;