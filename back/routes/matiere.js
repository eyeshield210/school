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

  router.post('/', function (req, res, next) {
    var enseignant = new Enseignant({
        nom: req.body.nom,
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
// router.post('/', function (req, res)){
//     console.log('tata:' + req.body.ensID);
//     if (!req.body.ensID || !req.body.content)
//       return res.sendStatus(422);
  
//     Enseignant.findById(req.body.ensID).then((enseignant) =>{
//       let matiere = new Matiere();
//       matiere.content = req.body.content;
//       matiere.state = req.body.state;
//       matiere.enseignant = enseignant;
//       matiere.save().then(() => {
//         enseignant.matieres.push(matiere);
//         enseignant.save().then(() => {
//           res.statusCode = 200;
//           return res.json(matiere.matTDO())
//         }).catch((e) => {
//             console.log(e);
//           });
//         });
//     }
// }
// }

// router.delete('/', function (req, res) {
//     Matiere.deleteMatiere(req.body,function(err,count){
//     if (err) {
//         res.status(400).json(err);
//     }
//     else {
//         res.json(req.body);
//     }
// });
// });


module.exports = router;