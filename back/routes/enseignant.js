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
    var enseignant = new Enseignant({
        nom: req.body.nom,
        matieres: req.body.matieres
    });
    console.log(req.body)
    enseignant.save(function(err) {
        if (err)
           throw err;
        else 
           console.log('Enseignant enregistré');
           res.statusCode = 200;
           return res.json("Enseignant enregistré");
    });
  });

module.exports = router;