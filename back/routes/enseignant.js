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

router.get('/:id', function (req, res) {

    Enseignant.findById(req.params.id)
    .populate('matieres')
    .then((enseignant) => {

        res.statusCode = 200;
        enseignant = enseignant.ensTDO();
        return res.json( enseignant );
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

router.put('/:id', function (req, res, next) {
    Enseignant.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });


router.delete('/:id', function(req, res) {
    Enseignant.findById(req.params.id)
    .populate('matieres')
    .then((enseignant)=>{
        if(enseignant){//Il faut vérifier que l'enseignant est différent de null (sinon ça fait un warning)
            enseignant.matieres.forEach(function(matiere){
                console.log(matiere.id);
                Matiere.findByIdAndDelete(matiere.id, function(err){
                    if (!err) {
                        //Si on utilise res.send ici ça fait un bug (on ne peut pas l'utiliser plusieurs fois et il est)
                    } else {

                    }
                });
            });
        }
    });
    Enseignant.findByIdAndDelete(req.params.id, function(err) {
        if (!err) {
            return res.send('Enseignant deleted!');
        } else {
            return res.send('Error deleting Enseignant!');
        }
    });
  
});


module.exports = router;