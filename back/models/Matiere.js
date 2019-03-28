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

module.exports= mongoose.model('Matiere',MatiereSchema);