const db = require('../configs/config');

const schema2 = new db.Schema({
    name:{
        type: String,
        required: true
    },
    name_model:{
        type: String,
        required: true
    },
    type_model:{
        type: String,
        required: true
    },
    object:{
        type: JSON
    },
    description:{
        type: String,
        required: true
    },
    comments:{
        type: Array
    },
    date_create:{
        type: Date,
        default: Date.now()
    },
    date_update:{
        type: Date,
        default: Date.now()
    }
})

module.exports = db.model ('model', schema2);