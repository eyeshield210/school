const mongoose = require('mongoose');

let MatiereSchema = new mongoose.Schema({
    content:{
        type : String,
        maxlenght:28
    },
    state:{
        type:Boolean,
        default:true
    },
    enseignant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Enseignant'
    }
}, {
    timestamps:true
});

MatiereSchema.methods.matTDO = function(){
    return {
        id:this._id,
        content:this.content,
        state:this.state
    }
};

MatiereSchema.statics.deleteMatiere = function(body, res, next){
    this.findByIdAndRemove(body.id, function(err) {
        if (err) return next(err);
        res.json(body);
    });
}
MatiereSchema.statics.updateMatiere = function(body, res, next){
    this.findByIdAndUpdate(body.id, body, function (err, put) {
        if (err) return next(err);
        res.json(body);
    });
}

module.exports= mongoose.model('Matiere',MatiereSchema);