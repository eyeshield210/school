const mongoose = require('mongoose');
const Matiere = mongoose.model('Matiere');

let EnseignantSchema = new mongoose.Schema({
    nom: String,
    matieres: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Matiere'
    }]
}, {
    timestamps: true
});


// EnseignantSchema.pre('remove', (next) => {
//     console.log("pre:");
//     Matiere.remove({todoId: this._id}).exec();
//     next();
// });

EnseignantSchema.methods.ensTDO = function() {
    return{
        id: this._id,
        nom: this.nom,
        lesmatieres : this.matieres.map((matiere) => {
            return matiere.matTDO();
        })
    }
};

// EnseignantSchema.statics.deleteEnseignant = function(body, res, next){
//     this.findByIdAndRemove(body.id, function(err) {
//         if (err) return next(err);
//         res.json(body);
//     });
// }

// EnseignantSchema.statics.updateEnseignant = function(body, res, next){
//     this.findByIdAndUpdate(body.id, body, function (err, put) {
//         if (err) return next(err);
//         res.json(body);
//     });
// }

module.exports=mongoose.model('Enseignant', EnseignantSchema);