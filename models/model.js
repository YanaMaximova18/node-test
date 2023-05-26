const db = require('../configs/config');
const shema = new db.Shema({
    name:{
        type: String,
        require: true,
        trim: true
    },
    text:{
        type: String,
        require: true,
        trim: true
    },
    date:{
        type: date,
        default: Date.now()
    }
},
{versionKey: false});

module.exports = db.model ('user', schema);