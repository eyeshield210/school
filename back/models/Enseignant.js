const mongoose = require('mongoose');
const Matiere = mongoose.model('Matiere');

let EnseignantSchema = new mongoose.Schema({
    nom: {
        type: String
    },
    matieres: [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Matiere'
    }]
}, {
    timestamps: true
});


EnseignantSchema.pre('remove', (next) => {
    console.log("pre:");
    Matiere.remove({todoId: this._id}).exec();
    next();
});

EnseignantSchema.methods.ensTDO = function() {
    return{
        id: this._id,
        nom: this.nom,
        lesmatieres : this.matieres.map((matiere) => {
            return matiere.matTDO();
        })
    }
};

module.exports=mongoose.model('Enseignant', EnseignantSchema);