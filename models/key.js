const db = require('../configs/config');

const schema1 = new db.Schema({
    key_api:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true,
        trim: true
    }
})

module.exports = db.model ('key', schema1);