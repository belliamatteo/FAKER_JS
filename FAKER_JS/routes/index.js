var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'POETI' });
});

router.get('/pages/:poeta/', function(req, res, next){
 if (typeof poeta.info(req.params.poeta) === "undefined") {
   return next(createError(422, 'OOPS! Poeta not found'));
 }
 else{
      res.render('poeta', {poeta: poeta.info(req.params.poeta)}) ; //Rendiamo il poeta un parametro
 }
})
module.exports = router;