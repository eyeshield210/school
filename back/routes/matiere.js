var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Enseignant = require('../models/Enseignant');
var Matiere = require('../models/Matiere');

router.use(bodyParser.json());

router.get('/', function (req, res, next) {
    Matiere.find(function (err, matieres) {
      if (err) return next(err);
      res.json(matieres);
    });
  });

router.post('/', function (req, res){
    console.log('tata:' + req.body.ensID);
    if (!req.body.ensID || !req.body.content)
      return res.sendStatus(422);
  
    Enseignant.findById(req.body.ensID).then((enseignant) =>{
      let matiere = new Matiere();
      matiere.content = req.body.content;
      matiere.state = req.body.state;
      matiere.enseignant = enseignant;
      matiere.save().then(() => {
        enseignant.matieres.push(matiere);
        enseignant.save().then(() => {
          res.statusCode = 200;
          return res.json(matiere.matTDO())
        }).catch((e) => {
            console.log(e);
          });
        });
    });
});

// router.put('/', function (req, res, next) {
//   Matiere.updateMatiere(req.body,res,function(err){
//     if (err) {
//         return res.send('Error updating Matiere!');
//     }
//     else {
//         return res.json(req.body);
//     }
//   });
// });

router.put('/:id', function(req, res) {

  Matiere.findByIdAndUpdate(req.params.id, req.body,function(err) {
    if (!err) {
        return res.send('Matiere updated!');
    } else {
        return res.send('Error updating Matiere!');
    }
});
});
  
// router.delete('/', function (req, res) {
//     Matiere.deleteMatiere(req.body,res,function(err){
//       if (err) {
//           return res.send('Error deleting Matiere!');
//       }
//       else {
//           return res.json(req.body);
//       }
//     });
// });

router.delete('/:id', function(req, res) {

  Matiere.findByIdAndRemove(req.params.id, function(err) {
    if (!err) {
        return res.send('Matiere deleted!');
    } else {
        return res.send('Error deleting Matiere!');
    }
});
});

module.exports = router;