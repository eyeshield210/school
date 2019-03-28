var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Matiere = mongoose.model('Matiere');
var Enseignant = mongoose.model('Enseignant');

router.use(bodyParser.json());

router.get('/', function (req, res) {

    Enseignant.find()
    .populate('matieres')
    .then((enseignants) => {

        res.statusCode = 200;
        return res.json({
            lesenseignants: enseignants.map((enseignant) => {
            return enseignant.ensTDO();
            })
        });
    })
    .catch((err) => {
        console.log(err)
    });
});

router.post('/', function (req, res, next) {
    Enseignant.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

router.put('/', function (req, res, next) {
    Enseignant.updateEnseignant(req.body,res,function(err){
      if (err) {
          return res.send('Error updating Enseignant!');
      }
      else {
          return res.json(req.body);
      }
    });
  });

router.delete('/', function (req, res) {
    Enseignant.remove();
    Enseignant.deleteEnseignant(req.body,res,function(err){
      if (err) {
          return res.send('Error deleting Enseignant!');
      }
      else {
          return res.json(req.body);
      }
    });
});



module.exports = router;